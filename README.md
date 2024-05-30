# Tuskla - 3D Car Customization Experience

## Overview

Welcome to **Tuskla**, a unique 3D car customization experience inspired by the Tesla Model 3 design studio. This project leverages the power of modern web technologies to create an immersive design experience that allows users to explore and customize a 3D model of the Tuskla car. Unlike traditional car design webpages that rely on static images, Tuskla offers an interactive 3D environment where users can rotate the camera, enter the car, and customize various aspects of the vehicle in real-time.

## Technologies Used

- **Three.js**: A powerful 3D library that makes WebGL simpler.
- **React Three Fiber**: A React renderer for Three.js, enabling the creation of complex 3D scenes using React components.
- **React Three Drei**: A collection of useful helpers for React Three Fiber.
- **Tailwind CSS**: A utility-first CSS framework for quickly styling the application.
- **TypeScript**: A strongly typed programming language that builds on JavaScript.
- **React**: A JavaScript library for building user interfaces.
- **Vercel**: A platform for deploying and hosting static sites and serverless functions.

## Features

- **3D Car Model**: Interact with a detailed 3D model of the Tuskla car.
- **Camera Control**: Rotate the camera around the car and zoom in to explore the interior.
- **Customization Options**: Change the body paint and interior colors of the car.
- **Interactive Experience**: Seamlessly switch between different views and customization options.

## Known Issues and Areas for Improvement

- **Incomplete Sidebar Sections**: Some sections in the sidebar are currently unimplemented.
- **Limited Wheel Options**: The car model comes with only one set of wheels; additional wheel sets can be created.
- **Model Optimization**: The 3D model is heavy and could benefit from optimization to reduce the number of vertices.
- **Material Separation**: The steering wheel uses the same material as the seats. Separating these materials would improve customization accuracy.
  
## License

This project is licensed under the MIT License.

## Installation and Setup

To run this project locally, follow these steps:

1. **Clone the repository**:
   git clone https://github.com/your-username/tuskla.git
   cd tuskla

2. **Install dependencies**:
    npm install

3. **Run the development server**
    npm run dev

4. **Open your browser and navigate to http://localhost:3000 to see the application in action.** 

## Deployment
This project is deployed on Vercel. You can view the live version here.

## Contributing
Contributions are welcome! If you have suggestions for improvements or new features, feel free to open an issue or create a pull request.

## Enjoy customizing your Tuskla car!

Note: Tuskla is a fictional project inspired by Tesla and the Rick and Morty series. This project is for demonstration purposes only and is not affiliated with Tesla, Inc.