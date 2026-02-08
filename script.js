// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    // Create falling rocks
    createFallingRocks();
    
    // Setup page navigation
    setupNavigation();
});

// Create falling rocks animation
function createFallingRocks() {
    const container = document.getElementById('fallingRocks');
    const numberOfRocks = 15;
    
    for (let i = 0; i < numberOfRocks; i++) {
        const rock = document.createElement('div');
        rock.className = 'rock';
        
        // Random size
        const size = Math.random() * 30 + 10;
        rock.style.width = size + 'px';
        rock.style.height = size + 'px';
        
        // Random horizontal position
        rock.style.left = Math.random() * 100 + '%';
        
        // Random animation duration
        const duration = Math.random() * 5 + 5;
        rock.style.animationDuration = duration + 's';
        
        // Random delay
        const delay = Math.random() * 5;
        rock.style.animationDelay = delay + 's';
        
        container.appendChild(rock);
    }
}

// Setup page navigation
function setupNavigation() {
    // Menu items navigation
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            const targetPage = this.getAttribute('data-page');
            navigateToPage(targetPage);
        });
    });
    
    // Back buttons navigation
    const backButtons = document.querySelectorAll('.back-button');
    backButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetPage = this.getAttribute('data-page');
            navigateToPage(targetPage);
        });
    });
}

// Navigate to a specific page
function navigateToPage(pageName) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });
    
    // Show target page
    const targetPage = document.getElementById(pageName);
    if (targetPage) {
        targetPage.classList.add('active');
    }
}
