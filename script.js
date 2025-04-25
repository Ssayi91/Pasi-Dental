
document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    mobileMenu.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        mobileMenu.classList.toggle('active');
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Blog Editor
    const editBtns = document.querySelectorAll('.edit-btn');
    const editorModal = document.querySelector('.editor-modal');
    
    editBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const postContent = btn.closest('.post').querySelector('p').innerHTML;
            editorModal.querySelector('textarea').value = postContent;
            editorModal.style.display = 'block';
        });
    });

    // Close Modal
    window.addEventListener('click', (e) => {
        if(e.target === editorModal) {
            editorModal.style.display = 'none';
        }
    });
});

// whatsapp contact section
function sendWhatsAppMessage(event) {
    event.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const service = document.getElementById('service').options[document.getElementById('service').selectedIndex].text;
    const message = document.getElementById('message').value;

    // Format WhatsApp message
    const whatsappMessage = 
        `New Consultation Request:%0A%0A
        *Name:* ${name}%0A
        *Email:* ${email}%0A
        *Phone:* ${phone || 'Not provided'}%0A
        *Service Interested In:* ${service || 'Not specified'}%0A%0A
        *Message:*%0A${message}`;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Replace with your WhatsApp number
    const whatsappNumber = "254703666785";
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open in new window
    window.open(whatsappUrl, '_blank');
}