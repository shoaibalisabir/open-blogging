import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';


function EditPost() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get(`http://${process.env.IP_ADDRESS}:5000/api/posts/${id}`);
                setTitle(response.data.title);
                setContent(response.data.content);
            } catch (error) {
                console.error('Error fetching post:', error);
            }
        };
        fetchPost();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://${process.env.IP_ADDRESS}:5000/api/posts/${id}`, { title, content });
            navigate(`/post/${id}`);
        } catch (error) {
            console.error('Error updating post:', error);
        }
    };

    return (
        <div className="container">
            <h2>Edit Post</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                />
                <button type="submit">Update</button>
            </form>
        </div>
    );
}

export default EditPost;
