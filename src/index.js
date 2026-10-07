import React from 'react';
import ReactDOM from 'react-dom/client';
import MyBoard from './components/MyBoard'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyBoard id='73e2ceb0-ce5d-11ed-afa1-0242ac120007' boards={[{ id: 1, name: 'Website' }, { id: 2, name: 'Mobile app' }]} issues={[{ id: 1, title: 'Set up CI pipeline', type: 'TASK', status: 'TODO', boards: [1] },
    { id: 2, title: 'Fix login redirect', type: 'BUG', status: 'DONE', boards: [1, 2] }, { id: 3, title: 'As a user I can reset my password', type: 'USER_STORY', status: 'DONE', boards: [1, 2] },
    { id: 4, title: 'Write API docs', type: 'TASK', status: 'IN_PROGRESS', boards: [2] }]} search='true' boardsEnabled='true' onIssueClick={(issue) => alert(issue.title)} />
  </React.StrictMode>
);
