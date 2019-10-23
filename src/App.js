import React from 'react';

import './App.css'

import PostList from './components/PostList';
import Header from './components/Header';

export default function App(){

    return (
        <>
            <Header />
            <PostList />
        </>
    )
}