// Typing animation
var typed = new Typed('.typing', {
    strings: ["Software Developer"],
    typeSpeed: 110,
    BackSpeed: 60,
    loop: true
});

// Active navigation items
const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(item => {
    item.addEventListener('click', () => {
        navItems.forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');
    });
});

// Intersection Observer for sections
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-item');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navItems.forEach(navItem => {
                    navItem.classList.remove('active');
                    if (navItem.getAttribute('href').substring(1) === entry.target.id) {
                        navItem.classList.add('active');
                    }
                });
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});

// Initialize EmailJS with your public key
(function() {
    emailjs.init('cuE1rdG5Vm10kiSMe'); // Replace with your actual public key
})();

// Contact form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Show loading state
    const submitBtn = this.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.innerHTML = 'Sending...';
    
    // Get form values
    const formData = {
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    
    // Send email
    emailjs.send('service_nux5o4t', 'template_umodood', formData)
        .then(function(response) {
            alert('Message sent successfully!');
            document.getElementById('contact-form').reset();
        }, function(error) {
            alert('Failed to send message. Please try again later.');
            console.error('EmailJS error:', error);
        })
        .finally(() => {
            submitBtn.disabled = false;
            submitBtn.innerHTML = 'Send Message';
        });
});
document.querySelector('.outlined-btn').addEventListener('click', function(e) {
    e.preventDefault();
    const pdfUrl = this.getAttribute('href');
    const downloadName = this.getAttribute('download') || 'Sunikhil_Thakur_Resume.pdf';

    // Open PDF in a new tab
    const newTab = window.open(pdfUrl, '_blank');

    // After the tab loads, trigger download but DO NOT close the tab
    newTab.onload = function() {
        const script = newTab.document.createElement('script');
        script.text = `
            // Create a hidden download link
            var a = document.createElement('a');
            a.href = '${pdfUrl}';
            a.download = '${downloadName}';
            a.style.display = 'none';
            document.body.appendChild(a);
            a.click();  // Trigger download
            document.body.removeChild(a);  // Remove the link
        `;
        newTab.document.body.appendChild(script);
    };
});