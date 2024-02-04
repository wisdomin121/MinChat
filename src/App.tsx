import { useEffect } from 'react';

import { ChatListSection, ChatMemberSection, ChatSection } from 'components';
import { getCookie } from 'utils';

import './App.css';

function App() {
  useEffect(() => {
    getCookie('user');
  }, []);

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
