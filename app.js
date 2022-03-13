const input = document.querySelector(`#search`);
const submitBtn = document.querySelector(`#submitBtn`);

submitBtn.addEventListener('click', handleInput);

function handleInput() {
    const value = input.value;
    fetch(`https://pokeapi.co/api/v2/berry/${value}/`)
    .then(res => res.json())
    .then(data => displayBerryStats(data))
}

function displayBerryStats(data) {
    // console.log(data)
    const name = data.name;
    const growthTime = data.growth_time;
    const maxHarvest = data.max_harvest;
    const naturalGiftPower = data.natural_gift_power;
    const size = data.size;
    const smoothness = data.smoothness;
    const soilDryness = data.soil_dryness;
    const firmness = data.firmness;
    const flavors = data.flavors;
    const item = data.item;
    const naturalGiftType = data.natural_gift_type;
    console.log(name, growthTime, maxHarvest, naturalGiftPower, size, smoothness, soilDryness, firmness, flavors, item, naturalGiftType)
}