import { database } from './aquariumData.js';

export const fishList = () => {
    let fishHTML = '';
 
    for (const fish of database.fish) {
        fishHTML += `
            <section class="fish">
                <img src="${fish.image}" alt="${fish.name} poster" class="fish__poster">
                <div class="fish">
                    <h2 class="fish-name">${fish.name}</h2>
                    <p class="fish-diet">${fish.diet}</p>
                    <p class="fish-length">${fish.length}</p>
                    <p class="fish-species">${fish.species}</p>
                    <p class="fish-location">${fish.location}</p>
                </div>
            </section>
        `;
    }

    
 
    return fishHTML
 };

//const mainAquarium = document.querySelector("#fishList")

//mainAquarium.innerHTML = fishList