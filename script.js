document.addEventListener('DOMContentLoaded', function() {
    const nameInput = document.getElementById('nameInput');
    const submitBtn = document.getElementById('submitBtn');
    const greeting = document.getElementById('greeting');
    const inputContainer = document.querySelector('.input-container');
    
    // Clear localStorage on page load to always start fresh
    localStorage.removeItem('userName');
    
    // Always show input form on page load
    greeting.classList.add('hidden');
    inputContainer.classList.remove('hidden');
    
    // Focus effect for input
    nameInput.addEventListener('focus', function() {
        this.classList.add('focused');
    });
    
    // Function to update greeting
    function updateGreeting() {
        const name = nameInput.value.trim();
        if (name) {
            greeting.textContent = `Hello ${name}`;
            
            // Hide input container and show greeting
            inputContainer.classList.add('hidden');
            greeting.classList.remove('hidden');
        }
    }
    
    // Event listeners
    submitBtn.addEventListener('click', updateGreeting);
    
    nameInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            updateGreeting();
        }
    });
});
