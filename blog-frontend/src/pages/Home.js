import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Home.css'; // Import the CSS file

function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/posts');
                setPosts(response.data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };
        fetchPosts();
    }, []);

    return (
        <div className="container">
            <h2>All Blog Posts</h2>
            <Link to="/create" className="btn create-post">Create New Post</Link>

            <ul className="post-list">
                {posts.map(post => (
                    <li key={post._id} className="post-item">
                        <Link to={`/post/${post._id}`} className="post-title">
                            <h3>{post.title}</h3>
                        </Link>
                        <p className="post-content">{post.content.substring(0, 150)}...</p>
                        <Link to={`/post/${post._id}`} className="btn read-more">Read More</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;
