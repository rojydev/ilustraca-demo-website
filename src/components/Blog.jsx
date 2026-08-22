import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight, FaClock, FaNewspaper } from 'react-icons/fa';
import './Blog.css';

const blogsData = [
  {
    id: 1,
    date: "FEB 2024",
    readTime: "5 min read",
    realDate: "12 Feb 2024",
    title: "Transitioning from Academic Theory to High-Rise Design",
    desc: "How to bridge theoretical structural mechanics with modern corporate ETABS modeling workflows.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
    author: "Er. Saurabh Mishra",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 2,
    date: "JAN 2024",
    readTime: "4 min read",
    realDate: "28 Jan 2024",
    title: "Essential English Communication for Corporate Engineers",
    desc: "Mastering technical report writing, client design defense, and multinational team collaboration.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    author: "Jane Doe",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 3,
    date: "DEC 2023",
    readTime: "7 min read",
    realDate: "15 Dec 2023",
    title: "Mastering Seismic Analysis & Wind Loads in ETABS",
    desc: "A practical step-by-step approach to dynamic response spectrum modeling and code compliance.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80",
    author: "John Smith",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 4,
    date: "NOV 2023",
    readTime: "6 min read",
    realDate: "04 Nov 2023",
    title: "Top 5 Critical Mistakes to Avoid in Foundation Raft Design",
    desc: "Soil-structure interaction factors and settlement parameters every foundation engineer must verify.",
    image: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=600&q=80",
    author: "Er. Vikramaditya Roy",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 5,
    date: "OCT 2023",
    readTime: "5 min read",
    realDate: "22 Oct 2023",
    title: "Automating Civil Calculations with Excel & Python Scripts",
    desc: "Speed up load takeoffs, column scheduling, and rebar detailing with automated computational scripts.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",
    author: "Alice Johnson",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 6,
    date: "SEP 2023",
    readTime: "4 min read",
    realDate: "10 Sep 2023",
    title: "How to Ace Technical Structural Engineering Interviews",
    desc: "Key questions on shear wall detailing, bending moments, and deflection criteria asked by consulting firms.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80",
    author: "Michael Brown",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 7,
    date: "AUG 2023",
    readTime: "8 min read",
    realDate: "18 Aug 2023",
    title: "Understanding IS 13920 Ductile Detailing Provisions",
    desc: "Complete breakdown of beam-column joint confining reinforcement, lap lengths, and shear links.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80",
    author: "Priya Patel",
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 8,
    date: "JUL 2023",
    readTime: "5 min read",
    realDate: "05 Jul 2023",
    title: "Sustainable Structural Systems & Future Building Materials",
    desc: "Exploring low-carbon green concrete, timber hybrids, and sustainable engineering standards.",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=600&q=80",
    author: "Er. Saurabh Mishra",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80"
  }
];

const Blog = () => {
  const [itemsPerPage, setItemsPerPage] = useState(() => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth <= 640) return 1;
      if (window.innerWidth <= 1024) return 2;
    }
    return 4;
  });

  const [currentPage, setCurrentPage] = useState(0);
  const [animating, setAnimating] = useState(false);

  // Update items per page on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth <= 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(4);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(blogsData.length / itemsPerPage);

  // Reliable Auto-scroll every 5 seconds across all responsive views
  useEffect(() => {
    if (totalPages <= 1) return;

    const timer = setInterval(() => {
      setAnimating(true);
      setCurrentPage((prev) => (prev >= totalPages - 1 ? 0 : prev + 1));
      setTimeout(() => setAnimating(false), 300);
    }, 5000);

    return () => clearInterval(timer);
  }, [totalPages]);

  // Prevent page index out-of-bounds on resize
  useEffect(() => {
    if (currentPage >= totalPages) {
      setCurrentPage(0);
    }
  }, [totalPages, currentPage]);

  const changePage = (newPage) => {
    setAnimating(true);
    setCurrentPage(newPage);
    setTimeout(() => setAnimating(false), 300);
  };

  const handlePrev = () => {
    const prev = currentPage === 0 ? totalPages - 1 : currentPage - 1;
    changePage(prev);
  };

  const handleNext = () => {
    const next = currentPage >= totalPages - 1 ? 0 : currentPage + 1;
    changePage(next);
  };

  const displayedBlogs = blogsData.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  return (
    <section className="section blog-section" id="blog">
      {/* Decorative CAD crosshairs */}
      <div className="cad-crosshair" style={{ top: '30px', left: '3%' }}></div>
      <div className="cad-crosshair" style={{ top: '30px', right: '3%' }}></div>

      <div className="container">
        
        {/* Header with Title & Arrow Navigation */}
        <div className="blog-header">
          <div>
            <div className="sketch-badge" style={{ marginBottom: '10px' }}>
              <FaNewspaper /> Engineering Insights &amp; Articles
            </div>
            <h2 className="section-title" style={{ marginBottom: 0 }}>Latest Blog</h2>
          </div>
          
          <div className="blog-nav-wrapper">
            <span className="blog-page-counter">
              {currentPage + 1 < 10 ? `0${currentPage + 1}` : currentPage + 1} / {totalPages < 10 ? `0${totalPages}` : totalPages}
            </span>
            <div className="blog-nav">
              <button 
                className="blog-arrow" 
                onClick={handlePrev}
                aria-label="Previous Blog Posts"
                title="Previous"
              >
                <FaArrowLeft />
              </button>
              <button 
                className="blog-arrow" 
                onClick={handleNext}
                aria-label="Next Blog Posts"
                title="Next"
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>

        {/* Blog Cards Row (1 on Mobile, 2 on Tablet, 4 on Desktop) */}
        <div className={`blog-grid blog-grid-items-${itemsPerPage} ${animating ? 'fade-transition' : ''}`}>
          {displayedBlogs.map(blog => (
            <div className="blog-card" key={blog.id}>
              <div className="blog-image">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80';
                  }}
                />
                <div className="blog-date-badge">{blog.date}</div>
              </div>
              
              <div className="blog-content">
                <div className="blog-meta-row">
                  <span className="blog-real-date">{blog.realDate}</span>
                  <span className="blog-read-time"><FaClock className="clock-icon" /> {blog.readTime}</span>
                </div>

                <h3 className="blog-title">{blog.title}</h3>
                <p className="blog-desc">{blog.desc}</p>
                
                <div className="blog-author">
                  <img 
                    src={blog.avatar} 
                    alt={blog.author} 
                    className="author-avatar"
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80';
                    }}
                  />
                  <span className="author-name">{blog.author}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Pagination Dots */}
        <div className="blog-pagination-dots">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              className={`blog-dot ${index === currentPage ? 'active' : ''}`}
              onClick={() => changePage(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Blog;
