import React from 'react';
import './blog.css';


import blog1 from '../../assets/images/blog_1.jpg';
import blog2 from '../../assets/images/blog_2.jpg';

interface BlogCardProps {
    title: string;
    excerpt: string;
    category: string;
    readTime: string;
    imageUrl: string;
    altText: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
    title,
    excerpt,
    category,
    readTime,
    imageUrl,
    altText,
}) => {
    return (
        <div className="blog-card">
            <div className="blog-image-container">
                <img src={imageUrl} alt={altText} className="blog-image" />
            </div>
            <div className="blog-content">
                <div className="blog-meta">
                    <span className="blog-category">{category}</span>
                    <span className="blog-read-time">{readTime}</span>
                </div>
                <h3 className="blog-title">{title}</h3>
                <p className="blog-excerpt">{excerpt}</p>
                <a href="#" className="read-more-link">
                    Read More →
                </a>
            </div>
        </div>
    );
};

const BlogsAndInsights: React.FC = () => {
    const blogData = [
        {
            title: 'Building For The Real World',
            excerpt:
                'How Friends From College Went On To Build One Powerful Platform (Hint: It Was Ours).',
            category: 'Blog',
            readTime: '10Min',
            // Image assigned from import
            imageUrl: blog1,
            altText: 'People reviewing charts on a document with a laptop.',
        },
        {
            title: 'Building For The Real World',
            excerpt:
                'How Friends From College Went On To Build One Powerful Platform (Hint: It Was Ours).',
            category: 'Blog',
            readTime: '10Min',
            // Image assigned from import
            imageUrl: blog2,
            altText: 'An open notebook and a laptop on a wooden desk with a coffee mug.',
        },
    ];

    return (
        <div className="blogs-insights-section">
            {/* The header-bar (RECENT BLOGS tag) is commented out, matching the provided image's structure */}
            {/* <div className="header-bar">
                <span className="recent-blogs-tag">RECENT BLOGS</span>
            </div> */}

            <div className="header-main">
                <h2 className="section-title">Blogs & Insights</h2>
                <button className="view-more-button">View More</button>
            </div>

            <div className="blog-cards-container">
                {blogData.map((blog, index) => (
                    <BlogCard key={index} {...blog} />
                ))}
            </div>
        </div>
    );
};

export default BlogsAndInsights;