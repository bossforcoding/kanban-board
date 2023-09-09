import { React, useState, useEffect } from 'react';
import Section from './Section'
import BoardList from './BoardList';
import SearchBar from './SearchBar';
import { fetchBoards, filterIssues } from '../api'
import { saveData } from '../storage'
import '../styles/MyBoard.css';

function MyBoard(props) {
    const { id, url, boards, issues, search, boardsEnabled, onIssueClick } = props;
    const [issueList, setIssueList] = useState([]);
    const [startingIssueList, setStartingIssueList] = useState([]);
    const [boardList, setBoardList] = useState([]);
    const [selectedBoard, setSelectedBoard] = useState(1);
    const [filteredType, setFilteredType] = useState('all');
    const [filteredText, setFilteredText] = useState('');

    // eseguito in avvio dell'app
    useEffect(() => {
        if (url) {
            fetchBoards(url).then(data => setBoardList(data));
        } else {
            // set array di boards passato come props
            setBoardList(boards);

            const storedIssues = [];
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                if (key.includes(id)) {
                    const issue = JSON.parse(localStorage.getItem(key));
                    storedIssues.push(issue);
                }
            }

            if (storedIssues.length === 0) {
                // set array di issues passato come props 
                // se localStorage è vuoto
                setIssueList(issues);
                setStartingIssueList(issues);
            } else {
                // set array di issues con le issues in localStorage
                setIssueList(storedIssues);
                setStartingIssueList(storedIssues);
            }
        }
    }, [url, id, issues, boards]);

    // eseguito ogni volta che cambia la lista delle issues
    useEffect(() => {
        setIssueList(startingIssueList)
        // issues sono salvate in localStorage
        if (!url) {
            saveData(id, startingIssueList);
        }
    }, [url, id, startingIssueList]);

    // eseguito quando viene cambiata la board selezionata oppure
    // viene eseguito un filtro sulle issues remote
    useEffect(() => {
        if (url) {
            let filterTermParams = (filteredText !== '') ? `&search=${encodeURIComponent(filteredText)}` : '';
            let filterTypeParams = (filteredType !== 'all') ? `&issueType=${encodeURIComponent(filteredType)}` : '';
            filterIssues(url, selectedBoard, filterTermParams, filterTypeParams)
                .then(data => setStartingIssueList(data));
        } else {
            setIssueList(
                startingIssueList
                    // filtro per type
                    .filter((issue) => issue.type === filteredType || filteredType === 'all')
                    // filtro per titolo nella barra di ricerca
                    .filter((issue) => issue.title.toLowerCase().includes(filteredText.toLowerCase()) | filteredText === '')
            );
        }
    }, [url, selectedBoard, filteredType, filteredText]);

    return (
        <div>
            {search === 'true' && (
                <SearchBar
                    filteredType={filteredType}
                    setFilteredType={setFilteredType}
                    filteredText={filteredText}
                    setFilteredText={setFilteredText}
                />
            )}
            <div className="board-container">
                {boardsEnabled === 'true' && (
                    <BoardList
                        boards={boardList}
                        selectedBoard={selectedBoard}
                        setSelectedBoard={setSelectedBoard}
                    />
                )}
                {[
                    { title: "TODO" },
                    { title: "IN_PROGRESS" },
                    { title: "DONE" }
                ].map((sectionData, index) => (
                    <Section
                        key={index}
                        title={sectionData.title}
                        url={url}
                        issues={issueList}
                        onIssueClick={onIssueClick}
                        selectedBoard={selectedBoard}
                        onIssuesUpdate={setStartingIssueList}
                    />
                ))}
            </div>
        </div>
    );
}

export default MyBoard;