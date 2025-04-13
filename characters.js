// All Free Fire characters data
const allCharacters = [
    {
        name: 'Tatsuya',
        ability: 'Dash',
        description: 'Dashes forward at a rapid speed',
        image: 'edited new img/Tatsuya.jpg',
        type: 'active',
        abilityDescription: 'Dashes forward at a rapid speed for 0.3 sec. This skill can be accumulated for up to 2 uses, with a 5s cooldown between each use. Dash replenish time: 60s.',
        cooldown: '60s',
        duration: '0.3s',
        usageTips: 'Use Dash to quickly close the distance to enemies or escape dangerous situations. The ability can be used twice in succession, making it effective for both aggressive and defensive playstyles. The short duration of 0.3 seconds means you need to be precise with your timing.'
    },
    {
        name: 'Chrono',
        ability: 'Time Turner',
        description: 'Creates a force field that blocks damage and allows movement',
        image: 'edited new img/Chrono.jpg',
        type: 'active',
        abilityDescription: 'Creates an impenetrable force field that blocks 800 DMG. Unable to attack outside enemies from within the field. All effects last for 8s.',
        cooldown: '75s',
        duration: '8s',
        usageTips: 'Use Time Turner when you need to revive a teammate or when you\'re caught in the open. The force field will protect you from enemy fire while you move to safety.'
    },
    {
        name: 'Alok',
        ability: 'Drop the Beat',
        description: 'Creates a healing aura that restores HP and increases movement speed',
        image: 'edited new img/Alok.jpg',
        type: 'active',
        abilityDescription: 'Creates a healing aura that restores HP and increases movement speed for all players within the aura.',
        cooldown: '45s',
        duration: '10s',
        usageTips: 'Use Drop the Beat when your team is low on HP or when you need to quickly move to a new location. The healing aura will help keep your team alive during intense firefights.'
    },
    {
        name: 'Kelly',
        ability: 'Dash',
        description: 'Increases sprint speed and damage after sprinting',
        image: 'edited new img/Kelly.jpg',
        type: 'passive',
        abilityDescription: 'Sprint speed increases by 6%. After sprinting for 4s, damage of the first 1 shot landed increases to 106%.',
        cooldown: 'N/A',
        duration: 'N/A',
        usageTips: 'Kelly\'s Dash ability is passive and activates automatically. Use sprinting to increase your movement speed and prepare for combat, then take advantage of the increased damage on your first shot.'
    },
    {
        name: 'K',
        ability: 'Master of All',
        description: 'Increases max EP and converts EP to HP',
        image: 'edited new img/K.jpg',
        type: 'active',
        abilityDescription: 'Max. EP increases by 50. Jiu-jitsu Mode: Allies within 15m get 600% increase in EP conversion rate. Psychology Mode: Recover 3 EP every 15, up to 250 EP. Mode switch Cooldown: 65.',
        cooldown: '65s',
        duration: 'N/A',
        usageTips: 'Use Master of All when you need to heal but don\'t have healing items. The ability can be used multiple times in quick succession to restore a significant amount of HP.'
    },
    {
        name: 'Dimitri',
        ability: 'Healing Heartbeat',
        description: 'Creates a healing zone that restores HP',
        image: 'edited new img/Dimitri.jpg',
        type: 'active',
        abilityDescription: 'Creates a 3.5m-radius healing zone. Inside, user and allies recover 10 HP/s. Help up will be automatically triggered when needed. Zone lasts for 65. The effects of helping up teammates can be enhanced by other skills. Cooldown: 905.',
        cooldown: '90s',
        duration: '65s',
        usageTips: 'Use Healing Heartbeat when your team is low on HP or when you need to revive a teammate. The healing zone will help keep your team alive during intense firefights.'
    },
    {
        name: 'Jai',
        ability: 'Raging Reload',
        description: 'Automatically reloads weapon after knocking down an enemy or using an active skill',
        image: 'edited new img/Jai.jpg',
        type: 'passive',
        abilityDescription: 'After knocking down an enemy or using an active skill, 100% of the gun\'s magazine reloads automatically.',
        cooldown: 'N/A',
        duration: 'N/A',
        usageTips: 'Jai\'s Raging Reload ability is passive and activates automatically after knocking down an enemy or using an active skill. This allows you to focus on combat without worrying about manually reloading your weapons. The ability works with all weapon types, not just pistols and shotguns.'
    },
    {
        name: 'Wukong',
        ability: 'Camouflage',
        description: 'Transforms into a bush to hide from enemies',
        image: 'edited new img/Wukong.jpg',
        type: 'active',
        abilityDescription: 'Transforms into a bush for 15s. Cooldown: 90s. Attacking others or being attacked will return Wukong to his original state. CD resets when taking down an enemy.',
        cooldown: '90s',
        duration: '15s',
        usageTips: 'Use Camouflage when you need to hide from enemies or when you\'re in a dangerous situation. The bush form allows you to blend in with the environment and avoid detection.'
    },
    {
        name: 'A124',
        ability: 'Thrill of Battle',
        description: 'Converts EP to HP and increases movement speed',
        image: 'edited new img/A124.jpg',
        type: 'active',
        abilityDescription: 'Unleashes an electromagnetic wave with a diameter of 8m that disables enemies\' skill activation, inflicts 25 DMG, and interrupts their interaction countdown. Lasts for 20s. Cooldown: 755.',
        cooldown: '75s',
        duration: '20s',
        usageTips: 'Use Thrill of Battle when you need to heal but don\'t have healing items. The ability also provides a movement speed boost, making it useful for escaping dangerous situations.'
    },
    {
        name: 'Kla',
        ability: 'Muay Thai',
        description: 'Increases damage with fists and melee weapons',
        image: 'edited new img/Kla.jpg',
        type: 'passive',
        abilityDescription: 'Fist damage increases by 400%.',
        cooldown: 'N/A',
        duration: 'N/A',
        usageTips: 'Kla\'s Muay Thai ability is passive and activates automatically when using fists or melee weapons. This makes him extremely dangerous in close combat situations.'
    },
    {
        name: 'Kapella',
        ability: 'Healing Song',
        description: 'Increases healing effectiveness and provides healing over time',
        image: 'edited new img/Kapella.jpg',
        type: 'passive',
        abilityDescription: 'Heal teammates with ammo by 20% of the damage dealt. When using a Heal Pistol, increase healing effects by 20%.',
        cooldown: 'N/A',
        duration: 'N/A',
        usageTips: 'Kapella\'s Healing Song ability is passive and activates automatically. This makes her an excellent support character, as she can help keep her team alive with increased healing effectiveness and continuous HP regeneration.'
    },
    {
        name: 'Andrew',
        ability: 'Gluttony',
        description: 'Increases armor durability',
        image: 'edited new img/Andrew.jpg',
        type: 'passive',
        abilityDescription: 'Armor durability loss decreases by 40% and armor DMG reduction increases by 4%. Obtains a 1% DMG reduction bonus for each teammate present within 15m.',
        cooldown: 'N/A',
        duration: 'N/A',
        usageTips: 'Andrew\'s Gluttony ability is passive and activates automatically. This makes him more durable in combat, as his armor will last longer than other characters.'
    },
    {
        name: 'Caroline',
        ability: 'Agility',
        description: 'Increases movement speed while carrying a shotgun',
        image: 'edited new img/Caroline.jpg',
        type: 'passive',
        abilityDescription: 'When holding a shotgun, movement speed increases by 16%.',
        cooldown: 'N/A',
        duration: 'N/A',
        usageTips: 'Caroline\'s Agility ability is passive and activates automatically when carrying a shotgun. This makes her more mobile in combat, allowing her to quickly close the distance to enemies.'
    },
    {
        name: 'Clu',
        ability: 'Tracing Steps',
        description: 'Locates enemies within a certain range',
        image: 'edited new img/Clu.jpg',
        type: 'active',
        abilityDescription: 'Locate positions of enemies within 80m who are not in prone or squat position. Lasts for 10s. Enemy positions are shared with teammates. Cooldown: 455.',
        cooldown: '45s',
        duration: '10s',
        usageTips: 'Use Tracing Steps when you need to locate enemies or when you\'re unsure about your surroundings. The ability will reveal the location of all enemies within range to your entire team.'
    },
    {
        name: 'Ford',
        ability: 'Grit',
        description: 'Gains HP when taking damage',
        image: 'edited new img/Ford.jpg',
        type: 'passive',
        abilityDescription: 'Gain 10 HP/s for 4s when taking damage. After releasing an active skill, this passive skill will reset immediately. Cooldown: 20s.',
        cooldown: '20s',
        duration: '4s',
        usageTips: 'Ford\'s Grit ability is passive and activates automatically when taking damage. This helps you recover HP during combat, making you more durable.'
    },
    {
        name: 'Hayato',
        ability: 'Bushido',
        description: 'Increases armor penetration when HP is low',
        image: 'edited new img/Hayato.jpg',
        type: 'passive',
        abilityDescription: 'For every 10% HP lost, armor penetration increases by 3.5% and frontal DMG taken decreases by 2%.',
        cooldown: 'N/A',
        duration: 'N/A',
        usageTips: 'Hayato\'s Bushido ability is passive and activates automatically when HP is low. This makes him more effective in combat when he\'s at a disadvantage, as he can deal more damage to armored enemies.'
    },
    {
        name: 'Jota',
        ability: 'Sustained Raids',
        description: 'Restores HP when using SMGs',
        image: 'edited new img/Jota.jpg',
        type: 'passive',
        abilityDescription: 'When the skill user is using guns, hitting an enemy recovers some HP and knocking down an enemy recovers 20% HP.',
        cooldown: 'N/A',
        duration: 'N/A',
        usageTips: 'Jota\'s Sustained Raids ability is passive and activates automatically when hitting enemies with SMGs. This makes him more durable in combat, as he can restore HP while dealing damage.'
    },
    {
        name: 'Laura',
        ability: 'Sharp Shooter',
        description: 'Increases accuracy when scoped in',
        image: 'edited new img/Laura.png',
        type: 'passive',
        abilityDescription: 'Accuracy increases by 50% while scoped in.',
        cooldown: 'N/A',
        duration: 'N/A',
        usageTips: 'Laura\'s Sharp Shooter ability is passive and activates automatically when scoped in. This makes her more effective with sniper rifles and other scoped weapons.'
    },
    {
        name: 'Lila',
        ability: 'Healing Heartbeat',
        description: 'Restores HP when using healing items',
        image: 'edited new img/Lila.jpg',
        type: 'passive',
        abilityDescription: 'When hitting enemies or vehicles with assault and marksman rifles, reduces the enemies\' movement speed by 10% or the vehicles movement speed by 80% for 3s. If the enemy is knocked down while decelerated, freezes them for up to 3s and obtains 1 extra Gloo Wall.',
        cooldown: 'N/A',
        duration: '3s',
        usageTips: 'Lila\'s ability is passive and activates automatically when hitting enemies with assault and marksman rifles. This makes her effective at slowing down enemies and vehicles, and can provide extra Gloo Walls when knocking down slowed enemies.'
    },
    {
        name: 'Iris',
        ability: 'Gloo Wall Penetration',
        description: 'Marks enemies behind Gloo Walls and penetrates them to cause damage',
        image: 'edited new img/Iris.jpg',
        type: 'active',
        abilityDescription: 'For 15s, successfully firing at a Gloo Wall will mark enemies within 7m of it and penetrate the Gloo Wall to cause damage to marked enemies (damage inflicted will be lower than usual). Effective on 5-Gloo Walls max.',
        cooldown: '60s',
        duration: '15s',
        usageTips: 'Use this ability when enemies are hiding behind Gloo Walls. The ability allows you to mark and damage enemies through Gloo Walls, making it effective for flushing out campers. Works best with weapons that have high fire rate to maximize the penetration effect.'
    },
    {
        name: 'Skyler',
        ability: 'Sonic Wave',
        description: 'Deals damage to Gloo Walls with a sonic wave',
        image: 'edited new img/Skyler.jpg',
        type: 'active',
        abilityDescription: 'Unleashes a sonic wave forward for up to 100m. When hitting an obstacle, the wave will explode and deal 500 DMG/s to Gloo Walls within 4m. Lasts 6s. Cooldown: 45s. Up to 2 skill charges can be stored. Gloo Walls over 5m away will be auto-aimed at.',
        cooldown: '45s',
        duration: '6s',
        usageTips: 'Use Sonic Wave to destroy enemy Gloo Walls from a safe distance. The ability can store up to 2 charges, allowing you to use it multiple times in quick succession. Perfect for countering defensive strategies that rely heavily on Gloo Walls.'
    },
    {
        name: 'Maro',
        ability: 'Falcon Fervor',
        description: 'Damage increases with distance and against marked enemies',
        image: 'edited new img/Maro.jpg',
        type: 'passive',
        abilityDescription: 'Damage increases with distance, up to 25%. Damage to marked enemies increases by 5%.',
        cooldown: 'N/A',
        duration: 'N/A',
        usageTips: 'Maro\'s Falcon Fervor ability is passive and activates automatically. This makes him more effective at long range combat, as his damage increases with distance. Pair him with characters that can mark enemies to maximize his damage potential.'
    },
    {
        name: 'Maxim',
        ability: 'Gluttony',
        description: 'Eating mushrooms and using Med Kits faster',
        image: 'edited new img/Maxim.jpg',
        type: 'passive',
        abilityDescription: 'Eating mushrooms and using Med Kits faster by 25%',
        cooldown: 'N/A',
        duration: 'N/A',
        usageTips: 'Maxim\'s Gluttony ability is passive and activates automatically when using healing items. This allows you to heal faster, reducing the time you\'re vulnerable during healing.'
    },
    {
        name: 'Misha',
        ability: 'Afterburner',
        description: 'Increases driving speed and reduces damage taken in vehicles',
        image: 'edited new img/Misha.jpg',
        type: 'passive',
        abilityDescription: 'Driving speed increases by 10%. While in vehicle, character is harder to be targeted at, and damage taken is decreased by 20%.',
        cooldown: 'N/A',
        duration: 'N/A',
        usageTips: 'Misha\'s Afterburner ability is passive and activates automatically when driving vehicles. This makes vehicles more effective for transportation and combat.'
    },
    {
        name: 'Moco',
        ability: 'Hacker\'s Eye',
        description: 'Tags enemies hit for a short duration',
        image: 'edited new img/Moco.jpg',
        type: 'passive',
        abilityDescription: 'Marks the enemy hit, exposes their location in the field of view, the minimap, and shares it with teammates for 5s. The enemy, if moving while marked, will have their location exposed for a longer time, up to 6.55s.',
        cooldown: '15s',
        duration: '5s',
        usageTips: 'Use Hacker\'s Eye when you need to track enemies or when you\'re unsure about your surroundings. The ability will reveal the location of all tagged enemies to your entire team.'
    },
    {
        name: 'Nikita',
        ability: 'Firearms Expert',
        description: 'Increases reload speed and inflicts healing deduction',
        image: 'edited new img/Nikita.jpg',
        type: 'passive',
        abilityDescription: 'Reload speed increases by 30%. Every time the skill user hits an enemy, said target will get a 50% healing deduction that lasts for 6s (max. deduction: 50%).',
        cooldown: 'N/A',
        duration: '6s',
        usageTips: 'Nikita\'s Firearms Expert ability is passive and activates automatically. The increased reload speed allows you to stay in combat longer, and the healing deduction makes it harder for enemies to recover.'
    },
    {
        name: 'Notora',
        ability: 'Rush',
        description: 'Restores HP to teammates in vehicles',
        image: 'edited new img/Notora.jpg',
        type: 'passive',
        abilityDescription: 'When driving, restores 5 HP every 25s for everyone in the vehicle, up to a maximum of 200 HP.',
        cooldown: 'N/A',
        duration: 'N/A',
        usageTips: 'Notora\'s Rush ability is passive and activates automatically when in a vehicle. This makes her an excellent support character for vehicle-based strategies, as she can keep her team alive during long drives.'
    },
    {
        name: 'Olivia',
        ability: 'Healing Touch',
        description: 'Increases healing effects and spreads healing to teammates',
        image: 'edited new img/Olivia.jpg',
        type: 'passive',
        abilityDescription: 'Increase healing effects by 30% and spread 80% of the user\'s single-target healing amount to teammates within 15m',
        cooldown: 'N/A',
        duration: 'N/A',
        usageTips: 'Olivia\'s Healing Touch ability is passive and activates automatically when using healing items. This makes healing more effective and allows you to heal your teammates at the same time.'
    },
    {
        name: 'Paloma',
        ability: 'Arms Cache',
        description: 'Increases ammo capacity',
        image: 'edited new img/Paloma.jpg',
        type: 'passive',
        abilityDescription: 'Get an additional 120 backpack capacity for ammo, excluding Grenade Launcher. (120 AR Ammo, 120 SMG Ammo, 40 Sniper Ammo, 40 SG Ammo)',
        cooldown: 'N/A',
        duration: 'N/A',
        usageTips: 'Paloma\'s Arms Cache ability is passive and activates automatically. This allows you to carry more ammo, reducing the need to frequently loot for ammunition.'
    },
    {
        name: 'Rafael',
        ability: 'Dead Silent',
        description: 'Silences weapons when using sniper rifles and marks downed enemies',
        image: 'edited new img/Rafael.jpg',
        type: 'passive',
        abilityDescription: 'When using Snipers and Marksman Rifles, firing sound is silenced and enemies knocked down by the user bleed 85% faster.',
        cooldown: 'N/A',
        duration: 'N/A',
        usageTips: 'Rafael\'s Dead Silent ability is passive and activates automatically when using sniper rifles. This makes him more effective with sniper rifles, as he can shoot without revealing his location.'
    },
    {
        name: 'Shani',
        ability: 'Gear Recycle',
        description: 'Restores armor durability when eliminating enemies',
        image: 'edited new img/Shani.jpg',
        type: 'passive',
        abilityDescription: 'When using an active skill, gives 30 Shield Points to self and teammates within 10m. The Shield Points decay after 55, after which players can obtain the effects again. Cooldown: 10s.',
        cooldown: '10s',
        duration: '55s',
        usageTips: 'Shani\'s Gear Recycle ability is passive and activates automatically when eliminating enemies. This makes her more durable in combat, as she can restore armor durability by eliminating enemies.'
    },
    {
        name: 'Steffie',
        ability: 'Painted Wall',
        description: 'Creates graffiti that restores armor durability',
        image: 'edited new img/Steffie.jpg',
        type: 'active',
        abilityDescription: 'Creates a 4m area, where throwables are invalid. Allies in the area will restore 10% armor durability per second and damage from ammo will reduce by 20%. Lasts for 15s. Effects do not stack. Cooldown: 605.',
        cooldown: '60s',
        duration: '15s',
        usageTips: 'Use Painted Wall when your team\'s armor is low or when you need to restore armor durability quickly. The graffiti can be used by all teammates, making it a valuable team ability.'
    },
    {
        name: 'Wolfrahh',
        ability: 'Limelight',
        description: 'Increases damage with headshots and reduces damage taken from headshots',
        image: 'edited new img/Wolfrahh.jpg',
        type: 'passive',
        abilityDescription: 'Every elimination will add one spectator, and the number of spectators will not reduce. With each additional spectator, damage taken from headshots reduces by 4% (max. 12%) and headshot damage to enemies increases by 10% (max. 30%).',
        cooldown: 'N/A',
        duration: 'N/A',
        usageTips: 'Wolfrahh\'s Limelight ability is passive and activates automatically. This makes him more effective in combat, as he can deal more damage with headshots and take less damage from enemy headshots.'
    },
    {
        name: 'Xayne',
        ability: 'Xtreme Encounter',
        description: 'Temporary Shield Points boost and reset on knockdowns',
        image: 'edited new img/Xayne.jpg',
        type: 'active',
        abilityDescription: 'Enters the Xtreme state and instantly obtains 50 temporary Shield Points for 12s, during which each knockdown of an enemy restores the temporary Shield Points gained through this skill back to 50 and resets the state duration. Once the state ends, the Shield Points earned from this process will be removed.',
        cooldown: '75s',
        duration: '12s',
        usageTips: 'Use Xtreme Encounter when you need temporary protection. The ability provides 50 Shield Points that last for 12 seconds, and each time you knock down an enemy, your Shield Points are restored to 50 and the duration is reset. This makes Xayne effective for aggressive playstyles where you\'re actively engaging enemies.'
    },
    {
        name: 'Kassie',
        ability: 'Meow Meow',
        description: 'Increases movement speed when HP is low',
        image: 'edited new img/Kassie.jpg',
        type: 'active',
        abilityDescription: 'Increases movement speed when HP is low. The ability can be used to escape dangerous situations.',
        cooldown: '150s',
        duration: '5s',
        usageTips: 'Use Meow Meow when your HP is low and you need to escape a dangerous situation. The increased movement speed will help you quickly move to safety.'
    },
    {
        name: 'Oscar',
        ability: 'Coming Soon',
        description: 'Ability details will be revealed in a future update',
        image: 'edited new img/Oscar.jpg',
        type: 'active',
        abilityDescription: 'Ability details will be revealed in a future update.',
        cooldown: 'Coming Soon',
        duration: 'Coming Soon',
        usageTips: 'Oscar\'s ability is currently under development and will be revealed in a future update.'
    },
    {
        name: 'Alvaro',
        ability: 'Art of Demolition',
        description: 'Increases damage with grenades and reduces cooldown time',
        image: 'edited new img/Alvaro.jpg',
        type: 'passive',
        abilityDescription: 'Damage of explosive weapons increases by 20% and range increases by 10%. Each grenade will split into 3 mini grenades after explosion, dealing 20% damage of the original grenade.',
        cooldown: 'N/A',
        duration: 'N/A',
        usageTips: 'Alvaro\'s Art of Demolition ability is passive and activates automatically. This makes him more effective with grenades, as he can deal more damage and use them more frequently.'
    },
    {
        name: 'Kairos',
        ability: 'Time Keeper',
        description: 'Reduces cooldown of character abilities',
        image: 'edited new img/Kairos.jpg',
        type: 'passive',
        abilityDescription: 'Defense Mode: Continuously recovers 2 EP/s. Breaker Mode: Activates when EP is full and the skill user first hits a shielded/armored enemy, during which the user consumes 10 EP/s. Each hit on shielded/armored enemies will additionally reduce their Shield Points/Armor Durability by 120% of the damage inflicted. When EP is 0, return to Defense Mode.',
        cooldown: 'N/A',
        duration: 'N/A',
        usageTips: 'Kairos\'s Time Keeper ability is passive and activates automatically. This makes him more effective with character abilities, as he can use them more frequently than other characters.'
    },
    {
        name: 'Santino',
        ability: 'Mannequin',
        description: 'Spawns a mannequin that can be used to switch positions',
        image: 'edited new img/Santino.jpg',
        type: 'active',
        abilityDescription: 'Spawn a 200 HP mannequin that autonomously travels for 25s. When the mannequin is within 60m, use the skill again to switch positions with it. You can only switch once within 3s, up to 2 time(s) in total. The player who destroys the mannequin will be marked for 55. Cooldown: 605.',
        cooldown: '60s',
        duration: '25s',
        usageTips: 'Use Santino\'s Mannequin ability to create a decoy and potentially escape dangerous situations by switching positions with it.'
    },
    {
        name: 'Miguel',
        ability: 'Crazy Slayer',
        description: 'Gains EP by knocking down enemies',
        image: 'edited new img/Miguel.jpg',
        type: 'passive',
        abilityDescription: 'Gain 200 EP by knocking down an enemy.',
        cooldown: 'N/A',
        duration: 'N/A',
        usageTips: 'Miguel\'s Crazy Slayer ability is passive and activates automatically when knocking down enemies. This helps you maintain your EP, allowing you to use character abilities more frequently.'
    }
];

// Function to create character cards
function createCharacterCards(characters = allCharacters) {
    const characterGrid = document.querySelector('.character-grid');
    characterGrid.innerHTML = ''; // Clear existing content
    
    characters.forEach(character => {
        const card = document.createElement('div');
        card.className = `character-card ${character.type}`;
        
        // Encode the image path to handle spaces in filenames
        const encodedImagePath = encodeURI(character.image);
        
        card.innerHTML = `
            <div class="card-content">
                <img src="${encodedImagePath}" alt="${character.name}" class="character-image" onerror="this.src='images/placeholder.png'; this.alt='Image not found';">
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
        
        characterGrid.appendChild(card);
    });
}

// Function to filter characters
function filterCharacters(filter) {
    let filteredCharacters = allCharacters;
    
    if (filter !== 'all') {
        filteredCharacters = allCharacters.filter(character => character.type === filter);
    }
    
    createCharacterCards(filteredCharacters);
}

// Function to search characters
function searchCharacters(query) {
    if (!query) {
        createCharacterCards();
        return;
    }
    
    const searchResults = allCharacters.filter(character => 
        character.name.toLowerCase().includes(query.toLowerCase()) ||
        character.ability.toLowerCase().includes(query.toLowerCase()) ||
        character.description.toLowerCase().includes(query.toLowerCase())
    );
    
    createCharacterCards(searchResults);
}

// Initialize the characters page
document.addEventListener('DOMContentLoaded', () => {
    console.log('Characters.js loaded');
    
    // Create all character cards
    createCharacterCards();
    
    // Add event listeners for filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                button.classList.add('active');
                // Filter characters
                filterCharacters(button.getAttribute('data-filter'));
            });
        });
    }
    
    // Add event listener for search input
    const searchInput = document.getElementById('characterSearch');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchCharacters(e.target.value);
        });
    }
    
    // Add scroll-based animations
    window.addEventListener('scroll', handleScrollAnimations);
    
    // Initial check for elements in view
    handleScrollAnimations();
});

// Add scroll-based animations
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.character-card');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.classList.add('visible');
        }
    });
} 