import { useState } from 'react'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
const address = 'https://melted-robena-psum-48c79943.koyeb.app'

function App() {

function Chat() {
  // TASK: Understand this code
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(true);  // Track loading state

  const getChat = async () => {
    try {
      const response = await axios.get(`${address}`);
      setChats(response.data);
      console.log(response.data);
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
      <div key={chat.id} className='entry'>
        <div className='box'>{chat.username}:</div>
        <div className='box'>{ chat.text }</div>
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
          <div className='chatbox'>
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
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    )
  }


function Form() {

  const sendData =async(username, text) => {
  axios.post(`${address}/new`, {
      username: username,
      text: text,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  function addEntry(event) {
    // Prevents the form from submitting the traditional way (reloading the page)
    event.preventDefault();

    // Extract form data
    const formData = new FormData(event.target);
    const username = formData.get('username'); // matches the name attribute
    const text = formData.get('text');
    sendData(username, text);
  }

  return (
    <form onSubmit={addEntry}>
      <input type="text" name="username" placeholder="Username" />
      <input type="text" name="text" placeholder="Text" />
      <button type="submit">Submit</button>
    </form>
  );
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
