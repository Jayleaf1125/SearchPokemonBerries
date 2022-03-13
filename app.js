const input = document.querySelector(`#search`);
const submitBtn = document.querySelector(`#submitBtn`);
const berryDisplay = document.querySelector(`#berryDisplay`);

submitBtn.addEventListener('click', handleInput);

function handleInput() {
    const value = input.value;
    fetch(`https://pokeapi.co/api/v2/berry/${value}/`)
    .then(res => res.json())
    .then(data => {
    // Berry Name
    const name = data.name;
    displayBerryName(name);
    // Berry Growth Time
    const growthTime = data.growth_time;
    displayBerryGrowthTime(growthTime);
    // Berry Max Harvest
    const maxHarvest = data.max_harvest;
    displayBerryMaxHarvest(maxHarvest);
    // Berry Natural Gift Power
    const naturalGiftPower = data.natural_gift_power;
    displayBerryNaturalGiftPower(naturalGiftPower);
    // Berry Size
    const size = data.size;
    displayBerrySize(size);
    // Berry Smoothness
    const smoothness = data.smoothness;
    displayBerrySmoothness(smoothness);
    // Berry Soil Dryness
    const soilDryness = data.soil_dryness;
    displayBerrySoilDryness(soilDryness);
    // Berry Firmness
    const firmness = data.firmness;
    displayBerryFirmness(firmness);
    // Berry Flavors
    const flavors = data.flavors;
    displayBerryFlavors(flavors);
    // Berry Item
    const item = data.item;
    displayBerryItem(item);
    // Berry Natural Gift Type
    const naturalGiftType = data.natural_gift_type;
    displayBerryNaturalGiftType(naturalGiftType);
    })
}

function displayBerryName(name) {
    // console.log(name)
    const nameText = document.createElement('h1');
    nameText.innerText = name;
    berryDisplay.append(nameText);
}

function displayBerryGrowthTime(growthTime) {
    // console.log(growthTime)
    const berryGrowthTime = document.createElement('div');
    berryGrowthTime.style.border = "black 1px solid";
    const growthTimeText = document.createElement('h3');
    const growthTimeDesc = document.createElement('p');

    growthTimeText.innerText = growthTime.toString();
    growthTimeDesc.innerText = "Time it takes the tree to grow one stage, in hours. Berry trees go through four of these growth stages before they can be picked.";

    berryGrowthTime.append(growthTimeDesc);
    berryGrowthTime.append(growthTimeText);
    berryDisplay.append(berryGrowthTime);

}

function displayBerryMaxHarvest(maxHarvest) {
    // console.log(maxHarvest)
    const berryMaxHarvest = document.createElement('div');
    berryMaxHarvest.style.border = "black 1px solid";
    const maxHarvestText = document.createElement('h3');
    const maxHarvestDesc = document.createElement('p');

    maxHarvestText.innerText = maxHarvest.toString();
    maxHarvestDesc.innerText = "The maximum number of these berries that can grow on one tree in Generation IV.";

    berryMaxHarvest.append(maxHarvestDesc);
    berryMaxHarvest.append(maxHarvestText);
    berryDisplay.append(berryMaxHarvest);
}

function displayBerryNaturalGiftPower(naturalGiftPower) {
    // console.log(naturalGiftPower)
    const berryNaturalGiftPower = document.createElement('div');
    berryNaturalGiftPower.style.border = "black 1px solid";
    const naturalGiftPowerText = document.createElement('h3');
    const naturalGiftPowerDesc = document.createElement('p');

    naturalGiftPowerText.innerText = naturalGiftPower.toString();
    naturalGiftPowerDesc.innerText = `The power of the move "Natural Gift" when used with this Berry.`;

    berryNaturalGiftPower.append(naturalGiftPowerDesc);
    berryNaturalGiftPower.append(naturalGiftPowerText);
    berryDisplay.append(berryNaturalGiftPower);
}

function displayBerrySize(size) {
    // console.log(size)
    const berrySize = document.createElement('div');
    berrySize.style.border = "black 1px solid";
    const sizeText = document.createElement('h3');
    const sizeDesc = document.createElement('p');

    sizeText.innerText = size.toString();
    sizeDesc.innerText = "The size of this Berry, in millimeters..";

    berrySize.append(sizeDesc);
    berrySize.append(sizeText);
    berryDisplay.append(berrySize);
}

function displayBerrySmoothness(smoothness) {
    // console.log(smoothness)
    const berrySmoothness = document.createElement('div');
    berrySmoothness.style.border = "black 1px solid";
    const smoothnessText = document.createElement('h3');
    const smoothnessDesc = document.createElement('p');

    smoothnessText.innerText = smoothness.toString();
    smoothnessDesc.innerText = "The smoothness of this Berry, used in making Pokéblocks or Poffins..";

    berrySmoothness.append(smoothnessDesc);
    berrySmoothness.append(smoothnessText);
    berryDisplay.append(berrySmoothness);
}

function displayBerrySoilDryness(soilDryness) {
    // console.log(soilDryness)
    const berrySoilDryness = document.createElement('div');
    berrySoilDryness.style.border = "black 1px solid";
    const soilDrynessText = document.createElement('h3');
    const soilDrynessDesc = document.createElement('p');

    soilDrynessText.innerText = soilDryness.toString();
    soilDrynessDesc.innerText = "The speed at which this Berry dries out the soil as it grows. A higher rate means the soil dries more quickly.";

    berrySoilDryness.append(soilDrynessDesc);
    berrySoilDryness.append(soilDrynessText);
    berryDisplay.append(berrySoilDryness);
}

function displayBerryFirmness(firmness) {
    // console.log(firmness);
    
    // console.log(firmnessType, firmnessUrl)
}

// function displayBerryFlavors(flavors) {
//     console.log(flavors);
// }

// function displayBerryItem(item) {
//     console.log(item);
// }

// function displayBerryNaturalGiftType(naturalGiftType) {
//     console.log(naturalGiftType);
// }
