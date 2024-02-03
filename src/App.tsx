import React from 'react';
import { ChatListSection, ChatMemberSection, ChatSection } from 'components';

import './App.css';

function App() {
  return (
    <div className="app">
      <ChatListSection />
      <ChatSection />
      <ChatMemberSection />
    </div>
  );
}

export default App;
