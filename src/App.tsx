import { ChatListSection, ChatMemberSection, ChatSection } from 'components';

import './App.css';
import { useEffect } from 'react';
import { getCookie, setCookie } from 'utils';

function App() {
  useEffect(() => {
    if (!getCookie('user')) {
      const user = {
        user_id: 'user_1',
        user_name: '민지',
      };

      setCookie('user', JSON.stringify(user), 7);
    }
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
