// Parallax Effect
window.addEventListener('load', function () {
    const parallaxEl = document.querySelector('.parallax-bg');
    if (parallaxEl) {
        window.addEventListener('scroll', function () {
            let scrollPosition = window.pageYOffset;
            parallaxEl.style.transform = `translateY(${scrollPosition * 0.5}px)`;
        });
    }
});

// Modal Logic
document.addEventListener('DOMContentLoaded', function () {
    const originalGetElementById = document.getElementById;
    document.getElementById = function (id) {
        const element = originalGetElementById.call(document, id);
        if (!element && id === 'typing-text') {
            const dummy = document.createElement('span');
            dummy.style.display = 'none';
            dummy.textContent = '';
            return dummy;
        }
        return element;
    };

    const projectImages = document.querySelectorAll('.project-image');
    const imageModal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalSubtitle = document.getElementById('modalSubtitle');
    const closeModalBtn = document.getElementById('closeModal');

    projectImages.forEach(function (image) {
        image.addEventListener('click', function () {
            const imgSrc = this.getAttribute('data-image');
            const imgTitle = this.getAttribute('data-title') || '';
            const imgSubtitle = this.getAttribute('data-subtitle') || '';

            if (modalImage) modalImage.src = imgSrc;
            if (modalTitle) modalTitle.textContent = imgTitle;
            if (modalSubtitle) modalSubtitle.textContent = imgSubtitle;
            openModal();
        });
    });

    function openModal() {
        if (imageModal) {
            imageModal.classList.remove('modal-hidden');
            document.body.classList.add('no-scroll');
        }
    }

    function closeModal() {
        if (imageModal) {
            imageModal.classList.add('modal-hidden');
            document.body.classList.remove('no-scroll');
        }
    }

    if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
    if (imageModal) imageModal.addEventListener('click', function (e) { if (e.target === this) closeModal(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeModal(); });
});
