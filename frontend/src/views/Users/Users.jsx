import "./Card.css";
import "./Users.css";
import React, { Component } from "react";

import Card from "../../components/layout/Card";
// import RouterButtons from "../../components/buttons/RouterButtons"
import axios from "axios";

const routes = require('../../configs/routes');

class Users extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [{
                id: '',
                name: '',
                company: [{
                    name: '',
                }]
            }]
        };

        this.getConfigs();
    }

    getConfigs() {
        axios.get(routes.links.backend + 'users')
            .then(res => {
                if (res.data) {
                    // console.log(res.data);
                    this.setState({ users: res.data })
                    // this.state.users.map(user => console.log(user))
                }
            })
    }

    getLinhas() {
        return this.state.users.map((user, i) => {
            return (
                <tr key={user.id}
                    className={i % 2 === 0 ? 'Par' : 'Impar'}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.company.name}</td>
                </tr>
            )
        })
    }

    setBg() {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        return "#" + randomColor;

    }


    render() {
        return (
            <div className="App">
                {/* <RouterButtons/> */}

                <div className="Cards">
                    <Card titulo="Users" color={this.setBg()}>
                        <div className="Usuarios">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Nome</th>
                                        <th>Empresa</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.getLinhas()}
                                </tbody>
                            </table>
                        </div>
                    </Card>
                </div>
            </div>
        );
    }
}

export default Users;