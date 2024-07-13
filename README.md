# Real-Time Location Sharing App

This is a Node.js application that allows users to share their real location with others. app uses Express, Socket.io, and EJS for the backend, Leaflet for displaying the map on the frontend. Users can see each other's locations in real-time on the map.

## Features

- Real-time location sharing using Socket.io
- Display of user locations on a map using Leaflet
- Efficient and dynamic user interface using EJS

## Technologies Used

- Node.js: JavaScript runtime for building the backend.
- Express: Web framework for Node.js.
- Socket.io: Library for real-time web applications.
- EJS: Embedded JavaScript templates for rendering HTML.
- Leaflet: JavaScript library for interactive maps.
- navigator.geolocation: Web API for getting the current location of the device.

## Prerequisites

- Node.js installed on your machine.
- NPM (Node Package Manager) or Yarn.

## Installation

1. Clone the repository:
  
    git clone https://github.com/Jayant-001/Realtime-Location-Tracker.git
    


2. Navigate into the project directory:
  
    cd real-time-location-sharing
    


3. Install the dependencies:
  
    yarn install
    


## Usage

1. Start the development server:
  
    yarn run dev
    


2. Open your browser and navigate to:
  
    http://localhost:3000
    
3. Allow the browser to access your location when prompted.


## Project Structure


- public/: Contains static files like CSS and client-side JavaScript.
- views/: Contains EJS templates.
- index.js: Main application file.
- package.json: Project metadata and dependencies.


## Contributing

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -am 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Create a new Pull Request.


## Acknowledgements

- [Leaflet](https://leafletjs.com/) for the interactive maps.
- [Socket.io](https://socket.io/) for real-time communication.
- [Express](https://expressjs.com/) for the web framework.