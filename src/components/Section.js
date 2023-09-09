import { React, useState } from 'react';
import '../styles/Section.css'
import IssueCard from './IssueCard';
import AddIssue from './AddIssue';
import IssueDetailsModal from './IssueDetailsModal';
import { postNewIssue, changeStatus } from '../api'

const Section = (props) => {
    const { url, title, issues, onIssueClick, selectedBoard, onIssuesUpdate } = props;
    const [selectedIssue, setSelectedIssue] = useState(null);

    const filteredIssues = (
        issues
            // filtro per stato (todo, in_progress, done)
            .filter((issue) => issue.status === title)
            // filtro per la board selezionata
            .filter((issue) => issue.boards.includes(selectedBoard))
    );

    function handleAddIssue(issueTitle) {
        // se il titolo è vuoto esco dalla funzione
        if (issueTitle === "") { return; }
        // nuova issue
        const newIssue = { id: issues.length + 1, title: issueTitle, type: 'TASK', status: 'TODO', boards: [selectedBoard] };

        if (url) {
            postNewIssue(url, selectedBoard, newIssue).then((data) => { onIssuesUpdate([...issues, data]); });
        }
        else {
            onIssuesUpdate([...issues, newIssue]);
        }
    }

    function handleCardDrop(event, newStatus) {
        let id = event.dataTransfer.getData('id');
        if (!url) {
            id = parseInt(id)
        }

        const movedIssue = issues.find(issue => issue.id === id);
        const newIssueList = issues.filter(issue => issue.id !== id);
        if (movedIssue.status !== newStatus) {
            if (url) {
                changeStatus(url, movedIssue, newStatus);
            }
            // setto nuovo status alla issue spostata
            movedIssue.status = newStatus;
            // setto la lista delle issue aggiungendo quella con il cambiamento di status
            onIssuesUpdate(newIssueList.concat(movedIssue));
        }
    }

    function handleCardDragOver(event) {
        event.preventDefault();
    }

    return (
        <div className="section" onDrop={event => handleCardDrop(event, title)}
            onDragOver={handleCardDragOver}>
            <h3 className="panel-title">{title}</h3>
            {title === 'TODO' && <AddIssue onAddIssue={handleAddIssue} />}
            <ul>
                {filteredIssues.map((issue) => (
                    <IssueCard
                        key={issue.id}
                        issue={issue}
                        onIssueClick={onIssueClick || setSelectedIssue}
                    />
                ))}

            </ul >
            <div>
                {selectedIssue && (
                    <IssueDetailsModal
                        issue={selectedIssue}
                        onClose={() => setSelectedIssue(null)}
                    />
                )}
            </div>
        </div>
    );
}

export default Section;