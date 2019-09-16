import React from 'react';
import Task from "./Task";
import './TaskBoard.css'

export default class TaskBoard extends React.Component
{
    state = {
        cantTask: 0,
        Tasks : [],
        Title: this.props.value.TaskBoard,
        Descriptions: [{Description: "Prepare the test"}, {Description: "Create the presentation"}, {Description: "Update the database"}]
    }

    addTask = () => {
        let cantTask = this.state.cantTask + 1;
        this.setState({cantTask: cantTask});

        let random = Math.floor(Math.random()*3);
        let descript = this.state.Descriptions.find((value, index) => {
            if(index == random) {
                return value
            }
        }).Description;
        this.state.Tasks.push({Id: cantTask, Task:  "Task No. " + cantTask, Description: descript});
    }

    deleteTask = () =>{
        let cantTask = this.state.cantTask - 1;
        this.setState({cantTask: cantTask});
        this.state.Tasks.forEach(elem => {
           if(elem.Id==0){
               let i = this.state.Tasks.indexOf(elem);
               if ( i !== -1 ) {
                   this.state.Tasks.splice( i, 1 );
                   this.setState({Tasks: this.state.Tasks});
               }
           }
        });
    }

    render() {
        return (
            <div className="card">
                <div className="card-header">
                    {this.state.Title}
                </div>

                <div>
                    {this.state.Tasks.map(e => <Task value={e} deleteTask={this.deleteTask}/>)}
                </div>

                <div className="card-body text-center">
                    <a href="#" className="btn btn-primary" onClick={this.addTask}>Add Task</a>
                </div>
            </div>
        )
    }
}
