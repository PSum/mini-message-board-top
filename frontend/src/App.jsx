import { useState } from 'react'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'


function App() {

function Chat() {
  // TASK: Understand this code
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(true);  // Track loading state

  const getChat = async () => {
    try {
      const response = await axios.get('http://localhost:3000/');
      setChats(response.data);
      setLoading(false);  // Stop loading when data is fetched
    } catch (error) {
      console.error('Error fetching the chat data:', error);
      setLoading(false);  // Stop loading even in case of error
    }
  };

  useEffect(() => {
    getChat();
  }, []);

    const chatEntries = chats.map(chat => {
      return (
      <div key={chat.id}>
        <div>{chat.username}</div>
        <div>{ chat.text }</div>
      </div>
      )
    })
    console.log(chatEntries);

  return (
    <div>
      {/* Show loading state while waiting for data */}
      {loading ? ( // while loading is true, show "Loading chat..."
        <p>Loading chat...</p>
      ) : ( // If loading is false:
        chats.length > 0 ? ( // if chat array has an entry:
          <div>
            {chatEntries}
          </div>
        ) : ( // If chat array is still empty after loading:
          <p>No chat messages available.</p>
        )
      )}
    </div>
  );
}


  function Header (){
    return(
      <h1>Mini-Message-Board</h1>
    )
  }

  return (
    <>
    <Header></Header>
    <Chat></Chat>
    </>
  )
}

export default App
