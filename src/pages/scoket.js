// client/src/socket.js

import { io } from 'socket.io-client';

const endpoint = `${process.env.REACT_APP_LOCAL_URL}`;
const socket = io(endpoint);

socket.on('connect', () => {
  console.log('connected', socket.id);
});

socket.on('disconnect', () => {
  console.log('disconnected');
});

export default socket;
