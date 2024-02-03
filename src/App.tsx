import React from 'react';
import { ChatListSection, ChatMemberSection, ChatSection } from 'components';

import './App.css';

function App() {
  return (
    <div className="app">
      <ChatListSection />
      <ChatSection />
      {/* TODO: 눌렀는지 안 눌렀는지 여부에 따라 열리게 하기 */}
      {false && <ChatMemberSection />}{' '}
    </div>
  );
}

export default App;
