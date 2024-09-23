import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import Post from './pages/Post';
import EditPost from './pages/EditPost';
import './styles.css';

function App() {
    return (
        <Router>
            <div>
                <h1>Open Blogging</h1>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/create" element={<CreatePost />} />
                    <Route path="/post/:id" element={<Post />} />
                    <Route path="/edit/:id" element={<EditPost />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
