import {ChatEngine} from 'react-chat-engine';

import './App.css';
import ChatFeed from './components/ChatFeed';

const App = () => {
  return (
      <ChatEngine
        height = "100vh"
        projectID = "ac10fba6-8cd3-48fd-87c0-4bb588844192"
        userName = "dhruti_mistry"
        userSecret = "cekbm29it" 
        renderChatFeed = {(chatAppProps) => <ChatFeed {... chatAppProps}/>}
      />
  )
}


export default App;