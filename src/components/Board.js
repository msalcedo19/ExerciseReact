import React from 'react';
import TaskBoard from "./TaskBoard";
import './Board.css';

export default class Board extends React.Component
{
    state = {
        TaskBoards : [{TaskBoard: "To Do"}, {TaskBoard: "Doing"}, {TaskBoard: "Done"}]
    }
    render()
    {
        return (
            <div className="container-fluid board">
                <div className="row">
                    <div className="col-md-4 offset-md-4 title-board">
                        <h2>My Kanban App</h2>
                    </div>
                </div>
                <hr></hr>
                <br></br>
                <div className="row">
                    {this.state.TaskBoards.map( taskBoard =>
                        <div className="col-4">
                            <TaskBoard value = {taskBoard}/>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}
