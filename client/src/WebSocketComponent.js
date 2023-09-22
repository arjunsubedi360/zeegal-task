import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

function formatTimestamp(timestampString) {
  const timestamp = new Date(timestampString);
  return timestamp.toLocaleString(); // This will use the default date and time formatting.
}

const SocketComponent = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const socket = io.connect('http://localhost:8081'); // Replace with the actual backend URL and port

    // Listen to the 'send_message' event
    socket.on('send_message', (data) => {
      console.log("data", JSON.parse(data))
      setData(JSON.parse(data));
    });

    // If you want to handle disconnection or errors:
    socket.on('disconnect', () => {
      console.log('Disconnected from the server.');
    });

    socket.on('connect_error', (error) => {
      console.error('Connection error:', error);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      <h1>Received Message:</h1>
      <p>{data?.message}</p>
      <h1>Received time:</h1>
      <p>{formatTimestamp(data?.timestamp)}</p>
      <h1>Received Priority:</h1>
      <p>{data?.priority}</p>
    </div>
  );
};

export default SocketComponent;
