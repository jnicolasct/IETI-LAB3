import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Task} from './Task';

export class View extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const todoList = this.props.todoList.map((todo, i) => {
            return (
                <Task key={i} description={todo.description} RName={todo.name} REmail={todo.email} status={todo.status} dueDate={todo.dueDate}/>
            );
        });

        return (
            <div>
                {todoList}
            </div>
        );


    }

}