import { useEffect } from 'react';

import { ChatListSection, ChatMemberSection, ChatSection } from 'components';
import { useSectionStore } from 'stores';
import { getCookie } from 'utils';

import './App.css';

function App() {
  const { openMemberSection } = useSectionStore();

  useEffect(() => {
    getCookie('user');
  }, []);

  return (
    <div className="app">
      <ChatListSection />
      <ChatSection />
      {/* TODO: 눌렀는지 안 눌렀는지 여부에 따라 열리게 하기 */}
      {openMemberSection && <ChatMemberSection />}
    </div>
  );
}

export default App;
