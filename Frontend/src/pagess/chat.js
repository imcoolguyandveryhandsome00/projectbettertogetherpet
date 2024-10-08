import React, { useState, useEffect, useRef } from 'react';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [username, setUsername] = useState('User1');
  const ws = useRef(null); // เก็บ WebSocket ไว้ใน useRef เพื่อให้เชื่อมต่อคงอยู่

  useEffect(() => {
    // เชื่อมต่อกับ WebSocket server
    ws.current = new WebSocket('ws://localhost:5000');

    ws.current.onopen = () => {
      console.log('Connected to WebSocket server');
    };

    ws.current.onmessage = (event) => {
      const receivedMessage = JSON.parse(event.data);
      setMessages((prevMessages) => [...prevMessages, receivedMessage]);
    };

    ws.current.onclose = () => {
      console.log('Disconnected from WebSocket server');
    };

    // Cleanup when component unmounts
    return () => {
      ws.current.close();
    };
  }, []);

  const handleSend = () => {
    if (input.trim()) {
      const message = { user: username, text: input };
      ws.current.send(JSON.stringify(message)); // ส่งข้อความไปยัง WebSocket server
      setInput('');
    }
  };

  return (
    <div>
      <div style={{ border: '1px solid #ccc', padding: '10px', height: '200px', overflowY: 'scroll' }}>
        {messages.map((message, index) => (
          <div key={index} style={{ textAlign: message.user === username ? 'right' : 'left' }}>
            <strong>{message.user}: </strong>{message.text}
          </div>
        ))}
      </div>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="พิมพ์ข้อความ..."
      />
      <button onClick={handleSend}>ส่ง</button>
    </div>
  );
};

export default Chat;
