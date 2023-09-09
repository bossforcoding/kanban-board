import { useState } from 'react'
import '../styles/AddIssue.css'

const AddIssue = (props) => {
    const [issueTitle, setIssueTitle] = useState('');

    function handleTitleChange(event) {
        setIssueTitle(event.target.value);
    }

    function handleCancel() {
        setIssueTitle('');
    };

    function handleCreate() {
        props.onAddIssue(issueTitle);
        handleCancel();
    }

    return (
        <div className="add-section">
            <input
                id="title"
                type="text"
                value={issueTitle}
                onChange={handleTitleChange}
                placeholder="Issue title"
            />
            <button onClick={() => handleCreate()}>Create</button>
            <button onClick={handleCancel}>Cancel</button>
        </div>
    )
}

export default AddIssue;