import React, { Component } from 'react';

import Post from './Post';

import profile from '../assets/49795497_1417679775035754_3093404191549292544_n.jpg';

export class PostList extends Component {

    state = {
        posts: [
            {
                id: 1,
                author: {
                    name: "Julio Alcantra",
                    avatar: profile
                },
                date: "04 Jun 2019",
                content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
                comments: [
                    {
                        id: 1,
                        author: {
                            name: "Diego Fernandes",
                            avatar: profile,
                        },
                        content: "O layout não precisa ficar exatamente igual, você pode utilizar sua criatividade para modificar da maneira que preferir. O mais importante é que todos elementos apareçam em tela."
                    }
                ]
            },
            {
                id: 1,
                author: {
                    name: "Julio Alcantra",
                    avatar: profile
                },
                date: "04 Jun 2019",
                content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
                comments: [
                    {
                        id: 1,
                        author: {
                            name: "Diego Fernandes",
                            avatar: profile,
                        },
                        content: "O layout não precisa ficar exatamente igual, você pode utilizar sua criatividade para modificar da maneira que preferir. O mais importante é que todos elementos apareçam em tela."
                    }
                ]
            },
            {
                id: 1,
                author: {
                    name: "Julio Alcantra",
                    avatar: profile
                },
                date: "04 Jun 2019",
                content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
                comments: [
                    {
                        id: 1,
                        author: {
                            name: "Diego Fernandes",
                            avatar: profile,
                        },
                        content: "O layout não precisa ficar exatamente igual, você pode utilizar sua criatividade para modificar da maneira que preferir. O mais importante é que todos elementos apareçam em tela."
                    },
                    {
                        id: 1,
                        author: {
                            name: "Diego Fernandes",
                            avatar: profile,
                        },
                        content: "O layout não precisa ficar exatamente igual, você pode utilizar sua criatividade para modificar da maneira que preferir. O mais importante é que todos elementos apareçam em tela."
                    }
                ]
            }
        ]
    }

    render() {
        return (
            <div className="postList">
               { this.state.posts.map(post => <Post key={post.id} post={post} />) }
            </div>
        );
    }
}

export default PostList;
