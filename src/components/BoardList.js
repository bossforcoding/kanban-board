import { React } from 'react';
import BoardCard from './BoardCard';
import '../styles/BoardList.css'

const BoardList = (props) => {
    const { boards, selectedBoard, setSelectedBoard } = props;

    return (
        <div className="board-section">
            <h3 className="panel-title">BOARDS</h3>
            <ul>
                {boards.map(board => (
                    <BoardCard
                        key={board.id}
                        id={board.id}
                        selectedBoard={selectedBoard}
                        setSelectedBoard={setSelectedBoard}
                    />
                ))}
            </ul>
        </div>
    )
}

export default BoardList; 