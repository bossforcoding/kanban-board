import React from 'react';
import ReactDOM from 'react-dom/client';
import MyBoard from './components/MyBoard'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyBoard id='73e2ceb0-ce5d-11ed-afa1-0242ac120007' boards={[{ id: 1, name: 'board 1' }, { id: 2, name: 'board 2' }]} issues={[{ id: 1, title: 'titolo 1', type: 'TASK', status: 'TODO', boards: [1] },
    { id: 2, title: 'titolo 2', type: 'BUG', status: 'DONE', boards: [1, 2] }, { id: 3, title: 'titolo 3', type: 'USER_STORY', status: 'DONE', boards: [1, 2] },
    { id: 4, title: 'titolo 4', type: 'TASK', status: 'IN_PROGRESS', boards: [2] }]} search='true' boardsEnabled='true' onIssueClick={(issue) => alert(issue.title)} />
  </React.StrictMode>
);
