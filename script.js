const projectsData = [
    {
        id: 1,
        title: "E-Commerce Platform",
        category: "web",
        description: "A modern e-commerce platform with real-time inventory, payment integration, and admin dashboard. Built with Next.js and Stripe.",
        image: "Images/Anon E-Commerce Store.png",
        tech: ["HTML", "CSS", "JavaScript", "JSON"],
        live: "https://minhal-exe.github.io/Anon-Mohammad-Minhal/",
        github: "https://github.com/Minhal-exe/Anon-Mohammad-Minhal"
    },
    {
        id: 2,
        title: "Rent The Car | Rento",
        category: "web",
        description: "Rento is a modern car rental platform offering easy booking, affordable rates, and a wide range of vehicles for every journey. Drive your comfort, anytime, anywhere. 🚗✨",
        image: "Images/Rent The Car Rento.png",
         tech: ["HTML", "CSS", "JavaScript", "JSON"],
        live: "https://minhal-exe.github.io/Rent-The-Car/",
        github: "https://github.com/Minhal-exe/Rent-The-Car"
    },
    {
        id: 3,
        title: "Sir Asher Hashmi",
        category: "mobile",
        description: "Sir Asher Hasmi’s website is an educational platform dedicated to making mathematics easy, clear, and understandable for students. It provides structured lessons, practice materials, and guidance to help students build strong concepts and achieve academic success in maths. 📘➗",
        image: "Images/Sir Asher Hashmi .png",
         tech: ["HTML", "CSS", "JavaScript", "JSON"],
        live: "https://minhal-exe.github.io/Asher-Hashmi/",
        github: "https://github.com/Minhal-exe/Asher-Hashmi"
    },
    {
        id: 4,
        title: "Expense Calculator ",
        category: "design",
        description: "A simple and smart tool to track your income and expenses, manage your budget, and monitor your spending easily in one place. 💰📊",
        image: "Images/Expense Calculator .png",
        tech: ["HTML", "CSS", "JavaScript", "JSON"],
        live: "https://minhal-exe.github.io/Expense-Calculator/",
        github: "https://github.com/Minhal-exe/Expense-Calculator"
    },
    {
        id: 5,
        title: "Calculate Your Age",
        category: "web",
        description: "A simple and accurate tool that instantly calculates your exact age in years, months, and days based on your date of birth. 🎂📅",
        image: "Images/Age Calculator .png",
        tech: ["HTML", "CSS", "JavaScript", "JSON"],
        live: "https://minhal-exe.github.io/Calculate-Your-Age/",
        github: "https://github.com/Minhal-exe/CalculateYourAge"
    },
    {
        id: 6,
        title: "Chronos Watches",
        category: "design",
        description: "Chronos Watch is a luxury timepiece brand combining precision engineering with elegant design, crafted for those who value style, performance, and timeless sophistication. ⌚✨",
        image: "Images/Chronos Watch .png",
        tech: ["HTML", "CSS", "JavaScript", "JSON"],
        live: "https://example.com",
        github: "https://github.com"
    }
];

const testimonialsData = [
    {
        id: 1,
        name: "Syed Gohar Ali Jaffri",
        role: "CEO at TechStart",
        text: "Mohammad delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and technical expertise made the entire process smooth and efficient.",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face"
    },
    {
        id: 2,
        name: "Hashir Arshad",
        role: "Product Manager at InnovateCo",
        text: "Working with Mohammad was a fantastic experience. He transformed our vision into a beautiful, functional application. His communication skills and technical prowess are top-notch.",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
        id: 3,
        name: "Ruhab Zafar",
        role: "Founder of DesignHub",
        text: "The design system Mohammad created for us has revolutionized our development workflow. It's intuitive, scalable, and beautifully crafted. Highly recommended!",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    }
];

const typingWords = ['Frontend Developer', 'UI/UX Designer', 'React Expert', 'Problem Solver'];

const DOM = {
    preloader: document.getElementById('preloader'),
    cursor: document.getElementById('cursor'),
    cursorFollower: document.getElementById('cursor-follower'),
    mouseGlow: document.getElementById('mouseGlow'),
    scrollProgress: document.getElementById('scrollProgress'),
    navbar: document.getElementById('navbar'),
    navMenu: document.getElementById('navMenu'),
    navToggle: document.getElementById('navToggle'),
    themeToggle: document.getElementById('themeToggle'),
    typingText: document.getElementById('typingText'),
    particlesCanvas: document.getElementById('particlesCanvas'),
    projectsGrid: document.getElementById('projectsGrid'),
    projectSearch: document.getElementById('projectSearch'),
    filterBtns: document.querySelectorAll('.filter-btn'),
    testimonialsTrack: document.getElementById('testimonialsTrack'),
    sliderDots: document.getElementById('sliderDots'),
    prevBtn: document.getElementById('prevBtn'),
    nextBtn: document.getElementById('nextBtn'),
    contactForm: document.getElementById('contactForm'),
    formSuccess: document.getElementById('formSuccess'),
    backToTop: document.getElementById('backToTop'),
    projectModal: document.getElementById('projectModal'),
    modalBody: document.getElementById('modalBody')
};

const lerp = (start, end, factor) => start + (end - start) * factor;

const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

const getRandomColor = () => {
    const colors = ['#00f5d4', '#00d4aa', '#00b4d8'];
    return colors[Math.floor(Math.random() * colors.length)];
};

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

window.addEventListener('load', () => {
    if (prefersReducedMotion) {
        DOM.preloader.style.display = 'none';
        document.body.style.overflow = 'auto';
        initAllFeatures();
    } else {
        setTimeout(() => {
            DOM.preloader.classList.add('hidden');
            document.body.style.overflow = 'auto';
            initAllFeatures();
        }, 2000);
    }
});

function initAllFeatures() {
    initParticles();
    initTypingEffect();
    initScrollAnimations();
    renderProjects('all');
    renderTestimonials();
    initCounters();
    initSkillBars();
    initCircularSkills();
}

if (DOM.cursor && DOM.cursorFollower && !prefersReducedMotion) {
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let followerX = 0, followerY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    const animateCursor = () => {
        cursorX = lerp(cursorX, mouseX, 0.2);
        cursorY = lerp(cursorY, mouseY, 0.2);
        followerX = lerp(followerX, mouseX, 0.1);
        followerY = lerp(followerY, mouseY, 0.1);

        DOM.cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
        DOM.cursorFollower.style.transform = `translate(${followerX}px, ${followerY}px)`;
        
        requestAnimationFrame(animateCursor);
    };
    animateCursor();

    const hoverElements = document.querySelectorAll('a, button, input, textarea, .project-card, .tech-icon');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            DOM.cursor.classList.add('hover');
            DOM.cursorFollower.classList.add('hover');
        });
        el.addEventListener('mouseleave', () => {
            DOM.cursor.classList.remove('hover');
            DOM.cursorFollower.classList.remove('hover');
        });
    });
}

if (DOM.mouseGlow && !prefersReducedMotion) {
    document.addEventListener('mousemove', (e) => {
        requestAnimationFrame(() => {
            DOM.mouseGlow.style.left = `${e.clientX}px`;
            DOM.mouseGlow.style.top = `${e.clientY}px`;
        });
    });
}

function initParticles() {
    if (!DOM.particlesCanvas || prefersReducedMotion) return;

    const ctx = DOM.particlesCanvas.getContext('2d');
    let particles = [];
    let animationId;

    const resizeCanvas = () => {
        DOM.particlesCanvas.width = window.innerWidth;
        DOM.particlesCanvas.height = window.innerHeight;
    };

    class Particle {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * DOM.particlesCanvas.width;
            this.y = Math.random() * DOM.particlesCanvas.height;
            this.size = Math.random() * 2 + 0.5;
            this.speedX = (Math.random() - 0.5) * 0.5;
            this.speedY = (Math.random() - 0.5) * 0.5;
            this.opacity = Math.random() * 0.5 + 0.2;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x < 0 || this.x > DOM.particlesCanvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > DOM.particlesCanvas.height) this.speedY *= -1;
        }

        draw() {
            ctx.fillStyle = `rgba(0, 245, 212, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    const createParticles = () => {
        const particleCount = Math.floor((window.innerWidth * window.innerHeight) / 15000);
        particles = [];
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    };

    const connectParticles = () => {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 120) {
                    ctx.strokeStyle = `rgba(0, 245, 212, ${0.1 * (1 - distance / 120)})`;
                    ctx.lineWidth = 0.5;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
    };

    const animate = () => {
        ctx.clearRect(0, 0, DOM.particlesCanvas.width, DOM.particlesCanvas.height);
        
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        
        connectParticles();
        animationId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', () => {
        resizeCanvas();
        createParticles();
    });

    resizeCanvas();
    createParticles();
    animate();
}

let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (currentScroll / scrollHeight) * 100;
    DOM.scrollProgress.style.width = `${scrollPercent}%`;

    if (currentScroll > 50) {
        DOM.navbar.classList.add('scrolled');
    } else {
        DOM.navbar.classList.remove('scrolled');
    }

    if (currentScroll > 500) {
        DOM.backToTop.classList.add('visible');
    } else {
        DOM.backToTop.classList.remove('visible');
    }

    lastScroll = currentScroll;
});

DOM.navToggle.addEventListener('click', () => {
    DOM.navToggle.classList.toggle('active');
    DOM.navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        DOM.navToggle.classList.remove('active');
        DOM.navMenu.classList.remove('active');
    });
});

const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(`.nav-link[href*="${sectionId}"]`)?.classList.add('active');
        } else {
            document.querySelector(`.nav-link[href*="${sectionId}"]`)?.classList.remove('active');
        }
    });
});

function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
}

initTheme();

DOM.themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

function initTypingEffect() {
    if (!DOM.typingText) return;
    
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    const type = () => {
        const currentWord = typingWords[wordIndex];
        
        if (isDeleting) {
            DOM.typingText.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 50;
        } else {
            DOM.typingText.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 100;
        }

        if (!isDeleting && charIndex === currentWord.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % typingWords.length;
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    };

    type();
}

function initScrollAnimations() {
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
}

function initCounters() {
    const counters = document.querySelectorAll('.stat-number, .stat-value');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const countTo = parseInt(target.getAttribute('data-count'));
                let count = 0;
                const duration = 2000;
                const increment = countTo / (duration / 16);

                const updateCount = () => {
                    count += increment;
                    if (count < countTo) {
                        target.textContent = Math.ceil(count);
                        requestAnimationFrame(updateCount);
                    } else {
                        target.textContent = countTo;
                    }
                };

                if (!prefersReducedMotion) {
                    updateCount();
                } else {
                    target.textContent = countTo;
                }
                observer.unobserve(target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
}

function initSkillBars() {
    const skillBars = document.querySelectorAll('.progress-fill, .skill-fill');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.getAttribute('data-progress') || entry.target.getAttribute('data-width');
                setTimeout(() => {
                    entry.target.style.width = `${width}%`;
                }, 200);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => observer.observe(bar));
}

function initCircularSkills() {
    const circles = document.querySelectorAll('.progress-circle');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const circle = entry.target;
                const parent = circle.closest('.circular-skill');
                const progress = parent.getAttribute('data-progress');
                const circumference = 2 * Math.PI * 45; // radius is 45
                const offset = circumference - (progress / 100) * circumference;
            
                // Add SVG Gradient definition dynamically if not present
                const svg = circle.closest('svg');
                if (!svg.querySelector('defs')) {
                    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
                    defs.innerHTML = `
                        <linearGradient id="skillGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stop-color="#00f5d4" />
                            <stop offset="50%" stop-color="#00b4d8" />
                            <stop offset="100%" stop-color="#00d4aa" />
                        </linearGradient>
                    `;
                    svg.prepend(defs);
                }

                setTimeout(() => {
                    circle.style.strokeDashoffset = offset;
                }, 200);

                // Animate the number
                const valueEl = parent.querySelector('.circular-value');
                let current = 0;
                const duration = 1500;
                const increment = progress / (duration / 16);
                
                const updateValue = () => {
                    current += increment;
                    if (current < progress) {
                        valueEl.textContent = Math.ceil(current);
                        requestAnimationFrame(updateValue);
                    } else {
                        valueEl.textContent = progress;
                    }
                };

                if (!prefersReducedMotion) updateValue();
                else valueEl.textContent = progress;

                observer.unobserve(circle);
            }
        });
    }, { threshold: 0.5 });

    circles.forEach(circle => observer.observe(circle));
}

function renderProjects(filter) {
    const filteredProjects = filter === 'all' 
        ? projectsData 
        : projectsData.filter(p => p.category === filter);

    DOM.projectsGrid.innerHTML = '';

    filteredProjects.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'project-card reveal-up';
        card.style.transitionDelay = `${index * 100}ms`;
        card.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}" loading="lazy">
                <div class="project-overlay">
                    <button class="project-btn" onclick="openModal(${project.id})" aria-label="View project">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                    </button>
                    <a href="${project.live}" target="_blank" rel="noopener noreferrer" class="project-btn" aria-label="Live site">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                    </a>
                    <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-btn" aria-label="GitHub">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                        </svg>
                    </a>
                </div>
            </div>
            <div class="project-content">
                <span class="project-category">${project.category}</span>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.tech.map(t => `<span>${t}</span>`).join('')}
                </div>
            </div>
        `;

        DOM.projectsGrid.appendChild(card);

        // Trigger reveal animation
        setTimeout(() => {
            card.classList.add('revealed');
        }, 100 + index * 100);

        // Add 3D Tilt effect
        if (!prefersReducedMotion) {
            addTiltEffect(card);
        }
    });

    // Re-observe for reveal animations
    initScrollAnimations();
}

// Filter Button Logic
DOM.filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        DOM.filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderProjects(btn.dataset.filter);
    });
});

// Search Logic
DOM.projectSearch.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const cards = document.querySelectorAll('.project-card');
    
    cards.forEach(card => {
        const title = card.querySelector('.project-title').textContent.toLowerCase();
        const desc = card.querySelector('.project-description').textContent.toLowerCase();
        const tech = card.querySelector('.project-tech').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || desc.includes(searchTerm) || tech.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

// 3D Tilt Effect Helper
function addTiltEffect(element) {
    element.addEventListener('mousemove', (e) => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    element.addEventListener('mouseleave', () => {
        element.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    });
}

function openModal(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    if (!project) return;

    DOM.modalBody.innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="modal-image">
        <div class="modal-info">
            <span class="modal-category">${project.category}</span>
            <h3 class="modal-title">${project.title}</h3>
            <p class="modal-description">${project.description}</p>
            <div class="modal-tech">
                ${project.tech.map(t => `<span>${t}</span>`).join('')}
            </div>
            <div class="modal-links">
                <a href="${project.live}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                    <span>View Live</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                </a>
                <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
                    <span>GitHub</span>
                </a>
            </div>
        </div>
    `;

    DOM.projectModal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    DOM.projectModal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

DOM.projectModal.querySelector('.modal-overlay').addEventListener('click', closeModal);
DOM.projectModal.querySelector('.modal-close').addEventListener('click', closeModal);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && DOM.projectModal.classList.contains('show')) {
        closeModal();
    }
});

let currentSlide = 0;

function renderTestimonials() {
    DOM.testimonialsTrack.innerHTML = testimonialsData.map(t => `
        <div class="testimonial-card">
            <div class="testimonial-content">
                <div class="testimonial-quote">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                    </svg>
                </div>
                <p class="testimonial-text">${t.text}</p>
                <div class="testimonial-author">
                    <img src="${t.avatar}" alt="${t.name}" class="testimonial-avatar">
                    <div class="testimonial-info">
                        <span class="testimonial-name">${t.name}</span>
                        <span class="testimonial-role">${t.role}</span>
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    DOM.sliderDots.innerHTML = testimonialsData.map((_, i) => `
        <button class="slider-dot ${i === 0 ? 'active' : ''}" data-index="${i}" aria-label="Slide ${i + 1}"></button>
    `).join('');

    document.querySelectorAll('.slider-dot').forEach(dot => {
        dot.addEventListener('click', () => {
            goToSlide(parseInt(dot.dataset.index));
        });
    });
}

function goToSlide(index) {
    currentSlide = index;
    if (currentSlide >= testimonialsData.length) currentSlide = 0;
    if (currentSlide < 0) currentSlide = testimonialsData.length - 1;

    DOM.testimonialsTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    document.querySelectorAll('.slider-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlide);
    });
}

DOM.prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));
DOM.nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));

if (!prefersReducedMotion) {
    setInterval(() => {
        goToSlide(currentSlide + 1);
    }, 5000);
}

DOM.contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const btn = DOM.contactForm.querySelector('.btn-submit');
    btn.classList.add('loading');
    btn.disabled = true;

    await new Promise(resolve => setTimeout(resolve, 2000));

    btn.classList.remove('loading');
    btn.disabled = false;
    
    DOM.formSuccess.classList.add('show');
    DOM.contactForm.reset();

    setTimeout(() => {
        DOM.formSuccess.classList.remove('show');
    }, 4000);
});

DOM.backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});