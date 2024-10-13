// Select all FAQ questions
const faqQuestions = document.querySelectorAll('.faq-question');

// Add event listener to each question
faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        // Toggle the answer display
        const answer = question.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});
