// All Free Fire pets data
const allPets = [
    {
        name: 'Ottero',
        ability: 'Double Blubber',
        description: 'Restores EP when using healing items',
        image: 'edited new img/Ottero.jpg',
        abilityDescription: 'When using Heal Pistol or Med Kit, the receiver will also recover some EP. Amount of EP recovered is 65% of HP recovered.',
        cooldown: 'N/A',
        duration: 'N/A',
        usageTips: 'Ottero\'s Double Blubber ability is passive and activates automatically when using healing items. This makes healing more effective by also restoring EP, allowing you to use character abilities more frequently.'
    },
    {
        name: 'Night Panther',
        ability: 'Panther\'s Blessing',
        description: 'Increases inventory space',
        image: 'edited new img/Night Panther.jpg',
        abilityDescription: 'Increase 45 inventory space.',
        cooldown: 'N/A',
        duration: 'N/A',
        usageTips: 'Night Panther\'s ability is passive and activates automatically. This allows you to carry more items, giving you an advantage in longer matches.'
    },
    {
        name: 'Detective Panda',
        ability: 'Panda\'s Blessing',
        description: 'Restores HP upon eliminating an opponent',
        image: 'edited new img/Detective Panda.jpg',
        abilityDescription: 'Restores 10 HP upon eliminating an opponent.',
        cooldown: 'N/A',
        duration: 'N/A',
        usageTips: 'Detective Panda\'s ability is passive and activates automatically when you eliminate an opponent. This helps you maintain your HP during intense firefights.'
    },
    {
        name: 'Shiba',
        ability: 'Mushroom Kingdom',
        description: 'Marks mushrooms on the map',
        image: 'edited new img/Shiba.jpg',
        abilityDescription: 'Mark 1 of the surrounding mushrooms on the map every 120s. The mark lasts for 30s.',
        cooldown: '120s',
        duration: '30s',
        usageTips: 'Shiba\'s Mushroom Kingdom ability is passive and activates automatically. This helps you find mushrooms on the map, which can be used to restore EP.'
    },
    {
        name: 'Robo',
        ability: 'Iron Will',
        description: 'Adds a shield to the Gloo Wall',
        image: 'edited new img/Robo.png',
        abilityDescription: 'Adds a shield to the Gloo Wall, providing additional 100 HP.',
        cooldown: 'N/A',
        duration: 'N/A',
        usageTips: 'Robo\'s Iron Will ability is passive and activates automatically when you deploy a Gloo Wall. This makes your Gloo Walls more durable, giving you better protection in combat.'
    },
    {
        name: 'Falco',
        ability: 'Skyward Spiral',
        description: 'Disables enemy auto-aim while parachuting',
        image: 'edited new img/Falco.jpg',
        abilityDescription: 'Disables enemy auto-aim while the owner is parachuting.',
        cooldown: 'N/A',
        duration: 'N/A',
        usageTips: 'Falco\'s Skyward Spiral ability is passive and activates automatically while parachuting. This makes it harder for enemies to hit you while you\'re landing, giving you a better chance of survival.'
    },
    {
        name: 'Mr.Waggor',
        ability: 'Smooth Gloo',
        description: 'Provides Gloo Walls and Gloo Maker EXP',
        image: 'edited new img/Mr.Waggor.jpg',
        abilityDescription: 'When the owner has less than 2 Gloo Walls, Mr. Waggor gives 1 Gloo Wall(s) every 100s. He also gives 200 Gloo Maker EXP in the first 200s of a match.',
        cooldown: '100s',
        duration: 'N/A',
        usageTips: 'Mr.Waggor\'s Smooth Gloo ability is passive and activates automatically. This helps you maintain a supply of Gloo Walls and gain Gloo Maker EXP, which can be used to upgrade your Gloo Walls.'
    },
    {
        name: 'Rockie',
        ability: 'Staying Alive',
        description: 'Reduces cooldown time for active skills',
        image: 'edited new img/Rockie.jpg',
        abilityDescription: '15% less cooldown time for equipped active skill.',
        cooldown: 'N/A',
        duration: 'N/A',
        usageTips: 'Rockie\'s Staying Alive ability is passive and activates automatically. This allows you to use your character\'s active ability more frequently, giving you an advantage in combat.'
    },
    {
        name: 'Beaston',
        ability: 'Helping Hand',
        description: 'Increases throwing distance of throwables',
        image: 'edited new img/Beaston.jpg',
        abilityDescription: 'Increases the throwing distance of throwables by 30%.',
        cooldown: 'N/A',
        duration: 'N/A',
        usageTips: 'Beaston\'s Helping Hand ability is passive and activates automatically. This allows you to throw grenades and other throwables further, giving you an advantage in combat.'
    },
    {
        name: 'Dreki',
        ability: 'Dragon Glare',
        description: 'Spots opponents using Med Kits',
        image: 'edited new img/Dreki.jpg',
        abilityDescription: 'Owner is able to spot 4 opponents who are using Med Kits within a 30m range. Marking lasts for 5s. Results are shared with teammates.',
        cooldown: 'N/A',
        duration: '5s',
        usageTips: 'Dreki\'s Dragon Glare ability is passive and activates automatically when enemies use Med Kits. This helps you locate and eliminate vulnerable enemies.'
    },
    {
        name: 'Moony',
        ability: 'Moonlight',
        description: 'Reduces damage during interaction countdown',
        image: 'edited new img/Moony.jpg',
        abilityDescription: '35% damage reduction when owner is in interaction countdown (e.g. using Med Kit, eating mushroom, etc).',
        cooldown: 'N/A',
        duration: 'N/A',
        usageTips: 'Moony\'s Moonlight ability is passive and activates automatically during interaction countdown. This makes you more durable when using healing items or other interactive items.'
    },
    {
        name: 'Dr. Beanie',
        ability: 'Well Fed',
        description: 'Increases movement speed when crouching',
        image: 'edited new img/Dr.Beanie.jpg',
        abilityDescription: 'When in crouch position, movement speed increases by 60%.',
        cooldown: 'N/A',
        duration: 'N/A',
        usageTips: 'Dr. Beanie\'s Well Fed ability is passive and activates automatically when crouching. This allows you to move faster while maintaining a low profile, making it harder for enemies to spot you.'
    },
    {
        name: 'Agent Hop',
        ability: 'Bouncing Bonus',
        description: 'Gains EP when Safe Zone shrinks',
        image: 'edited new img/Agent Hop.jpg',
        abilityDescription: 'Owner gains 50 EP every time the Safe Zone shrinks.',
        cooldown: 'N/A',
        duration: 'N/A',
        usageTips: 'Agent Hop\'s Bouncing Bonus ability is passive and activates automatically when the Safe Zone shrinks. This helps you maintain your EP throughout the match, allowing you to use character abilities more frequently.'
    },
    {
        name: 'Yeti',
        ability: 'Frozen',
        description: 'Reduces damage from explosives',
        image: 'edited new img/Yeti.jpg',
        abilityDescription: 'Reduces 30% damage taken from explosives every 90s.',
        cooldown: '90s',
        duration: 'N/A',
        usageTips: 'Yeti\'s Frozen ability is passive and activates automatically. This makes you more durable against grenades and other explosive weapons, giving you a better chance of survival in explosive-heavy combat situations.'
    },
    {
        name: 'Flash',
        ability: 'Lightning',
        description: 'Reduces damage taken from behind',
        image: 'edited new img/Flash.jpg',
        abilityDescription: 'Reduces damage (from FF Knife and bullets) taken from behind by 25%, up to 150 durability points. Cooldown: 90s.',
        cooldown: '90s',
        duration: 'N/A',
        usageTips: 'Flash\'s Lightning ability is passive and activates automatically. This makes you more durable against attacks from behind, giving you a better chance of survival when caught off guard.'
    },
    {
        name: 'Avron',
        ability: 'Dragon Glide',
        description: 'Detects enemies in an area',
        image: 'edited new img/Avron.jpg',
        abilityDescription: 'Detect the number of enemies in an area of 50m radius for 6s, regardless of enemy position. Results are shared with teammates. Max. 3 uses per match.',
        cooldown: 'N/A',
        duration: '6s',
        usageTips: 'Avron\'s Dragon Glide ability is active and can be used up to 3 times per match. This helps you locate enemies in your vicinity, giving you a tactical advantage in combat.'
    },
    {
        name: 'Zasil',
        ability: 'Berserk',
        description: 'Provides additional healing items',
        image: 'edited new img/Zasil.jpg',
        abilityDescription: '50% chance of providing an additional Inhaler/Med Kit/Repair Kit every time owner consumes one. Cooldown: 70s.',
        cooldown: '70s',
        duration: 'N/A',
        usageTips: 'Zasil\'s Berserk ability is passive and activates automatically when using healing items. This helps you maintain a supply of healing items, giving you a better chance of survival in intense firefights.'
    },
    {
        name: 'Finn',
        ability: 'Bulletproof',
        description: 'Increases movement speed when teammates are knocked down',
        image: 'edited new img/Finn.jpg',
        abilityDescription: 'When a player within 20m is knocked down or eliminated, owner and teammates will get a 4% movement speed boost. Lasts for 5s. Cooldown: 90s.',
        cooldown: '90s',
        duration: '5s',
        usageTips: 'Finn\'s Bulletproof ability is passive and activates automatically when teammates are knocked down or eliminated. This helps you move faster to assist your teammates or escape dangerous situations.'
    },
    {
        name: 'Hoot',
        ability: 'Owl Eye',
        description: 'Increases scanning distance and duration',
        image: 'edited new img/Hoot.jpg',
        abilityDescription: 'Adds 10m distance and 3s duration to owner\'s scanning items or skills. Results are shared with teammates and no skill cooldown is required.',
        cooldown: 'N/A',
        duration: 'N/A',
        usageTips: 'Hoot\'s Owl Eye ability is passive and activates automatically. This enhances your scanning abilities, allowing you to detect enemies from further away and for a longer duration.'
    },
    {
        name: 'Kactus',
        ability: 'Spiky',
        description: 'Restores EP when staying still',
        image: 'edited new img/Kactus.jpg',
        abilityDescription: 'Owner will restore 10 EP/s when staying still for 6s. Restoration stops once owner reaches 100 EP or moves/jumps.',
        cooldown: 'N/A',
        duration: 'N/A',
        usageTips: 'Kactus\'s Spiky ability is passive and activates automatically when staying still. This helps you recover EP without using mushrooms or other EP-restoring items, allowing you to use character abilities more frequently.'
    },
    {
        name: 'Fang',
        ability: 'Wolf Pack',
        description: 'Gains EP or HP when teammates are knocked down',
        image: 'edited new img/Fang.jpg',
        abilityDescription: 'Whenever a teammate is knocked down by an enemy, owner will receive 30 EP if HP is full or 15 HP if HP is not full. Does not exceed HP/EP limit. Cooldown: 25s.',
        cooldown: '25s',
        duration: 'N/A',
        usageTips: 'Fang\'s Wolf Pack ability is passive and activates automatically when teammates are knocked down. This helps you maintain your HP and EP during intense firefights, giving you a better chance of survival.'
    }
];

// Function to create pet cards
function createPetCards(pets = allPets) {
    const petsGrid = document.querySelector('.pets-grid');
    petsGrid.innerHTML = ''; // Clear existing content
    
    pets.forEach(pet => {
        const card = document.createElement('div');
        card.className = 'pet-card';
        
        // Encode the image path to handle spaces in filenames
        const encodedImagePath = encodeURI(pet.image);
        
        card.innerHTML = `
            <div class="card-content">
                <img src="${encodedImagePath}" alt="${pet.name}" class="pet-image" onerror="this.src='images/placeholder.png'; this.alt='Image not found';">
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
        
        petsGrid.appendChild(card);
    });
}

// Function to search pets
function searchPets(query) {
    if (!query) {
        createPetCards();
        return;
    }
    
    const searchResults = allPets.filter(pet => 
        pet.name.toLowerCase().includes(query.toLowerCase()) ||
        pet.ability.toLowerCase().includes(query.toLowerCase()) ||
        pet.description.toLowerCase().includes(query.toLowerCase())
    );
    
    createPetCards(searchResults);
}

// Initialize the pets page
document.addEventListener('DOMContentLoaded', () => {
    console.log('Pets.js loaded');
    
    // Create all pet cards
    createPetCards();
    
    // Add event listener for search input
    const searchInput = document.getElementById('petSearch');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchPets(e.target.value);
        });
    }
    
    // Add scroll-based animations
    window.addEventListener('scroll', handleScrollAnimations);
    
    // Initial check for elements in view
    handleScrollAnimations();
});

// Add scroll-based animations
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.pet-card');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.classList.add('visible');
        }
    });
} 