
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