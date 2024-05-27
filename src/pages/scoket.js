// client/src/socket.js

import { io } from 'socket.io-client';

const endpoint = 'http://localhost:8001';
const socket = io(endpoint);

socket.on('connect', () => {
  console.log('connected', socket.id);
});

socket.on('disconnect', () => {
  console.log('disconnected');
});

export default socket;
