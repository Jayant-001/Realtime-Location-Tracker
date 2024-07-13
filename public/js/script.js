const socket = io();
const username = prompt("Please enter your name");

if (navigator.geolocation) {
    navigator.geolocation.watchPosition((position) => {
        const { latitude, longitude } = position.coords;
        socket.emit("send-location", { latitude, longitude })
    }, (error) => {
        console.log("Error in finding location", error)
    }, {
        enableHighAccuracy: true,
        maximumAge: 0,
        timeout: 5000
    });
}

function randomInRange(min, max) {
    return Math.random() < 0.5 ? ((1 - Math.random()) * (max - min) + min) : (Math.random() * (max - min) + min);
}

var map = L.map('map').setView([51.505, -0.09], 16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://jayant-gupta.vercel.app/">JAYANT</a> Developer'
}).addTo(map);

const markers = {};
const names = {};

socket.on("receive-location", (data) => {
    const { id, latitude, longitude } = data;
    // console.log("client revice ", data);
    map.setView([latitude, longitude]);
    if (markers[id]) {
        markers[id].setLatLng([latitude, longitude]);
    }
    else {
        names[id] = username;
        markers[id] = L.marker([latitude, longitude])
            .addTo(map)
            .bindPopup(`${names[id]}`)
            .openPopup();
    }
})

socket.on("user-disconnected", (data) => {
    if (markers[data.id]) {
        map.removeLayer(markers[id]);
        delete markers[id];
    }
})