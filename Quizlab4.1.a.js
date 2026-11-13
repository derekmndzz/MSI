

// TASK 1: CREATE REUSABLE DEVICE CARD TEMPLATE FUNCTION

function createDeviceCard(device) {

    const card = document.createElement('div');
    card.className = 'device-card';

    const img = document.createElement('img');
    img.src = device.image;
    img.alt = device.name;
    card.appendChild(img);

    const name = document.createElement('h3');
    name.textContent = device.name;
    card.appendChild(name);

    const price = document.createElement('p');
    price.textContent = '$' + device.price;
    card.appendChild(price);

    return card;
}


// TASK 2: ADD EMERGENCY REPAIR SERVICE

const services = [

    {name: 'Basic Installation', price: 99, type: 'standard', available: true},

    {name: 'Premium Setup', price: 199, type: 'premium', available: true},

    {name: 'Maintenance Plan', price: 49, type: 'standard', available: false},

    {name: 'Emergency Repair', price: 149, type: 'premium', available: true}

];


// TASK 3: DEVICE AVAILABILITY CHECK

const devices = [

    {name: 'Smart Thermostat', price: 249, image: 'thermostat.jpg', available: true, region: 'local'},

    {name: 'Solar Panel Kit', price: 899, image: 'solar.jpg', available: false, region: 'remote'},

    {name: 'LED Light System', price: 179, image: 'lights.jpg', available: true, region: 'local'}

];

const container = document.getElementById('deviceContainer');

for (let i = 0; i < devices.length; i++) {

    const device = devices[i];

    const card = createDeviceCard(device);

    // Add unavailable class when device is not available

    if (!device.available) {
        card.classList.add('unavailable');
    }

    if (device.region === 'local') {
        card.querySelector('h3').style.fontWeight = 'bold';
    }

    container.appendChild(card);

}


// TASK 4: PREMIUM SERVICE HIGHLIGHTING

const serviceList = document.getElementById('serviceList');

for (let i = 0; i < services.length; i++) {

    const service = services[i];

    const listItem = document.createElement('li');

    listItem.textContent = service.name + ' - $' + service.price;

    // Highlight premium services in green

    if (service.type === 'premium') {
        listItem.style.color = '#2e7d32';
    }

    // Dim unavailable services

    if (!service.available) {
        listItem.style.opacity = '0.5';
    }

    serviceList.appendChild(listItem);

}


// TASK 5: COMPLETE DATA-DRIVEN SYSTEM

// All devices and services are generated dynamically
// using arrays, objects, loops and conditional statements.


// PLACEHOLDER IMAGES FOR DEMO

setTimeout(function() {

    const images = document.querySelectorAll('.device-card img');

    images.forEach(function(img, index) {

        const deviceNames = ['THERMO', 'SOLAR', 'LIGHTS'];

        img.style.display = 'flex';
        img.style.alignItems = 'center';
        img.style.justifyContent = 'center';

        img.textContent = deviceNames[index] || 'DEVICE';

        img.onerror = null;

    });

}, 100);

