import "./Card.css";
import React, { Component } from "react";

import Card from "../../components/layout/Card";

import axios from "axios";

const routes = require('../../configs/routes');

class Users extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [{
                id: '',
                name: '',
            }],
            posts: [{
                userId: '',
                id: '',
                title: '',
                body: '',
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

        axios.get(routes.links.backend + 'posts')
            .then(res => {
                if (res.data) {
                    // console.log(res.data);
                    this.setState({ posts: res.data })
                    // this.state.users.map(user => console.log(user))
                }
            })
    }

    setBg() {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        return "#" + randomColor;

    }

    getUser(post) {
        var result = this.state.users.find(user => {
            return user.id === post.userId
        })
        if (result) {
            return result.name
        } else {
            return 'Nenhum autor encontrado';
        }
    }


    render() {
        return (
            <div className="App">
                <h1>Posts</h1>

                {this.state.posts.map((post, index) => (
                    <div id={index} className="Cards">
                        <Card id={index} titulo={post.title + ". Escrito por " + this.getUser(post)} color={this.setBg()}>
                            {post.body}
                        </Card>
                    </div>
                ))}
            </div>
        );
    }
}

export default Users;