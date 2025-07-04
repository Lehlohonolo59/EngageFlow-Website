 // Function to show different pages
        function showPage(pageId) {
            // Hide all pages
            const pages = document.querySelectorAll('.page');
            pages.forEach(page => page.classList.remove('active'));
            
            // Show selected page
            document.getElementById(pageId).classList.add('active');
            
            // Update active navigation link
            const navLinks = document.querySelectorAll('.nav-links a');
            navLinks.forEach(link => link.classList.remove('active'));
            event.target.classList.add('active');
            
            // Close mobile menu if open
            document.querySelector('.nav-links').classList.remove('active');
        }

        // Function to toggle mobile menu
        function toggleMobileMenu() {
            const navLinks = document.querySelector('.nav-links');
            navLinks.classList.toggle('active');
        }

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            const nav = document.querySelector('nav');
            const navLinks = document.querySelector('.nav-links');
            
            if (!nav.contains(event.target) && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });

        // Add smooth scrolling effect when switching pages
        document.addEventListener('DOMContentLoaded', function() {
            // Set initial active state
            showPage('home');
            
            // Add animation class to service cards when they come into view
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };
            
            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.animationDelay = Math.random() * 0.5 + 's';
                        entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
                    }
                });
            }, observerOptions);
            
            // Observe all service cards
            const serviceCards = document.querySelectorAll('.service-card');
            serviceCards.forEach(card => observer.observe(card));
        });

        // Add CSS animation for fade in effect
        const style = document.createElement('style');
        style.textContent = `
            @keyframes fadeInUp {
                from {
                    opacity: 0;
                    transform: translateY(30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        `;
        document.head.appendChild(style);