import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight, FaBookOpen } from 'react-icons/fa';
import './Courses.css';

const coursesData = [
  {
    id: 1,
    category: "STRUCTURAL",
    title: "Structural Design",
    instructor: "Saurabh Mishra",
    role: "Course Instructor",
    description: "Learn to design modern building structures with practical ETABS and SAFE industry modeling.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 2,
    category: "COMMUNICATION",
    title: "Business English",
    instructor: "Jane Doe",
    role: "Course Instructor",
    description: "Master communication, report writing, and client presentation skills for corporate environments.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 3,
    category: "CERTIFICATION",
    title: "Exam Preparation",
    instructor: "John Smith",
    role: "Course Instructor",
    description: "Comprehensive guide to clearing professional structural and civil certification exams.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 4,
    category: "COMPUTATIONAL",
    title: "Hello World",
    instructor: "Alice Johnson",
    role: "Course Instructor",
    description: "Introduction to computational design, parametric tools, and engineering automation scripts.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 5,
    category: "COMMUNICATION",
    title: "Exam English",
    instructor: "Michael Brown",
    role: "Course Instructor",
    description: "Focus on technical English vocabulary and scoring high in competitive examinations.",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=600&q=80",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 6,
    category: "STRUCTURAL",
    title: "Structural Preparation",
    instructor: "Saurabh Mishra",
    role: "Course Instructor",
    description: "Advanced techniques for structural drafting, blueprint interpretation, and load calculations.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 7,
    category: "ADVANCED CIVIL",
    title: "Structural Design II",
    instructor: "Jane Doe",
    role: "Course Instructor",
    description: "Part 2: Advanced seismic analysis, wind load engineering, and high-rise commercial structures.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 8,
    category: "FOUNDATIONS",
    title: "Base Foundation",
    instructor: "John Smith",
    role: "Course Instructor",
    description: "Learn the fundamentals of deep pile foundations, raft design, and soil-structure interaction.",
    image: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=600&q=80",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80"
  }
];

const Courses = () => {
  const [itemsPerPage, setItemsPerPage] = useState(() => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth <= 640) return 1;
      if (window.innerWidth <= 1024) return 2;
    }
    return 4;
  });

  const [currentPage, setCurrentPage] = useState(0);
  const [animating, setAnimating] = useState(false);

  // Update items per page on viewport resize
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

  const totalPages = Math.ceil(coursesData.length / itemsPerPage);

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

  // Ensure currentPage doesn't exceed totalPages on resize
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

  const displayedCourses = coursesData.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  return (
    <section className="section courses-section" id="courses">
      {/* Decorative CAD crosshairs */}
      <div className="cad-crosshair" style={{ top: '30px', left: '3%' }}></div>
      <div className="cad-crosshair" style={{ top: '30px', right: '3%' }}></div>

      <div className="container">
        
        {/* Header with Title and Arrow Controls */}
        <div className="courses-header">
          <div>
            <div className="sketch-badge" style={{ marginBottom: '10px' }}>
              <FaBookOpen /> Industry Curated Curriculum
            </div>
            <h2 className="section-title" style={{ marginBottom: 0 }}>OUR COURSES</h2>
          </div>

          <div className="courses-nav-wrapper">
            <span className="courses-page-counter">
              {currentPage + 1 < 10 ? `0${currentPage + 1}` : currentPage + 1} / {totalPages < 10 ? `0${totalPages}` : totalPages}
            </span>
            <div className="courses-nav">
              <button 
                className="nav-arrow" 
                onClick={handlePrev}
                aria-label="Previous Courses"
                title="Previous"
              >
                <FaArrowLeft />
              </button>
              <button 
                className="nav-arrow" 
                onClick={handleNext}
                aria-label="Next Courses"
                title="Next"
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>

        {/* Courses Row (1 on Mobile, 2 on Tablet, 4 on Desktop) */}
        <div className={`courses-grid courses-grid-items-${itemsPerPage} ${animating ? 'fade-transition' : ''}`}>
          {displayedCourses.map(course => (
            <div className="course-card" key={course.id}>
              <div className="course-image">
                <img 
                  src={course.image} 
                  alt={course.title}
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80';
                  }}
                />
                <span className="course-category-tag">{course.category}</span>
                <div className="course-avatar">
                  <img 
                    src={course.avatar} 
                    alt={course.instructor}
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80';
                    }}
                  />
                </div>
              </div>
              <div className="course-content">
                <p className="instructor-role">{course.role}</p>
                <p className="instructor-name">{course.instructor}</p>
                <h3 className="course-title">{course.title}</h3>
                <p className="course-desc">{course.description}</p>
                <a href="#courses" className="learn-more">
                  LEARN MORE <span>&rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Pagination Dots */}
        <div className="courses-pagination-dots">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              className={`courses-dot ${index === currentPage ? 'active' : ''}`}
              onClick={() => changePage(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Courses;
