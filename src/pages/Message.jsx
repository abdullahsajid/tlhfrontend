import React, { useEffect, useState } from 'react';
import {Outlet, useNavigate, useParams } from 'react-router-dom';
import socket from './scoket';
import { useRetrieveChatsQuery } from 'src/features/chats/chatApis';
import Loader from 'src/components/Loader/Loader';
import { useSelector } from 'react-redux';

const Message = () => {
    const navigation = useNavigate();
    const param = useParams()
    const userData = useSelector((state) => state.login.loginUser.data)
    const {data,isLoading} = useRetrieveChatsQuery()
    // console.log("chatssss",data);


    // useEffect(() => {
    //     socket.on('connect', () => {
    //         console.log('connected');
    //         console.log(socket.id);
    //         setSocketId(socket.id);
    //     });

    //     let userData = JSON.parse(localStorage.getItem('loginUser'));
    //     socket.emit('joinchat', `${userData.data.id}`);
    //     // socket.on('connected', (res) => {
    //     //     console.log('connected to room:', res);
    //     // });

    //     socket.on('receiveMess', (newMessage) => {
    //       setMessage((prevMessages) => [...prevMessages, newMessage]);
    //       console.log("new message:", newMessage);
    //     });

    //     return () => {
    //         socket.off('connect');
    //         socket.off('connected');
    //         // socket.off('receiveMess');
    //     };
    // }, []);

    const handlerNav = (id,senderId,idsender,userId) => {
      navigation(`/message/${id}/${senderId}`,{state:{idsender,userId}});
      socket.emit('joinchat',id);
    };

  
    return (
        <div className='py-6 px-10 max-sm:px-4 transition-all w-full flex flex-row gap-2'>
            <div className='flex flex-col gap-2 w-[20vw] border-r-2 border-[#000] h-[89vh] px-2'>
                {isLoading ? <div className='flex items-center justify-center mt-5'><Loader/></div> : data?.data?.length <= 0 ? <div className='flex items-center justify-center mt-5'>no users</div> : 
                    data?.data?.map((val,index) => (
                    <div className={`text-slate-500 text-sm font-[500] border-2 border-[#0F172A]
                        rounded-md transition-all hover:bg-slate-900 hover:text-[#fff] cursor-pointer flex flex-row justify-start items-center gap-2 py-3.5 px-3 pl-2
                        ${(param?.id1 == val?.chatId) && (param?.id2 == userData?.id) ? 'bg-slate-900' : ''}`}
                        onClick={() => handlerNav(val?.chatId,userData?.id,val?.sender?.id,val?.user?.id)} key={index}>
                            <div className='flex flex-row'>
                                <img src={val.sender.avatar} alt={`${val?.sender?.name}`} 
                                    className='w-[35px] h-[35px] object-cover rounded-full max-w-[none]' 
                                />
                            </div>
                            <div className='flex flex-col'>
                                <span className={`font-bold text-[16px] ${(param?.id1 == val?.chatId) && (param?.id2 == userData?.id) ? 'text-[#fff]' : ''}`}>{val?.sender?.name}</span>
                                {val?.latestMessage?.content && <span className={`searchTitleOver ${(param?.id1 == val?.chatId) && (param?.id2 == userData?.id) ? "text-[#fff]" : ''}`}>{val?.latestMessage?.content}</span>}
                            </div>
                    </div>
                ))}
            </div>
            <div className='flex flex-col py-1'>
                <Outlet />
            </div>
        </div>
    );
};

export default Message;
