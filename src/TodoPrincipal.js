import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from "moment";
import {Login} from "./Login";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import MiniDrawer from './Drawer'

export class TodoPrincipal extends Component {

    constructor(props) {
        super(props);
        this.state = {items: [], description: '',responsible: {name:localStorage.getItem('nombre'), email:localStorage.getItem('user')}, status: '', dueDate: moment()};
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleStatusChange = this.handleStatusChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    render() {

        return (
            <div className="TodoApp">
                <header>
                </header>
                <br/>
                <br/>
                <form onSubmit={this.handleSubmit} className="todo-form">
                    <h3>New Task</h3>
                    <TextField
                        required
                        id="description"
                        label="description"
                        color="primary"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        margin="dense"
                        variant="outlined"
                        onChange={this.handleDescriptionChange}
                        value={this.state.description}
                    />

                    <br/>
                    <br/>
                    <TextField
                    required
                    id="status"
                    label="status"
                    color="primary"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    margin="dense"
                    variant="outlined"
                    onChange={this.handleStatusChange}
                    value={this.state.status}
                    />

                    <br/>
                    <br/>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            helperText={''}
                            variant="inline"
                            format="dd/MM/yyyy"
                            margin="dense"
                            id="due-date"
                            label="Due Date"
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                            value={this.state.dueDate}
                            onChange={this.handleDateChange}
                        />
                    </MuiPickersUtilsProvider>

                    <br/>
                    <br/>
                     <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className="submit"
                        >
                        Add #{this.state.items.length + 1}
                    </Button>
                </form>
                <MiniDrawer todoList={this.state.items}/>
            </div>
        );
    }

    handleDescriptionChange(e) {
        this.setState({
            description: e.target.value
        });
    }

    handleStatusChange(e) {
        this.setState({
            status: e.target.value
        });
    }

    handleDateChange(date) {
        this.setState({
            dueDate: date
        });
    }

    
    handleSubmit(e) {

        e.preventDefault();

        if (!this.state.description.length || !this.state.status.length || !this.state.dueDate)

            return;

        const newItem = {
            name: this.state.responsible.name,
            email: this.state.responsible.email,
            description: this.state.description,
            status: this.state.status,
            dueDate:moment(this.state.dueDate.toDateString())

        };
        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            description: '',
            status: '',
            dueDate: moment()
        }));
    }

}

export default TodoPrincipal;