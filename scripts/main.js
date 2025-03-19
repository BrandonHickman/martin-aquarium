import { database } from './aquariumData.js';
import { fishList } from './fishList.js'
import { tipList } from './tipList.js'
import { locationList } from './locationList.js'
import { soldierFish } from './fishfunctions.js';
import { mostHolyFish } from './fishfunctions.js';
import { regularFish } from './fishfunctions.js'
// Generate the fish list
const fishHTML = fishList()

// Generate the care tips
const tipHTML = tipList()

// Generate the location list
const locationHTML = locationList()

const fishOfThree = mostHolyFish()
const fishOfFive = soldierFish()
const otherFish = regularFish()
// Render each HTML string to the correct DOM element

document.querySelector("#fishList").innerHTML = `${fishHTML}${fishOfFive}${fishOfThree}${otherFish}`
document.querySelector("#tipList").innerHTML = `${tipHTML}`
document.querySelector("#locationList").innerHTML = `${locationHTML}`
