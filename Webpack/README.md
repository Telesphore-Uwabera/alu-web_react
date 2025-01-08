---

# Webpack Tasks

This repository contains a series of tasks related to Webpack. The tasks focus on setting up Webpack, configuring it for development and production environments, managing static assets, and improving performance.

---

## Task 0: Basic Webpack Setup

In this task, we learned how to set up a basic Webpack project. We focused on configuring the Webpack build process, including:
- Installing necessary dependencies.
- Configuring the `webpack.config.js` file.
- Running the build process to bundle the code.

### Key Features:
- Set up Webpack and Babel.
- Configured basic JavaScript and CSS bundling.

---

## Task 1: Adding Multiple Entry Points

Task 1 expanded on the basic Webpack setup by configuring multiple entry points for the application. The goal was to divide the application into modular bundles that can be loaded separately.

### Key Features:
- Created separate bundles for the header, body, and footer.
- Configured Webpack to handle multiple entry points.

---

## Task 2: Adding a Development Server and Code Splitting

In Task 2, we added a development server to serve the application during development. We also introduced code splitting to optimize the bundling process by dividing the JavaScript code into smaller chunks.

### Key Features:
- Set up the Webpack Dev Server.
- Added hot module replacement (HMR) for better development experience.
- Configured code splitting to divide the JavaScript code into smaller chunks.

---

## Task 3: Modularizing the Application

Task 3 required us to further modularize the application, splitting the code into three parts: header, body, and footer. Each part has its own CSS and JavaScript files. We also added external libraries like jQuery and Lodash to these modules and configured Webpack to handle them properly.

### Key Features:
- Created `header`, `body`, and `footer` modules, each containing its own CSS and JavaScript.
- Used jQuery and Lodash libraries in the respective modules.
- Set up Webpack to handle module bundling, asset management, and clean the build directory.
- Configured Webpack to use `html-webpack-plugin` to generate an `index.html` file.

---

## Setup Instructions

### Prerequisites:
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v14.0 or higher)
- [npm](https://www.npmjs.com/)

### Installation:

1. Clone the repository:

   ```bash
   git clone https://github.com/Telesphore-Uwabera/alu-web_react.git
   cd alu-web_react/webpack
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. To start the development server:

   ```bash
   npm run start-dev
   ```

   This will start the server and open the application in the browser at [http://localhost:8564/](http://localhost:8564/).

4. To build the project:

   ```bash
   npm run build
   ```

   This will create the production-ready build in the `public` folder.

---

## Folder Structure

```
webpack/
│
├── task_3/
│   ├── modules/
│   │   ├── body/
│   │   │   ├── body.css
│   │   │   └── body.js
│   │   ├── footer/
│   │   │   ├── footer.css
│   │   │   └── footer.js
│   │   ├── header/
│   │   │   ├── header.css
│   │   │   └── header.js
│   ├── public/
│   ├── node_modules/
│   ├── package.json
│   ├── webpack.config.js
│   └── index.html
│
└── README.md
```

---

## Troubleshooting

- **Missing dependencies:** If you encounter errors about missing modules (e.g., `jquery` or `lodash`), make sure the required packages are installed by running `npm install`.
  
- **Module parse failed:** If you get errors like "Module parse failed," ensure you have the necessary loaders installed for handling CSS and JavaScript files.

- **Webpack configuration errors:** Double-check your `webpack.config.js` file for any typos or misconfigurations. Ensure paths are correctly set and modules are correctly referenced.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```
