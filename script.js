
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

    // Format WhatsApp message using \n for new lines
    const whatsappMessage = 
        `New Consultation Request:\n\n` +
        `*Name:* ${name}\n` +
        `*Email:* ${email}\n` +
        `*Phone:* ${phone || 'Not provided'}\n` +
        `*Service Interested In:* ${service || 'Not specified'}\n\n` +
        `*Message:*\n${message}`;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Replace with your WhatsApp number
    const whatsappNumber = "254703666785";
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open in new window
    window.open(whatsappUrl, '_blank');
}


// Function to render blog posts
function renderBlogPosts(posts) {
    const blogContainer = document.getElementById('blog-posts');
    posts.forEach(post => {
        const article = document.createElement('article');
        article.classList.add('blog-card');
        if (post.featured) {
            article.classList.add('featured');
        }

        article.innerHTML = `
            <div class="card-image">
                <img src="${post.image}" alt="${post.title}">
                <div class="category-label">${post.category}</div>
            </div>
            <div class="card-content">
                <div class="meta-info">
                    <span class="date"><i class="far fa-calendar"></i> ${post.date}</span>
                    <span class="author"><i class="far fa-user"></i> ${post.author}</span>
                </div>
                <h3>${post.title}</h3>
                <p>${post.summary}</p>
                <a href="${post.link}" class="read-more">Read More <i class="fas fa-arrow-right"></i></a>
            </div>
        `;
        blogContainer.appendChild(article);
    });
}

// Render blog posts on page load
renderBlogPosts(blogPosts);