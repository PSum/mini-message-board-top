import { useState } from 'react'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'


function App() {

function Chat() {
  // TASK: Understand this code
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(true);  // Track loading state

  const getChat = async () => {
    try {
      const response = await axios.get('http://localhost:3000/');
      setChat(response.data);
      setLoading(false);  // Stop loading when data is fetched
    } catch (error) {
      console.error('Error fetching the chat data:', error);
      setLoading(false);  // Stop loading even in case of error
    }
  };

  useEffect(() => {
    getChat();
  }, []);

  return (
    <div>
      {/* Show loading state while waiting for data */}
      {loading ? (
        <p>Loading chat...</p>
      ) : (
        // If chat array is not empty, display the first message, else show a no data message
        chat.length > 0 ? (
          <p>First chat message: {chat[1].text}</p>
        ) : (
          <p>No chat messages available.</p>
        )
      )}
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
