// Weapons data
const weapons = [
    {
        id: 1,
        name: "M4A1",
        category: "assault",
        damage: 30,
        fireRate: 56,
        range: 77,
        reloadSpeed: 48,
        magazineSize: 30,
        description: "A versatile assault rifle with balanced stats. Perfect for medium-range combat.",
        image: "images/weapons/m4a1.png",
        featured: true
    },
    {
        id: 2,
        name: "AWM",
        category: "sniper",
        damage: 90,
        fireRate: 27,
        range: 91,
        reloadSpeed: 34,
        magazineSize: 5,
        description: "A powerful bolt-action sniper rifle. One shot, one kill.",
        image: "images/weapons/awm.png",
        featured: true
    },
    {
        id: 3,
        name: "MP40",
        category: "smg",
        damage: 24,
        fireRate: 83,
        range: 45,
        reloadSpeed: 62,
        magazineSize: 20,
        description: "High rate of fire SMG perfect for close combat.",
        image: "images/weapons/mp40.png",
        featured: true
    },
    {
        id: 4,
        name: "M1014",
        category: "shotgun",
        damage: 85,
        fireRate: 39,
        range: 35,
        reloadSpeed: 42,
        magazineSize: 8,
        description: "Devastating shotgun with high damage at close range.",
        image: "images/weapons/m1014.png",
        featured: true
    },
    {
        id: 5,
        name: "Desert Eagle",
        category: "pistol",
        damage: 54,
        fireRate: 47,
        range: 30,
        reloadSpeed: 41,
        magazineSize: 7,
        image: "images/weapons/desert-eagle.png",
        description: "A powerful semi-automatic pistol with high damage and good accuracy."
    }
];

// DOM Elements
const featuredWeaponsGrid = document.getElementById('featured-weapons');
const allWeaponsGrid = document.getElementById('all-weapons');
const searchInput = document.querySelector('.weapon-search');
const filterButtons = document.querySelectorAll('.filter-btn');

// Create weapon card
function createWeaponCard(weapon) {
    const card = document.createElement('div');
    card.className = 'weapon-card';
    card.innerHTML = `
        <div class="weapon-image">
            <img src="${weapon.image}" alt="${weapon.name}" onerror="handleMissingImage(this)">
        </div>
        <div class="weapon-info">
            <h3>${weapon.name}</h3>
            <p>${weapon.description}</p>
            <div class="weapon-stats">
                <div class="stat">
                    <span>Damage</span>
                    <div class="stat-bar">
                        <div class="stat-fill" style="width: ${weapon.damage}%"></div>
                    </div>
                </div>
                <div class="stat">
                    <span>Fire Rate</span>
                    <div class="stat-bar">
                        <div class="stat-fill" style="width: ${weapon.fireRate}%"></div>
                    </div>
                </div>
                <div class="stat">
                    <span>Range</span>
                    <div class="stat-bar">
                        <div class="stat-fill" style="width: ${weapon.range}%"></div>
                    </div>
                </div>
                <div class="stat">
                    <span>Reload Speed</span>
                    <div class="stat-bar">
                        <div class="stat-fill" style="width: ${weapon.reloadSpeed}%"></div>
                    </div>
                </div>
            </div>
        </div>
    `;
    return card;
}

// Display featured weapons
function displayFeaturedWeapons() {
    const featuredWeapons = weapons.filter(weapon => weapon.featured);
    featuredWeaponsGrid.innerHTML = '';
    featuredWeapons.forEach(weapon => {
        featuredWeaponsGrid.appendChild(createWeaponCard(weapon));
    });
}

// Filter weapons
function filterWeapons(category, searchTerm) {
    return weapons.filter(weapon => {
        const matchesCategory = category === 'all' || weapon.category === category;
        const matchesSearch = weapon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            weapon.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });
}

// Display all weapons
function displayAllWeapons(filteredWeapons) {
    allWeaponsGrid.innerHTML = '';
    filteredWeapons.forEach(weapon => {
        allWeaponsGrid.appendChild(createWeaponCard(weapon));
    });
}

// Handle missing images
function handleMissingImage(img) {
    img.src = 'images/weapons/default-weapon.png';
    img.onerror = null;
}

// Event Listeners
searchInput.addEventListener('input', (e) => {
    const activeCategory = document.querySelector('.filter-btn.active').dataset.category;
    const filteredWeapons = filterWeapons(activeCategory, e.target.value);
    displayAllWeapons(filteredWeapons);
});

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        const filteredWeapons = filterWeapons(button.dataset.category, searchInput.value);
        displayAllWeapons(filteredWeapons);
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    displayFeaturedWeapons();
    displayAllWeapons(weapons);
    handleMissingImages();
}); 