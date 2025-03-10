# Simple Gachapon App

A React Native Expo application that demonstrates the integration of a frontend (React Native) and backend (ExpressJS) with a MySQL database. This app allows users to manage and interact with "Concept" cards, offering the functionality to create, retrieve, delete "Concept" cards, and a Gachapon feature to draw random cards.

## Features

- **Create "Concept" Cards**: Allows users to create new cards by specifying card details.
- **Retrieve "Concept" Cards**: Fetches and displays a list of all "Concept" cards in the database.
- **Delete "Concept" Cards**: Enables users to delete "Concept" cards from the database.
- **Gachapon**: A fun feature that lets users randomly draw a "Concept" card from the available cards, similar to a Gachapon machine.

## Technologies Used

- **Frontend**: React Native (Expo)
- **Backend**: ExpressJS
- **Database**: MySQL
- **API Communication**: REST

## Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** (for backend)
- **npm** or **yarn** (for package management)
- **Expo CLI** (for React Native development)
- **MySQL** (for the database)

### Setup Backend

1. Clone the repository to your local machine.

   ```bash
   git clone https://github.com/yourusername/pokemon-cards-app.git
   ```

2. Install backend dependencies and start the server

   ```cd card-gacha\gacha-server
   npm install
   npm start
   ```

3. Install frontend dependencies and start expo

   ```cd card-gacha
   npm install
   npm start
   ```
