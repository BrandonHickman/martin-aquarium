import { database } from './aquariumData.js';

export const locationList = () => {
    let locationHTML = '';

    for (const locale of database.locations) {
        locationHTML += `
            <section>
            <article class="locations">
            <h2 class="location-name">${locale.name}</h2>
            <p class="location-country">${locale.country}</p>
            <p class="location-description">${locale.description}</p>
            </article>
            </section>
        
        `;

    }
    
    return locationHTML
}