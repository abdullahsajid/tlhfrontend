import React, { useEffect, useState } from 'react';
import { Input } from 'src/components/ui/input';
import { Button } from 'src/components/ui/button';
import { useLocation, useParams } from 'react-router-dom';
import socket from './scoket'
import { useFetchAllMessagesQuery,useCreateMessagesMutation } from 'src/features/chats/chatApis';
import { useSelector } from 'react-redux';
import Loader from 'src/components/Loader/Loader';
import ScrollableFeed from 'react-scrollable-feed';
import * as moment from 'moment';

const ChatPanel = () => {
    const [message, setMessage] = useState([]);
    const [chatMess, setChatMess] = useState('');
    const param = useParams();
    const location = useLocation()
    // console.log(location.state.idsender,location.state.userId);
    let paramid = param.id1;
    let paramid2 = param.id2
    const userData = useSelector((state) => state.login.loginUser.data)
    const {data,isLoading} = useFetchAllMessagesQuery(paramid)
    const [createMessages] = useCreateMessagesMutation()

    useEffect(() => {
        if(data && data?.data){
            setMessage(data?.data)
            let roomId = getRoomId(location.state.idsender,location.state.userId)
            socket.emit('join chat',roomId)
        }
    },[data,userData,paramid2])
    
    useEffect(() => {
        socket.emit('setup',userData)
        socket.on('connected',() => {
            console.log("socket connected!");
        })

        socket.on('message recieved',(recieve) => {
            console.log("recieve:",recieve);
            setMessage((pre) => [...pre,recieve])
        })
        // socket.on('receiveMess', (newMessage) => {
        //     setMessage((prevMessages) => [...prevMessages, {content:newMessage,profileinfo:{id:paramid2}}]);
        //     console.log("new message:", newMessage);
        // });
        // setMessage(data?.data)
        return () => {
            socket.off('message recieved');
        };
    }, [userData]);

    const handleMessage = async (e) => {
        e.preventDefault();
        if(chatMess.trim() === ''){
            return
        }else{
            let messData = {sender_id:paramid2,content:chatMess,chat_id:paramid}
            const {data:resMess} = await createMessages(messData)
            let sendData = resMess?.data[0][0]
            let roomId = getRoomId(location.state.idsender,location.state.userId)
            socket.emit('new message', {sendData,roomId});
            setChatMess('');
        }
    };

    // useEffect(() => {
    //     socket.on('message recieved',(recieve) => {
    //         console.log("recieve:",recieve);
    //         setMessage((pre) => [...pre,recieve])
    //     })
    // },[])

    const getRoomId = (user1, user2) => {
        return [user1, user2].sort().join('_');
    };

    return (
        <div className='flex flex-col justify-end h-full w-[50vw] shrink  overflow-x-hidden overflow-y-hidden transition-all'>
            <div className='flex flex-col gap-2 py-2 h-[80vh] shrink overflow-x-auto overflow-y-auto px-1 transition-all'>
                <ScrollableFeed className='flex flex-col gap-2 px-4'>
                    {isLoading ? <div className='flex items-center justify-center'><Loader/></div> :message.length > 0 && 
                        message.map((val, index) => (
                            <div className={`flex ${(paramid2 == val?.sender_id) ? "justify-end items-end" : "justify-start items-start"}`}>
                                <div key={index} className={`bg-[#fff] flex flex-col rounded-md px-2 py-1 w-fit
                                ${(paramid2 == val?.sender_id) ? 'items-end' : 'items-start'}`}>
                                    <div className='overflow-hidden'>{val.content}</div>
                                    <div className='text-[10px]'>{moment(val.createdAt)?.fromNow()}</div>
                                </div>
                            </div>
                        ))
                    }
                </ScrollableFeed>
            </div>
            <form className='flex flex-row items-center gap-2' onSubmit={handleMessage}>
                <Input type="text" className="border-2 w-full h-full px-2" 
                    value={chatMess} 
                    onChange={(e) => setChatMess(e.target.value)}
                    placeholder="Type here...."
                 />
                <Button type='submit'>Sent</Button>
            </form>
        </div>
    );
};

export default ChatPanel;
