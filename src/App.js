import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route}  from 'react-router-dom';
import Chat from './Chat/chat';
import Main from './Main/main';
import Login from './Login/login';
import SignUp from './SignUp/signup';
import ChatList from './Main/mainChatList';
import UserListModal from './Modal/userListModal';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/chat" element={<Chat />}/>
        <Route path="/main" element={<Main />}/>
        <Route path='/signupPage' element={<SignUp />} />
        <Route path='/chatlist' element={<ChatList />} />
        <Route path='/test' element={<UserListModal />} />
      </Routes>
    </Router>
  )
}

export default App;
