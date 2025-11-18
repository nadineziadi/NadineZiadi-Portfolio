// Custom Cursor
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    setTimeout(() => {
        cursorFollower.style.left = e.clientX + 'px';
        cursorFollower.style.top = e.clientY + 'px';
    }, 100);
});

// Cursor hover effects
const hoverElements = document.querySelectorAll('a, button, .project-card');
hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(1.5)';
        cursorFollower.style.transform = 'scale(1.5)';
    });
    el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursorFollower.style.transform = 'scale(1)';
    });
});

// Mobile Menu
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = navbar.offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Active nav link highlighting
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Animated counter for stats
const animateCounter = (element, target, duration = 2000) => {
    let start = 0;
    const increment = target / (duration / 16);
    
    const counter = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target + '+';
            clearInterval(counter);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
};

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Animate stat numbers
            if (entry.target.classList.contains('stat-number')) {
                const target = parseInt(entry.target.getAttribute('data-target'));
                animateCounter(entry.target, target);
            }
        }
    });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll('.fade-in, .experience-card, .project-card, .tech-category, .stat-number').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// Project Modal
const projectModal = document.getElementById('projectModal');
const modalOverlay = projectModal.querySelector('.modal-overlay');
const modalClose = projectModal.querySelector('.modal-close');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalTech = document.getElementById('modalTech');
const modalDescription = document.getElementById('modalDescription');
const modalFeatures = document.getElementById('modalFeatures');
const modalGithub = document.getElementById('modalGithub');

// Project data
const projectsData = {
    'student-helper': {
        title: 'Student Helper - AI Assistant',
        image: 'student-helper.jpg',
        tech: ['Angular', 'Spring Boot', 'Ollama', 'Hugging Face', 'AI/ML'],
        description: 'An intelligent academic assistant powered by multiple AI models to help students with their studies. The application integrates Ollama and Hugging Face models to provide comprehensive academic support.',
        features: [
            'Automatic text summarization using advanced NLP models',
            'Interactive quiz generation from uploaded documents',
            'Plagiarism detection with similarity scoring',
            'AI-powered CV writing assistance with suggestions',
            'Multi-model integration for diverse AI capabilities',
            'User-friendly Angular interface with real-time processing',
            'Secure Spring Boot backend with REST API',
            'Document parsing and analysis pipeline'
        ],
        github: 'https://github.com/nadineziadi/student-helper'
    },
    'gymini': {
        title: 'GYMINI - Fitness Mobile App',
        image: 'gymini.jpg',
        tech: ['Flutter', 'YouTube API', 'Gemini AI', 'Firebase'],
        description: 'A comprehensive fitness application that combines workout tracking, nutrition planning, and mental health support. Powered by Gemini AI for personalized recommendations.',
        features: [
            'Personalized workout plans with video demonstrations',
            'Integration with YouTube API for exercise tutorials',
            'Nutrition tracking with meal planning features',
            'Mental health support with guided meditations',
            'AI-powered recommendations using Gemini',
            'Progress tracking with detailed analytics',
            'Social features to connect with other users',
            'Cross-platform support (iOS & Android)',
            'Music integration for workout sessions'
        ],
        github: 'https://github.com/nadineziadi/gymini'
    },
    'constructify': {
        title: 'Constructify - Project Management',
        image: 'constructify.jpg',
        tech: ['Angular', 'Spring Boot', 'Machine Learning', 'Microservices', 'MySQL'],
        description: 'A construction project management platform with AI-powered features for content moderation and automatic summarization. Built with microservices architecture for scalability.',
        features: [
            'AI-powered meeting and document summarization',
            'Hate speech detection using ML algorithms',
            'Real-time project tracking and monitoring',
            'Interactive dashboard with data visualization',
            'RESTful microservices architecture',
            'Role-based access control',
            'Document management system',
            'Team collaboration features',
            'Automated reporting and analytics'
        ],
        github: 'https://github.com/nadineziadi/constructify'
    }
};

// Open modal
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', function(e) {
        if (e.target.closest('.project-link')) return;
        
        const projectId = this.getAttribute('data-project');
        const project = projectsData[projectId];
        
        if (project) {
            modalTitle.textContent = project.title;
            modalImage.src = project.image;
            modalImage.alt = project.title;
            modalDescription.textContent = project.description;
            modalGithub.href = project.github;
            
            // Clear and populate tech tags
            modalTech.innerHTML = '';
            project.tech.forEach(tech => {
                const tag = document.createElement('span');
                tag.className = 'tech-tag';
                tag.textContent = tech;
                modalTech.appendChild(tag);
            });
            
            // Clear and populate features
            modalFeatures.innerHTML = '<h3>Key Features</h3><ul></ul>';
            const featuresList = modalFeatures.querySelector('ul');
            project.features.forEach(feature => {
                const li = document.createElement('li');
                li.textContent = feature;
                featuresList.appendChild(li);
            });
            
            projectModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });
});

// Close modal
const closeModal = () => {
    projectModal.classList.remove('active');
    document.body.style.overflow = 'auto';
};

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);

// Close modal with ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectModal.classList.contains('active')) {
        closeModal();
    }
});

// Parallax effect for hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-content');
    
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
        hero.style.opacity = 1 - (scrolled / window.innerHeight) * 0.5;
    }
});

// Floating cards animation
const floatingCards = document.querySelectorAll('.floating-card');
floatingCards.forEach((card, index) => {
    setInterval(() => {
        const randomY = Math.random() * 20 - 10;
        const randomX = Math.random() * 10 - 5;
        card.style.transform = `translate(${randomX}px, ${randomY}px)`;
    }, 3000 + index * 1000);
});

// Image error handling - show placeholder if image fails to load
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function() {
        this.style.background = 'linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.2))';
        this.style.display = 'flex';
        this.style.alignItems = 'center';
        this.style.justifyContent = 'center';
        this.alt = '🖼️';
    });
});

// Typing effect for hero title (optional)
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
    const text = heroTitle.innerHTML;
    heroTitle.innerHTML = '';
    let i = 0;
    
    const typeWriter = () => {
        if (i < text.length) {
            heroTitle.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    };
    
    // Start typing after page load
    window.addEventListener('load', () => {
        setTimeout(typeWriter, 1000);
    });
}

// Add ripple effect to buttons
document.querySelectorAll('.btn, .btn-cv, .contact-card').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple CSS
const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Reveal animations on scroll
window.addEventListener('scroll', () => {
    const reveals = document.querySelectorAll('.fade-in');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Add fade-in class to elements
    document.querySelectorAll('.experience-card, .project-card, .tech-category').forEach(el => {
        el.classList.add('fade-in');
    });
    
    // Trigger animations for elements in view
    window.dispatchEvent(new Event('scroll'));
});

console.log('Portfolio loaded successfully! 🚀');