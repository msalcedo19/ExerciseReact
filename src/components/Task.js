import React, { Component } from 'react';

class task extends Component {
    state = {
        Title: this.props.value.Task,
        Description: this.props.value.Description,
        id: this.props.value.Id
    }

    delete = () => {
        this.props.value.Id = 0;
        this.props.deleteTask();
    }

    render() {
        return (
            <div className="card task">
                <div className="card-header">
                    {this.state.Title}
                </div>
                <div className="card-body text-center">
                    <p className="card-text">{this.state.Description}</p>
                </div>
                <div className="card-body text-right">
                    <a href="#" className="btn btn-primary" onClick={this.delete}>-</a>
                </div>
            </div>
        );
    }
}

export default task;
