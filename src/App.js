import React, {Component} from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import {Login} from "./Login";
import {TodoPrincipal} from './TodoPrincipal'


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {isLoggedIn: false, ruta:''};
        this.clickHandler = this.clickHandler.bind(this);
        localStorage.setItem('user', "nicolas.ct@mail.com");
        localStorage.setItem('nombre', "Nicolas Cortes")
        localStorage.setItem('password', "contrasena");
    }



    render() {
            const LoginView = () => (
                <Login clickHandler={this.clickHandler}/>
            );
            const TodoAppView = () => (
                <TodoPrincipal/>
            );
            if (this.state.isLoggedIn){
                this.state.ruta = TodoAppView;
            }
            else{
                this.state.ruta = LoginView;
            }




            return (
                <Router>
                    <div className="App">
                        <div>
                            <Route exact path="/" component={this.state.ruta}/>
                            <Route exact path="/Login" component={LoginView}/>
                            <Route exact path="/Todo" component={TodoAppView}/>
                        </div>
                    </div>
                </Router>
            );
        }

        clickHandler (e) {
        this.setState({isLoggedIn:true}) ;
        }
    }

export default App;
