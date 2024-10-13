const faqBlocksUnique = document.querySelectorAll('.faq-title-unique');

faqBlocksUnique.forEach(block => {
    block.addEventListener('click', () => {
        const content = block.nextElementSibling;

        // Toggle the answer visibility
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    });
});
