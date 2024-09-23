import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function Post() {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/posts/${id}`);
                setPost(response.data);
            } catch (error) {
                console.error('Error fetching post:', error);
            }
        };
        fetchPost();
    }, [id]);

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:5000/api/posts/${id}`);
            alert('Post deleted!');
            window.location.href = '/'; // Redirect to home
        } catch (error) {
            console.error('Error deleting post:', error);
        }
    };

    if (!post) return <div>Loading...</div>;

    return (
        <div className="container">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <div className="button-group">
                <Link to={`/edit/${post._id}`} className="btn">Edit Post</Link>
                <button onClick={handleDelete} className="btn delete">Delete Post</button>
                <Link to="/" className="btn">Back to Home</Link>
            </div>
        </div>
    );
}

export default Post;
