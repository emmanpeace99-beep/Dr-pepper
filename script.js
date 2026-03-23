document.addEventListener('DOMContentLoaded', () => {

    // 1. Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li a');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('toggle');
    });

    // Close mobile menu when a link is clicked
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // 2. Sticky Header Background on Scroll
    const header = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 3. Mock Store Locator Interactivity
    const locatorForm = document.getElementById('locator-form');
    const locatorResults = document.getElementById('locator-results');

    locatorForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const postcode = document.getElementById('postcode').value;
        
        // Simulating loading state and result
        locatorResults.classList.remove('hidden');
        locatorResults.innerHTML = `<p style="margin-top: 20px; color: var(--accent-gold);">Searching for stockists near <strong>${postcode}</strong>...</p>`;
        
        setTimeout(() => {
            locatorResults.innerHTML = `
                <div style="margin-top: 20px; text-align: left; background: #1a1a1a; padding: 20px; border-radius: 5px; display: inline-block;">
                    <h4>📍 Local Supermarket (0.8 miles)</h4>
                    <p>Open until 10:00 PM</p>
                    <a href="#" style="color: var(--brand-red); text-decoration: none; font-weight: bold; margin-top: 10px; display: block;">Get Directions</a>
                </div>
            `;
        }, 1200);
    });

    // 4. Newsletter Signup Validation
    const emailForm = document.getElementById('email-form');
    const successMsg = document.querySelector('.success-msg');

    emailForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = document.getElementById('email');
        
        // Basic validation passed (HTML5 required attribute handles the rest)
        if(emailInput.value) {
            emailForm.classList.add('hidden'); // Hide form
            successMsg.classList.remove('hidden'); // Show success message
        }
    });
});