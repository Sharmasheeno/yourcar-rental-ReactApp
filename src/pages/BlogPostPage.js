import React from 'react';

const BlogPostPage = ({ post, setView }) => {
     if (!post) {
        return (
             <div className="page-container">
                <div className="section-header">
                    <h2>Post Not Found</h2>
                    <button className="btn btn-primary" onClick={() => setView('blog')}>Back to Blog</button>
                </div>
            </div>
        );
    }
    return (
         <div className="page-container">
            <div className="container" style={{maxWidth: '800px'}}>
                <div className="section-header">
                    <h2>{post.title}</h2>
                </div>
                <img src={post.image} alt={post.title} style={{width: '100%', borderRadius: '10px', marginBottom: '30px'}} />
                
                {/* This section now dynamically renders the full content */}
                <div className="blog-post-full-content">
                    {post.fullContent.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>

                 <button className="btn btn-secondary" style={{marginTop: '30px'}} onClick={() => setView('blog')}>Back to Blog</button>
            </div>
        </div>
    );
};

export default BlogPostPage;