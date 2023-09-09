import { React } from 'react';
import '../styles/IssueCard.css'

function handleDragStart(event, id) {
    event.dataTransfer.setData('id', id);
}

function handleDragOver(event) {
    event.preventDefault();
}

function IssueCard(props) {
    const { issue, onIssueClick } = props

    return (
        <li
            // replace space to concat strings
            className={`issue ${issue.type.toLowerCase().replace(/[\s_]+/g, '')}`}
            key={issue.id}
            draggable
            onDragStart={event => handleDragStart(event, issue.id)}
            onDragOver={handleDragOver}
            onClick={() => onIssueClick(issue)}
        >
            {issue.title}
        </li>
    );
}

export default IssueCard;