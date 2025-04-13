// Theme Toggle Functionality
function initThemeToggle() {
    // Check for saved theme preference or use the default
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    // Get all theme toggle buttons (both floating and in navigation)
    const themeToggles = document.querySelectorAll('.theme-toggle');
    
    if (themeToggles.length > 0) {
        // Update icons based on current theme
        themeToggles.forEach(toggle => {
            toggle.innerHTML = savedTheme === 'light' ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
            
            // Add click event listener to each toggle button
            toggle.addEventListener('click', () => {
                const currentTheme = document.documentElement.getAttribute('data-theme');
                const newTheme = currentTheme === 'light' ? 'dark' : 'light';
                
                // Update theme
                document.documentElement.setAttribute('data-theme', newTheme);
                localStorage.setItem('theme', newTheme);
                
                // Update all toggle icons
                document.querySelectorAll('.theme-toggle').forEach(btn => {
                    btn.innerHTML = newTheme === 'light' ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
                });
            });
        });
    }
}

// Function to handle missing images
function handleMissingImages() {
    const images = document.querySelectorAll('img');
    const fallbackPaths = [
        'img of png/placeholder.png',
        'edited new png/placeholder.png',
        'images/placeholder.png',
        'assets/placeholder.png',
        'img/placeholder.png',
        'https://via.placeholder.com/300x300?text=Image+Not+Found'
    ];
    
    images.forEach(img => {
        // Store the original source for potential retry
        const originalSrc = img.src;
        
        img.onerror = function() {
            console.log(`Image failed to load: ${originalSrc}`);
            
            // Try each fallback path in order
            let fallbackUsed = false;
            
            for (const path of fallbackPaths) {
                if (fallbackUsed) break;
                
                // For local paths, check if they exist
                if (!path.startsWith('http')) {
                    // Try to load the image
                    const testImg = new Image();
                    testImg.onload = () => {
                        this.src = path;
                        this.alt = 'Image not found';
                        fallbackUsed = true;
                        console.log(`Using fallback: ${path}`);
                    };
                    testImg.onerror = () => {
                        console.log(`Fallback not found: ${path}`);
                    };
                    testImg.src = path;
                } else {
                    // For remote URLs, use directly
                    this.src = path;
                    this.alt = 'Image not found';
                    fallbackUsed = true;
                    console.log(`Using remote fallback: ${path}`);
                }
            }
            
            // If no fallback worked, use a data URI for a simple placeholder
            if (!fallbackUsed) {
                this.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22300%22%20height%3D%22300%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20300%20300%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18a5c1c5c5c%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3A-apple-system%2CBlinkMacSystemFont%2C%26quot%3BSegoe%20UI%26quot%3B%2CRoboto%2C%26quot%3BHelvetica%20Neue%26quot%3B%2CArial%2C%26quot%3BNoto%20Sans%26quot%3B%2Csans-serif%2C%26quot%3BApple%20Color%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%26quot%3BNoto%20Color%20Emoji%26quot%3B%2Cmonospace%2C%26quot%3BSegoe%20UI%20Mono%26quot%3B%2C%26quot%3BRoboto%20Mono%26quot%3B%2C%26quot%3BMonaco%26quot%3B%2C%26quot%3BCourier%20New%26quot%3B%2Cmonospace%3Bfont-size%3A15em%20%7D%20%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18a5c1c5c5c%22%3E%3Crect%20width%3D%22300%22%20height%3D%22300%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22106.5%22%20y%3D%22158.5%22%3EImage%20Not%20Found%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E';
                this.alt = 'Image not found';
                console.log('Using data URI fallback');
            }
        };
    });
}

// Function to display random characters and pets on the home page
function displayRandomCharactersAndPets() {
    // Check if we're on the home page
    if (!document.getElementById('home-characters-container') || !document.getElementById('home-pets-container')) {
        return;
    }
    
    // Get random characters
    const randomCharacters = getRandomItems(allCharacters, 3);
    
    // Get random pets
    const randomPets = getRandomItems(allPets, 3);
    
    // Display random characters
    const charactersContainer = document.getElementById('home-characters-container');
    charactersContainer.innerHTML = '';
    
    randomCharacters.forEach(character => {
        const card = document.createElement('div');
        card.className = 'character-card';
        
        // Encode the image path to handle spaces in filenames
        const encodedImagePath = encodeURI(character.image);
        
        card.innerHTML = `
            <div class="card-content">
                <img src="${encodedImagePath}" alt="${character.name}" class="character-image">
                <h3>${character.name}</h3>
                <p class="ability">${character.ability}</p>
                <p>${character.description}</p>
            </div>
        `;
        
        // Add click handler to open character detail page
        card.addEventListener('click', () => {
            // Create a URL-friendly ID from the character name
            const characterId = character.name.toLowerCase().replace(/\s+/g, '-');
            window.location.href = `character-detail.html?id=${characterId}`;
        });
        
        // Add cursor pointer to indicate clickable
        card.style.cursor = 'pointer';
        
        charactersContainer.appendChild(card);
    });
    
    // Display random pets
    const petsContainer = document.getElementById('home-pets-container');
    petsContainer.innerHTML = '';
    
    randomPets.forEach(pet => {
        const card = document.createElement('div');
        card.className = 'pet-card';
        
        // Encode the image path to handle spaces in filenames
        const encodedImagePath = encodeURI(pet.image);
        
        card.innerHTML = `
            <div class="card-content">
                <img src="${encodedImagePath}" alt="${pet.name}" class="pet-image">
                <h3>${pet.name}</h3>
                <p class="ability">${pet.ability}</p>
                <p>${pet.description}</p>
            </div>
        `;
        
        // Add click handler to open pet detail page
        card.addEventListener('click', () => {
            // Create a URL-friendly ID from the pet name
            const petId = pet.name.toLowerCase().replace(/\s+/g, '-');
            window.location.href = `pet-detail.html?id=${petId}`;
        });
        
        // Add cursor pointer to indicate clickable
        card.style.cursor = 'pointer';
        
        petsContainer.appendChild(card);
    });
}

// Helper function to get random items from an array
function getRandomItems(array, count) {
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Add scroll-based animations
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.tip-card, .character-card, .weapon-card, .pet-card');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.classList.add('visible');
        }
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Image Protection
document.addEventListener('contextmenu', function(e) {
    if (e.target.tagName === 'IMG' && !e.target.classList.contains('header-logo') && !e.target.classList.contains('transition-image')) {
        e.preventDefault();
        alert('Image downloading is not allowed on this website.');
    }
});

document.addEventListener('keydown', function(e) {
    // Prevent Ctrl+S, Ctrl+Shift+S, Ctrl+P
    if ((e.ctrlKey || e.metaKey) && (e.key === 's' || e.key === 'p')) {
        e.preventDefault();
    }
});

// Prevent drag and drop
document.addEventListener('dragstart', function(e) {
    if (e.target.tagName === 'IMG' && !e.target.classList.contains('header-logo') && !e.target.classList.contains('transition-image')) {
        e.preventDefault();
    }
});

// Add watermark overlay to images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img:not(.header-logo):not(.transition-image)');
    images.forEach(img => {
        // Skip if the image is inside a logo container
        if (img.closest('.logo')) {
            return;
        }
        const container = document.createElement('div');
        container.className = 'image-container';
        img.parentNode.insertBefore(container, img);
        container.appendChild(img);
    });
});

// Header scroll behavior
let lastScroll = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > lastScroll) {
        // Scrolling down
        header.classList.add('hide');
    } else {
        // Scrolling up
        header.classList.remove('hide');
    }
    
    lastScroll = currentScroll;
});

// Mobile menu functionality
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileNav = document.querySelector('.mobile-nav');

mobileMenuBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!mobileMenuBtn.contains(e.target) && !mobileNav.contains(e.target)) {
        mobileNav.classList.remove('active');
    }
});

// Close mobile menu when clicking a link
const mobileLinks = document.querySelectorAll('.mobile-nav a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileNav.classList.remove('active');
    });
});

// Initialize the website
document.addEventListener('DOMContentLoaded', () => {
    // Add scroll event listener for animations
    window.addEventListener('scroll', handleScrollAnimations);
    
    // Initial check for elements in view
    handleScrollAnimations();
    
    // Initialize theme toggle
    initThemeToggle();
    
    // Handle missing images
    handleMissingImages();
    
    // Display random characters and pets on the home page
    displayRandomCharactersAndPets();
}); 