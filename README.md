# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
# part2

# Notes Application

This is a notes application built with React. Users can create, view, and manage their notes. Notes can be marked as important and are fetched from a server.

## Features

- **Create Notes**: Add new notes with a simple form.
- **Toggle Importance**: Mark notes as important or unimportant.
- **Filter Notes**: View all notes or just the important ones.

## Technologies Used

- **React**: For building the user interface.
- **CSS**: For styling the application.
- **Axios**: For making HTTP requests (assumed in `noteService`).

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/jasminabr/part2.git
   cd notes-app
   ```
2. Install dependencies:

    ```bash
    npm install
     ```
3. Start the application:

    ```bash
       npm run dev
    ```
4. Start the server in another terminal
    ```bash
    npm run server
    ```
    or 

    ```bash
   npx json-server --port=3001 --watch db.json
     ```
    
 5. Open your browser and go to  :  http://localhost:3001/notes

    

<img width="635" alt="Screenshot 2024-11-04 at 23 07 22" src="https://github.com/user-attachments/assets/e4fa90f2-cd61-4bf5-b6a7-7d8953ee7451">
<img width="671" alt="Screenshot 2024-11-04 at 23 07 13" src="https://github.com/user-attachments/assets/2b8ded03-1559-4160-a189-d3c5e2cfe094">
![image](https://github.com/user-attachments/assets/9b2a1f98-c5e3-48dc-91b0-aba28d30185d)
<img width="1440" alt="Screenshot 2024-11-04 at 23 06 22" src="https://github.com/user-attachments/assets/28ec2f38-ab13-4100-bd5c-83445fb222d3">





