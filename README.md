# Bettermode Community Web Application

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Getting Started](#getting-started)
4. [Project Structure](#project-structure)
5. [Available Scripts](#available-scripts)
6. [Technologies Used](#technologies-used)
7. [Contributing](#contributing)
8. [License](#license)

---

### Introduction

The Bettermode Community Web Application is a clone of Bettermode's posts list and gallery, featuring fake authentication. Built with ReactJS and ViteJS, the app uses Tailwind CSS for responsive design and dark/light theme functionality. It leverages GraphQL and React Query for efficient data fetching and mutations. The project also includes robust unit testing using Vitest and Testing Library/React to ensure high-quality and maintainable code.


---

### Features

The Bettermode Community Web Application offers the following features:

1. **Authentication**: Users can sign in and sign out to access the application.  
2. **Posts List Gallery**: A responsive and visually appealing gallery displaying a list of posts.  
3. **Post Details**: View detailed information about individual posts.  
4. **Post Reactions**: Users can react to posts with likes or other reactions.  
5. **Dark and Light Theme**: Users can switch between dark and light themes for a personalized experience.  
6. **Responsive Design**: Optimized for a seamless user experience across devices, including desktops, tablets, and mobile phones.  


---

### Getting Started

To set up and run the **Bettermode Community Web Application** locally, follow these steps:

#### 1. Clone the repository
Clone the repository to your local machine using the following command:
```bash
git clone https://github.com/mmdrn/bettermode-community.git
```

#### 2. Navigate to the project directory
Move into the cloned project directory:
```bash
cd bettermode-community
```

#### 3. Install dependencies
Install the necessary packages by running:
```bash
yarn
```

#### 4. Prepare the `.env` file
To run the application properly, you need to create a `.env` file in the root directory of your project. This file will store the necessary environment variables required by the application.

Here is the structure of the `.env` file:

```plaintext
VITE_AUTH_TOKEN="<your-auth-token>" # A valid JWT authentication token is required to interact with the Bettermode API.
# VITE_SPACE_ID="<space-id>" # Space identifier (optional)
VITE_DEFAULT_FETCH_POSTS_LIMIT=8 # The default maximum number of posts to fetch per request
VITE_DEFAULT_THEME="light" # Default theme setting for the application ("light" or "dark")
VITE_API_ORIGIN="https://api.bettermode.com" # API base URL
VITE_AUTH_PASSWORD="<your-auth-password>" # Default authentication password
VITE_AUTH_EMAIL="<your-auth-email>" # Default authentication email


#### 5. Run the development server
Start the development server with:
```bash
yarn dev
```
The application will be available at `http://localhost:5173`.

#### 6. Explore the application
Open your browser and navigate through the following routes:

- **`/`**: The home page displaying project documentation.
- **`/signin`**: A fake login mechanism is implemented here.  
  - To use it, add your credentials and a valid authorization token to the `.env` file.  
  - Upon successful login, a `token` will be stored in the user's cookies.  
  - The user will then be redirected to the home page, enabling access to the posts list.
- **`/posts`**: Displays a paginated list of posts.  
  - Users must be signed in to view this page.  
  - Posts include their associated reactions, and a "Show More" button enables navigation to subsequent pages.  
  - Pagination does not use URL search params, so refreshing the page will reset to the first page.
```

---

This format should fit perfectly into your README file. Let me know if there’s anything else you’d like to adjust or expand on!
