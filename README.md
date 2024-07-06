# REST CRUD Application

## Overview

This project is a simple RESTful CRUD (Create, Read, Update, Delete) application built using Node.js and Express.js. It is designed as a blogging platform "QUORA" where users can create, view, edit, and delete posts.
![image](https://github.com/basitsaiyed/RESTful_CURDoperation_Quora/assets/91619822/623c3c2a-6840-4f7d-a6eb-d32558354656)


## Features

- **Create**: Add new posts with a username and content.
- **Read**: View a list of all posts and see each post in detail.
- **Update**: Edit the content of existing posts.
- **Delete**: Remove posts that are no longer needed.

## Technologies Used

- **Node.js**: Server-side JavaScript runtime.
- **Express.js**: Web framework for Node.js.
- **EJS (Embedded JavaScript Templates)**: For dynamic HTML rendering.
- **UUID**: Unique identifier generation for each post.
- **Method-Override**: To support HTTP methods like PUT and DELETE.
- **HTML/CSS**: For structuring and styling web pages.
- **JavaScript**: Client-side interactivity and logic.

## Getting Started

### Prerequisites

- Node.js installed on your machine.

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/your-repository.git
    ```
2. Navigate to the project directory:
    ```bash
    cd your-repository
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Start the server:
    ```bash
    node index.js
    ```

### Usage

1. Open your browser and navigate to `http://localhost:8080/posts`.
2. Use the interface to create, view, edit, and delete posts.

## Project Structure

- `index.js`: Main server file.
- `views/`: Contains EJS templates (`index.ejs`, `new.ejs`, `edit.ejs`, `show.ejs`).
- `public/`: Contains static files (CSS, images).
- `style.css`: Stylesheet for the application.

## Screenshots

(Add screenshots of your application here)

## Learnings

- **Express Routing and Middleware**: Efficient request and response handling.
- **Dynamic Templating with EJS**: Rendering dynamic web content.
- **Form Handling**: Managing data flow between client and server.
- **HTTP Methods**: Understanding RESTful principles and HTTP methods.

## Future Improvements

- Adding user authentication.
- Implementing a database for persistent storage.
- Enhancing UI with more advanced CSS or a frontend framework like React.

## Contributing

Feel free to fork this repository and submit pull requests. Any contributions, issues, and feature requests are welcome!

## License

This project is licensed under the MIT License.

## Contact

For any questions or suggestions, feel free to reach out via [LinkedIn](https://www.linkedin.com/in/basit-saiyed/).

---

Thank you for checking out my project!
