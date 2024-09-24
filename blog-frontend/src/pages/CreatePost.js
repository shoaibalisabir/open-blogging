import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
require('dotenv').config();

function CreatePost() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [titleCount, setTitleCount] = useState(0);
    const [wordCount, setWordCount] = useState(0);
    const textareaRef = useRef(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate title length
        if (title.length > 100) {
            alert('Title cannot exceed 100 characters.');
            return;
        }

        // Validate content word count
        if (wordCount > 500) {
            alert('Content cannot exceed 500 words.');
            return;
        }

        try {
            await axios.post('http://${process.env.IP_ADDRESS}:5000/api/posts', { title, content });
            navigate('/'); // Redirect to home after creating the post
        } catch (error) {
            console.error('Error creating post:', error);
        }
    };

    const handleTitleChange = (e) => {
        const newTitle = e.target.value;
        if (newTitle.length <= 100) { // Limit title input
            setTitle(newTitle);
            setTitleCount(newTitle.length); // Update title count
        }
    };

    const handleContentChange = (e) => {
        const newContent = e.target.value;
        const newWordCount = newContent.trim().split(/\s+/).filter(Boolean).length; // Count words
        if (newWordCount <= 500) { // Limit content input
            setContent(newContent);
            setWordCount(newWordCount); // Update word count
        }
    };

    // Expand textarea height based on content
    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto'; // Reset height
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Set height based on content
        }
    }, [content]); // Run when content changes

    return (
        <div className="container">
            <h2>Create New Post</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={handleTitleChange}
                    maxLength={100} // Limit title length
                    required
                />
                <div className="count">Characters: {titleCount}/100</div>
                
                <textarea
                    ref={textareaRef} // Reference for textarea
                    placeholder="Content"
                    value={content}
                    onChange={handleContentChange}
                    required
                    style={{ overflow: 'hidden' }} // Hide overflow
                />
                <div className="count">Words: {wordCount}/500</div>
                
                <div className="button-group">
                    <button type="submit" className="btn submit">Submit</button>
                    <button onClick={() => navigate('/')} className="btn back">Go Back to Home</button>
                </div>
            </form>
        </div>
    );
}

export default CreatePost;
