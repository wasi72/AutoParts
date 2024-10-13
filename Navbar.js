// Get the modal elements
const catalogModal = document.getElementById('catalogModal');
const automobilePartsModal = document.getElementById('automobilePartsModal');
const performancePartsModal = document.getElementById('performancePartsModal');
const bodyPartsModal = document.getElementById('bodyPartsModal');
const electronicsModal = document.getElementById('electronicsModal');

// Get the overlay element
const modalOverlay = document.getElementById('modalOverlay');

// Get the buttons and links
const closeModal = document.getElementById('closeModal');
const automobilePartsBtn = document.getElementById('automobilePartsBtn');
const performancePartsBtn = document.getElementById('performancePartsBtn');
const bodyPartsBtn = document.getElementById('bodyPartsBtn');
const electronicsBtn = document.getElementById('electronicsBtn');

const backToMainModalAutomobile = document.getElementById('backToMainModalAutomobile');
const backToMainModalPerformance = document.getElementById('backToMainModalPerformance');
const backToMainModalBody = document.getElementById('backToMainModalBody');
const backToMainModalElectronics = document.getElementById('backToMainModalElectronics');

const catalogLink = document.getElementById('catalogLink');

// Open the main modal when clicking "Catalog"
catalogLink.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default link behavior
    catalogModal.classList.add('modal-active'); // Slide in main catalog modal
    modalOverlay.style.visibility = 'visible'; // Show overlay
    modalOverlay.style.opacity = '1'; // Fade in overlay
});

// Close the main modal when clicking the close button
closeModal.addEventListener('click', function() {
    closeAllModals(); // Close all modals and overlay
});

// Open the Automobile Parts submenu modal
automobilePartsBtn.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default link behavior
    catalogModal.classList.remove('modal-active'); // Hide the main catalog modal
    automobilePartsModal.classList.add('modal-active'); // Slide in Automobile Parts modal
});

// Open the Performance Parts submenu modal
performancePartsBtn.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default link behavior
    catalogModal.classList.remove('modal-active'); // Hide the main catalog modal
    performancePartsModal.classList.add('modal-active'); // Slide in Performance Parts modal
});

// Open the Body Parts submenu modal
bodyPartsBtn.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default link behavior
    catalogModal.classList.remove('modal-active'); // Hide the main catalog modal
    bodyPartsModal.classList.add('modal-active'); // Slide in Body Parts modal
});

// Open the Electronics submenu modal
electronicsBtn.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default link behavior
    catalogModal.classList.remove('modal-active'); // Hide the main catalog modal
    electronicsModal.classList.add('modal-active'); // Slide in Electronics modal
});

// Go back to the main catalog modal from Automobile Parts
backToMainModalAutomobile.addEventListener('click', function() {
    automobilePartsModal.classList.remove('modal-active'); // Hide Automobile Parts modal
    catalogModal.classList.add('modal-active'); // Slide back in main catalog modal
});

// Go back to the main catalog modal from Performance Parts
backToMainModalPerformance.addEventListener('click', function() {
    performancePartsModal.classList.remove('modal-active'); // Hide Performance Parts modal
    catalogModal.classList.add('modal-active'); // Slide back in main catalog modal
});

// Go back to the main catalog modal from Body Parts
backToMainModalBody.addEventListener('click', function() {
    bodyPartsModal.classList.remove('modal-active'); // Hide Body Parts modal
    catalogModal.classList.add('modal-active'); // Slide back in main catalog modal
});

// Go back to the main catalog modal from Electronics
backToMainModalElectronics.addEventListener('click', function() {
    electronicsModal.classList.remove('modal-active'); // Hide Electronics modal
    catalogModal.classList.add('modal-active'); // Slide back in main catalog modal
});

// Function to close all modals and the overlay
function closeAllModals() {
    catalogModal.classList.remove('modal-active'); // Slide out main catalog modal
    automobilePartsModal.classList.remove('modal-active'); // Ensure submenu modals are hidden
    performancePartsModal.classList.remove('modal-active');
    bodyPartsModal.classList.remove('modal-active');
    electronicsModal.classList.remove('modal-active');
    modalOverlay.style.visibility = 'hidden'; // Hide overlay
    modalOverlay.style.opacity = '0'; // Fade out overlay
}

// Optional: Close modal when clicking outside the modal content
window.addEventListener('click', function(e) {
    if (e.target === catalogModal || e.target === automobilePartsModal || e.target === performancePartsModal || e.target === bodyPartsModal || e.target === electronicsModal) {
        closeAllModals();
    }
});
// Close the submenu modal when clicking the close button
const closeModalBtns = document.querySelectorAll('.close-btn');
closeModalBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        closeAllModals(); // Close all modals and overlay
    });
});




const modalSlide = document.querySelector('.modal-slide');
let isDragging = false;
let startY;
let initialTop;

modalSlide.addEventListener('mousedown', (e) => {
    isDragging = true;
    startY = e.clientY;
    initialTop = modalSlide.getBoundingClientRect().top;
    modalSlide.style.transition = 'none'; // Disable transition during drag
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    const deltaY = e.clientY - startY;
    modalSlide.style.top = `${initialTop + deltaY}px`;
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    modalSlide.style.transition = ''; // Re-enable transition
});
