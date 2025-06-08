import React from 'react';
import { BLOG_POSTS } from '../data/mockData';

const BlogPage = ({ setView, setSelectedPost }) => {
    return (
        <div className="page-container">
            <div className="container">
                 <div className="section-header">
                    <h2>Our Blog</h2>
                    <p>News, tips, and insights from the world of mobility.</p>
                </div>
                <div className="blog-grid">
                    {BLOG_POSTS.map(post => (
                        <div key={post.id} className="blog-post-card">
                            <img src={post.image} alt={post.title} />
                            <div className="blog-post-content">
                                <h3>{post.title}</h3>
                                <p>{post.excerpt}</p>
                                <a href="#" onClick={(e) => {
                                    e.preventDefault();
                                    setSelectedPost(post);
                                    setView('blogPost');
                                }}>Read More</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogPage;