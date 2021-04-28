import {ChatEngine} from 'react-chat-engine';
import LoginForm from './components/LoginForm';

import './App.css';
import ChatFeed from './components/ChatFeed';

const App = () => {
  if(!localStorage.getItem('username')) return <LoginForm/>
  return (
      <ChatEngine
        height = "100vh"
        projectID = "ac10fba6-8cd3-48fd-87c0-4bb588844192"
        userName = {localStorage.getItem('username')}
        userSecret = {localStorage.getItem('password')}
        renderChatFeed = {(chatAppProps) => <ChatFeed {... chatAppProps}/>}
      />
  )
}


export default App;