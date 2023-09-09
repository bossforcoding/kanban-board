import { React } from 'react';
import '../styles/BoardCard.css'

const BoardCard = (props) => {
    const { id, selectedBoard, setSelectedBoard } = props;
    
    function handleBoardSelection(event) {
        setSelectedBoard(event);
    };

    const activeBoard = (index) => {
        return index === selectedBoard ? "board-element active" : "board-element";
    };

    return (
        <li
            key={id}>
            <button className={activeBoard(id)} onClick={() => handleBoardSelection(id)}>Board {id}</button>
        </li>
    )
}

export default BoardCard; 