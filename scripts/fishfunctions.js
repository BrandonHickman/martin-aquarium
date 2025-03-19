import { database } from './aquariumData.js'



export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    let fishOfThree = "";

    for (const fish of database.fish) {
        if (fish.length % 3 === 0) {
            fishOfThree += `
            <section class="fish-list">
            <img src="${fish.image}" alt="${fish.name}"
            <h2 class="fish-name">${fish.name}</h2>
            <ul class="fish details">
            <li>Species: ${fish.species}</li>
            <li>Length: ${fish.length}</li>
            <li>Location: ${fish.location}</li>
            <li>Diet: ${fish.diet}</li>
            </ul>

            </section>`
        }

    }

    return fishOfThree;
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    let fishOfFive = "";

    for (const fish of database.fish) {
        if (fish.length % 5 === 0) {
            fishOfFive += `
            <section class="fish-list">
            <img src="${fish.image}" alt="${fish.name}"
            <h2 class="fish-name">${fish.name}</h2>
            <ul class="fish details">
            <li>Species: ${fish.species}</li>
            <li>Length: ${fish.length}</li>
            <li>Location: ${fish.location}</li>
            <li>Diet: ${fish.diet}</li>
            </ul>

            </section>`
        }

    }

    return fishOfFive;
}

export const regularFish = () => {
    // Any fish not a multiple of 3 or 5
    let otherFish = "";

    for (const fish of database.fish) {
        if (fish.length % 5 !== 0 && fish.length % 3 !==0) {
            otherFish += `
             <section class="fish-list">
            <img src="${fish.image}" alt="${fish.name}"
            <h2 class="fish-name">${fish.name}</h2>
            <ul class="fish details">
            <li>Species: ${fish.species}</li>
            <li>Length: ${fish.length}</li>
            <li>Location: ${fish.location}</li>
            <li>Diet: ${fish.diet}</li>
            </ul>

            </section>`
        }

    }

    return otherFish;

}