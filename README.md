# Duke Chord Workshop

## 1) Project Description
The Duke Chord Workshop is a client-side JavaScript application designed to facilitate the management and interaction with musical instruments and classes. It provides a dynamic user interface for browsing, enrolling, and managing users, instruments, and educational classes.

**Target Users and Use Cases:**
*   **Students:** To browse available musical classes, view instrument details, and potentially register for classes.
*   **Instructors/Administrators:** To manage user accounts, add/edit instruments, create/update classes, and track student enrollment.
*   **General Music Enthusiasts:** To explore different instruments and educational offerings.

## 2) Architecture Documentation

### High-Level Architecture Overview
The application follows a **Client-Server Architecture** where a frontend JavaScript application communicates with a simple backend JSON server. The frontend is built using a **Modular/Component-Based Architecture** with a clear separation of concerns. State is managed centrally on the client-side and communicated via an **Event-Driven Communication (Observer/Publish-Subscribe)** model, triggering UI re-renders based on state changes. Client-side routing is implemented without a dedicated framework, relying on URL query parameters to define views.

### Key Design Patterns
*   **Module Pattern:** Each JavaScript file in `src/scripts/` acts as a module, encapsulating logic and exposing APIs.
*   **Observer Pattern / Publish-Subscribe:** Used for inter-component communication through custom DOM events (e.g., `stateChanged`).
*   **Singleton Pattern (Implicit):** StateManager modules effectively act as singletons, managing single instances of data domains.
*   **Factory Pattern (Implicit for UI):** UI functions generate dynamic HTML strings based on data inputs.

### State Management Strategy
State management is client-side, centralized, and event-driven.
*   **Centralized Data Stores:** Located in `src/scripts/data/`, modules like `UserStateManager.js` and `InstrumentsStateManager.js` maintain internal state objects.
*   **API Interaction:** StateManagers handle `fetch` requests to the backend API, updating their state upon successful responses.
*   **Controlled Access:** Getters provide read-only access, preventing direct mutation. Setters/mutators handle state modifications.
*   **Event-Driven Re-rendering:** A `CustomEvent("stateChanged")` is dispatched after significant state changes, triggering a full UI re-render through a global listener in `src/scripts/main.js`.

### Routing Approach
Custom client-side routing is implemented without a dedicated framework.
*   **URL as View State:** URL query parameters (`?view=instrument&instrumentId=X`) define the current view.
*   **`ViewStateManager.js`:** Manages URL updates using `history.pushState()` and dispatches `PopStateEvent` to notify listeners. It also parses URL parameters.
*   **`main.js` Listener:** Listens for `popstate` events and dispatches a `stateChanged` event, initiating UI re-rendering based on the new URL.

### Component Structure
UI elements are functional, generating HTML strings for dynamic rendering.
*   **Functional Components:** JavaScript functions (e.g., `InstrumentList()`, `LoginForm()`) serve as components, retrieving data from StateManagers and constructing HTML strings using template literals.
*   **Component Composition:** Parent components embed child components by calling their functions and concatenating their returned HTML.
*   **DOM Injection:** The resulting complete HTML string from the root component (`DukeChord()`) is injected into the `<div id="content"></div>` element in `src/index.html` by `src/scripts/main.js`. This process is re-triggered by the `stateChanged` event.

## 3) Technology Stack

### Frontend Technologies
*   **HTML5, CSS3, JavaScript (ES6+):** Core web technologies for structuring content, styling, and client-side interactivity. Chosen for lightweight performance and broad browser compatibility without heavy framework dependencies.
*   **Template Literals:** Used extensively for generating dynamic HTML strings within JavaScript components.

### Backend Setup
*   **Node.js (server.js):** A simple JSON-serving backend using Node.js, providing RESTful endpoints to interact with persistent data.
*   **JSON Server (implied):** While `server.js` acts as a basic server, the use of `api/database.json` suggests a simple JSON API backend, possibly managed by a library like `json-server` (though not explicitly stated, it's a common pattern for local development).

### Data Storage Approach
*   **`api/database.json`:** A local JSON file serves as the persistent data storage for the backend.
*   **Client-side State:** Frontend data is stored in JavaScript objects within StateManager modules.

## 4) Code Organization

### Directory Structure Explanation
The project is structured with a clear separation of concerns, primarily divided into `src/` for frontend assets and `api/` for backend data.

*   `./`: Root directory containing project configuration, backend server, and main documentation.
*   `api/`: Contains `database.json` which serves as the persistent data store for the backend.
*   `src/`: Houses all frontend source code and assets.
    *   `src/audio/`: Stores audio files used in the application (e.g., instrument sounds).
    *   `src/images/`: Contains all image assets used for UI elements and instrument representations.
    *   `src/scripts/`: The core JavaScript application logic.
        *   `src/scripts/auth/`: Modules related to user authentication (login, registration).
        *   `src/scripts/classes/`: Modules for managing and displaying classes.
        *   `src/scripts/data/`: Centralized state management modules (e.g., `ClassStateManager`, `InstrumentsStateManager`, `UserStateManager`, `ViewStateManager`).
        *   `src/scripts/employees/`: Modules potentially related to employee management (if applicable to the workshop context).
        *   `src/scripts/instruments/`: Modules for managing and displaying musical instruments.
        *   `src/scripts/nav/`: Modules for navigation components (header, navbar).
        *   `src/scripts/main.js`: The main application entry point and orchestrator.
        *   `src/scripts/DukeChord.js`: The root component that renders the main application UI.
        *   `src/scripts/Home.js`: Component for the application's home view.
    *   `src/styles/`: Contains all CSS stylesheets for the application.

### Purpose of Each Major Folder
*   **`api/`**: Manages the application's persistent data.
*   **`src/`**: Contains the entire frontend application.
    *   **`src/audio/`**: Provides audio resources for interactive elements.
    *   **`src/images/`**: Provides visual resources for the UI.
    *   **`src/scripts/`**: Houses all business logic, component definitions, and state management for the frontend.
    *   **`src/styles/`**: Defines the visual presentation of the application.

## 5) Development Setup

### Installation Instructions
1.  **Clone the repository:**
    ```bash
    git clone <repository_url>
    cd duke-chord-workshop
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or if using yarn
    # yarn install
    ```

### How to Run the Application
1.  **Start the backend server:**
    ```bash
    npm run api
    # or node server.js directly
    ```
    This will typically run the JSON server on `http://localhost:8088` (or similar, check `server.js` or `package.json` for the exact port).
2.  **Open the frontend:**
    Open the `src/index.html` file directly in your web browser. There is no separate build step for the frontend as it uses vanilla JavaScript, HTML, and CSS.

### How to Run the Server
The server can be started using the `npm run api` command, which is defined in `package.json`. Alternatively, you can run the `server.js` file directly using Node.js:
```bash
node server.js
```

## 6) Key Features

### List of Implemented Features
*   **User Authentication:**
    *   User Registration: Allows new users to create accounts.
    *   User Login/Logout: Securely sign in and out of the application.
*   **Instrument Management:**
    *   Browse Instruments: View a list of all available musical instruments.
    *   Instrument Details: Access detailed information about each instrument.
    *   Instrument Forms: (Implied from `InstrumentForm.js`) Functionality to add or edit instrument details.
*   **Class Management:**
    *   Browse Classes: View a list of available classes.
    *   Class Details: Access detailed information about each class.
    *   Class Enrollment: (Implied) Functionality to enroll in classes.
*   **Navigation:**
    *   Dynamic Header and Navigation Bar: Provides intuitive navigation throughout the application.
*   **Dynamic UI Rendering:**
    *   The application dynamically renders the UI based on the current application state and URL.
