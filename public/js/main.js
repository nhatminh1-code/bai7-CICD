// Display current timestamp
document.addEventListener('DOMContentLoaded', function() {
    const timestampElement = document.getElementById('timestamp');
    if (timestampElement) {
        const now = new Date();
        const options = { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            timeZoneName: 'short'
        };
        timestampElement.textContent = now.toLocaleDateString('vi-VN', options);
    }
    
    // Add animation to cards
    const cards = document.querySelectorAll('.info-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100 * (index + 1));
    });
    
    // Console log for debugging
    console.log('🚀 CI/CD Demo Website loaded successfully!');
    console.log('📅 Deployed at:', new Date().toISOString());
});