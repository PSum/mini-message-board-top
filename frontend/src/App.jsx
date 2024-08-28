import { useState } from 'react'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'


function App() {

function Chat() {
  const [chat, setChat] = useState([]);
  const getChat = async () => {
    try {
      const response = await axios.get('http://localhost:3000/');  // Add http:// to the URL
      setChat(response.data);  // Set the actual data, not the full response object
      console.log(response.data);  // Log data for debugging
    } catch (error) {
      console.error('Error fetching the chat data:', error);  // Error handling
    }
  };
  useEffect(() => {
    getChat();
  }, []);
  console.log(chat);
  return (
    <div>
      <h1>Chat Messages</h1>
      <ul>
        {chat.map((message, index) => (
          <li key={index}>{message}</li> // Render each chat message
        ))}
      </ul>
    </div>
  );
}

  function Header (){
    return(
      <div>Hello</div>
    )
  }

function Form (){
  return(
    <div>second div</div>
  )
}


  return (
    <>
    <Header></Header>
    <Form></Form>
    <Chat></Chat>
    </>
  )
}

export default App
