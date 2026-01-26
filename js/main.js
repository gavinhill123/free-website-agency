// ===================================
// The Scottish Free Website Guys
// Main JavaScript
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ===================================
    // Mobile Navigation Toggle
    // ===================================
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navMenu.contains(event.target);
            const isClickOnHamburger = hamburger.contains(event.target);
            
            if (!isClickInsideNav && !isClickOnHamburger && navMenu.classList.contains('active')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
    
    // ===================================
    // Smooth Scrolling for Anchor Links
    // ===================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Don't prevent default for empty hash
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ===================================
    // Navbar Background on Scroll
    // ===================================
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });
    
    // ===================================
    // FAQ Accordion
    // ===================================
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            // Close other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
    
    // ===================================
    // Contact Form Handling
    // ===================================
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                businessType: document.getElementById('businessType').value,
                message: document.getElementById('message').value
            };
            
            // Add loading state to button
            const submitBtn = contactForm.querySelector('.btn-submit');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.classList.add('loading');
            submitBtn.disabled = true;
            
            // Simulate form submission (replace with actual API call)
            setTimeout(() => {
                // Success message
                alert('Thank you for your message! We\'ll get back to you within 24 hours.');
                
                // Reset form
                contactForm.reset();
                
                // Reset button
                submitBtn.textContent = originalText;
                submitBtn.classList.remove('loading');
                submitBtn.disabled = false;
                
                // Log form data (for development)
                console.log('Form submitted:', formData);
            }, 1500);
        });
        
        // Form validation
        const inputs = contactForm.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                if (this.hasAttribute('required') && !this.value.trim()) {
                    this.style.borderColor = '#f44336';
                } else {
                    this.style.borderColor = '#E0E0E0';
                }
            });
            
            input.addEventListener('focus', function() {
                this.style.borderColor = '#1976D2';
            });
        });
    }
    
    // ===================================
    // Active Navigation Link on Scroll
    // ===================================
    const sections = document.querySelectorAll('section[id]');
    const navLinksAll = document.querySelectorAll('.nav-link');
    
    function highlightNavigation() {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinksAll.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavigation);
    
    // ===================================
    // Back to Top Button (Optional)
    // ===================================
    const backToTopBtn = document.createElement('button');
    backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #4A148C, #1976D2);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        display: none;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
        z-index: 999;
        transition: all 0.3s ease;
    `;
    
    document.body.appendChild(backToTopBtn);
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            backToTopBtn.style.display = 'flex';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    backToTopBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.4)';
    });
    
    backToTopBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)';
    });
    
    // ===================================
    // Email Validation
    // ===================================
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    const emailInput = document.getElementById('email');
    if (emailInput) {
        emailInput.addEventListener('blur', function() {
            if (this.value && !validateEmail(this.value)) {
                this.style.borderColor = '#f44336';
                
                // Show error message
                let errorMsg = this.parentElement.querySelector('.error-message');
                if (!errorMsg) {
                    errorMsg = document.createElement('span');
                    errorMsg.className = 'error-message';
                    errorMsg.style.cssText = 'color: #f44336; font-size: 14px; margin-top: 5px; display: block;';
                    errorMsg.textContent = 'Please enter a valid email address';
                    this.parentElement.appendChild(errorMsg);
                }
            } else {
                this.style.borderColor = '#E0E0E0';
                const errorMsg = this.parentElement.querySelector('.error-message');
                if (errorMsg) {
                    errorMsg.remove();
                }
            }
        });
    }
    
    // ===================================
    // Phone Number Formatting (UK)
    // ===================================
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            
            // Format as UK phone number
            if (value.length > 0) {
                if (value.startsWith('44')) {
                    value = '+' + value;
                } else if (value.startsWith('0')) {
                    // Keep as is
                }
            }
            
            e.target.value = value;
        });
    }
    
    // ===================================
    // Lazy Loading for Images (if added later)
    // ===================================
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.add('loaded');
                        observer.unobserve(img);
                    }
                }
            });
        });
        
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
    }
    
    // ===================================
    // Console Welcome Message
    // ===================================
    console.log('%c🏴󠁧󠁢󠁳󠁣󠁴󠁿 The Scottish Free Website Guys', 'color: #4A148C; font-size: 20px; font-weight: bold;');
    console.log('%cWebsite built with ❤️ for Scottish businesses', 'color: #1976D2; font-size: 14px;');
    console.log('%cInterested in a free website? Contact us at hello@scottishfreewebsiteguys.co.uk', 'color: #757575; font-size: 12px;');
    
    // ===================================
    // Multi-Step Form
    // ===================================
    const multiStepForm = {
        currentStep: 1,
        totalSteps: 5,
        formData: {
            businessType: '',
            websiteStatus: '',
            businessGoals: '',
            timeline: '',
            contact: {
                name: '',
                email: '',
                phone: ''
            }
        },
        
        init: function() {
            this.setupEventListeners();
            this.updateProgressBar();
        },
        
        setupEventListeners: function() {
            // Option buttons for steps 1-4
            const optionButtons = document.querySelectorAll('.option-button');
            optionButtons.forEach(button => {
                button.addEventListener('click', (e) => {
                    this.handleOptionClick(e.currentTarget);
                });
            });
            
            // Contact form submission (step 5)
            const contactForm = document.getElementById('multiStepContactForm');
            if (contactForm) {
                contactForm.addEventListener('submit', (e) => {
                    e.preventDefault();
                    this.handleFormSubmit();
                });
            }
        },
        
        handleOptionClick: function(button) {
            const step = this.currentStep;
            const value = button.getAttribute('data-value');
            
            // Store the answer
            switch(step) {
                case 1:
                    this.formData.businessType = value;
                    break;
                case 2:
                    this.formData.websiteStatus = value;
                    break;
                case 3:
                    this.formData.businessGoals = value;
                    break;
                case 4:
                    this.formData.timeline = value;
                    break;
            }
            
            // Visual feedback - highlight selected option
            const currentStepElement = document.getElementById(`step${step}`);
            const allButtons = currentStepElement.querySelectorAll('.option-button');
            allButtons.forEach(btn => btn.classList.remove('selected'));
            button.classList.add('selected');
            
            // Auto-advance to next step after a short delay
            setTimeout(() => {
                this.nextStep();
            }, 500);
        },
        
        nextStep: function() {
            if (this.currentStep < this.totalSteps) {
                // Hide current step
                const currentStepElement = document.getElementById(`step${this.currentStep}`);
                currentStepElement.classList.remove('active');
                
                // Move to next step
                this.currentStep++;
                
                // Show next step
                const nextStepElement = document.getElementById(`step${this.currentStep}`);
                nextStepElement.classList.add('active');
                
                // Update progress bar
                this.updateProgressBar();
                
                // Scroll to top of form
                const formCard = document.querySelector('.multi-step-form-card');
                if (formCard) {
                    formCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
                
                // Focus on first input if it's the contact form
                if (this.currentStep === 5) {
                    setTimeout(() => {
                        const nameInput = document.getElementById('msName');
                        if (nameInput) nameInput.focus();
                    }, 400);
                }
            }
        },
        
        updateProgressBar: function() {
            const progressBar = document.getElementById('progressBar');
            if (progressBar) {
                const percentage = (this.currentStep / this.totalSteps) * 100;
                progressBar.style.width = percentage + '%';
            }
        },
        
        handleFormSubmit: function() {
            // Get contact form values
            this.formData.contact.name = document.getElementById('msName').value;
            this.formData.contact.email = document.getElementById('msEmail').value;
            this.formData.contact.phone = document.getElementById('msPhone').value;
            
            // Add timestamp
            this.formData.timestamp = new Date().toISOString();
            
            // Show loading state
            const submitBtn = document.querySelector('.btn-submit-multi');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Log form data (replace with actual API call)
            console.log('Multi-Step Form Data:', this.formData);
            
            // Simulate form submission
            setTimeout(() => {
                // Success message
                alert('Thank you! We\'ll get back to you within 24 hours with your free website quote.');
                
                // Reset form
                this.resetForm();
                
                // Reset button
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 1500);
        },
        
        resetForm: function() {
            // Reset to step 1
            document.querySelectorAll('.form-step').forEach(step => {
                step.classList.remove('active');
            });
            document.getElementById('step1').classList.add('active');
            
            // Reset data
            this.currentStep = 1;
            this.formData = {
                businessType: '',
                websiteStatus: '',
                businessGoals: '',
                timeline: '',
                contact: { name: '', email: '', phone: '' }
            };
            
            // Reset progress bar
            this.updateProgressBar();
            
            // Clear form inputs
            document.getElementById('multiStepContactForm').reset();
            
            // Remove selected states
            document.querySelectorAll('.option-button').forEach(btn => {
                btn.classList.remove('selected');
            });
        }
    };
    
    // Initialize multi-step form if it exists
    if (document.querySelector('.multi-step-form-card')) {
        multiStepForm.init();
    }
    
});

// ===================================
// Utility Functions
// ===================================

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Get scroll percentage
function getScrollPercentage() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    return (scrollTop / scrollHeight) * 100;
}
