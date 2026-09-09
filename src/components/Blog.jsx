import React from 'react';
import { FaClock, FaNewspaper, FaArrowRight } from 'react-icons/fa';
import './Blog.css';

const blogsData = [
  {
    id: 1,
    tag: "ETABS & HIGH-RISE",
    readTime: "5 min read",
    date: "12 Feb 2026",
    title: "Transitioning from Academic Mechanics to Commercial High-Rise Design",
    desc: "How structural engineers bridge textbook beam formulas with live 3D ETABS modeling, P-Delta effects, and dynamic modal mass ratios.",
    author: "Er. Saurabh Mishra",
    role: "Lead Structural Mentor",
    initials: "SM"
  },
  {
    id: 2,
    tag: "FOUNDATION DESIGN",
    readTime: "6 min read",
    date: "28 Jan 2026",
    title: "Top 5 Critical Mistakes to Avoid in Raft Foundation Modeling with SAFE",
    desc: "Soil-structure interaction factors, modulus of subgrade reaction tuning, and punching shear verification every consultant must audit.",
    author: "Jane Doe",
    role: "Senior Design Associate",
    initials: "JD"
  },
  {
    id: 3,
    tag: "SEISMIC & IS CODES",
    readTime: "7 min read",
    date: "15 Jan 2026",
    title: "Understanding IS 1893:2016 Response Spectrum Dynamic Analysis",
    desc: "A step-by-step practitioner guide to scaling base shear, torsional irregularity parameters, and soft-storey stiffness verification.",
    author: "Er. Saurabh Mishra",
    role: "Lead Structural Mentor",
    initials: "SM"
  },
  {
    id: 4,
    tag: "AUTOMATION & BIM",
    readTime: "4 min read",
    date: "04 Jan 2026",
    title: "Automating Structural Design Sheets with Excel VBA & Python",
    desc: "Accelerate rebar takeoffs, column interaction diagrams, and batch ETABS load combinations with simple open-source scripts.",
    author: "Alice Johnson",
    role: "BIM Specialist",
    initials: "AJ"
  }
];

const Blog = () => {
  return (
    <section className="section blog-section" id="blog">
      <div className="container">
        
        {/* Header */}
        <div className="blog-header">
          <div className="sketch-badge" style={{ marginBottom: '10px' }}>
            <FaNewspaper /> Engineering Insights &amp; Articles
          </div>
          <h2 className="section-title">LATEST ENGINEERING BLOG</h2>
          <p className="blog-header-subtitle">
            Expert articles, case study breakdowns, and structural design tutorials written by practicing consulting engineers.
          </p>
        </div>

        {/* Clean Responsive Editorial Grid (Zero stock photos / Zero timers) */}
        <div className="blog-pure-grid">
          {blogsData.map(blog => (
            <article className="blog-card-minimal" key={blog.id}>
              
              <div className="blog-card-meta-top">
                <span className="blog-topic-tag">{blog.tag}</span>
                <span className="blog-read-time">
                  <FaClock className="clock-icon" /> {blog.readTime}
                </span>
              </div>

              <h3 className="blog-card-title">{blog.title}</h3>
              <p className="blog-card-desc">{blog.desc}</p>
              
              <div className="blog-card-footer">
                <div className="blog-author-block">
                  <div className="blog-author-initials">
                    {blog.initials}
                  </div>
                  <div className="blog-author-text">
                    <strong>{blog.author}</strong>
                    <span>{blog.date} &bull; {blog.role}</span>
                  </div>
                </div>

                <a href="#blog" className="blog-read-link">
                  <span>Read</span>
                  <FaArrowRight className="read-arrow" />
                </a>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Blog;
