Gemstone Store React Project
Project Overview:

This project is a React-based Gemstone Store Application developed in multiple phases to understand 
core React concepts step-by-step.

PHASE-1
Basic React Application
Objective
    Build the basic structure of the application using React.
Features Implemented
    Project setup using Vite / React
    Folder structure creation
Components:
    Navbar
    Home
    About
    Cart
    Footer
    Routing using React Router DOM
    Basic UI design using Tailwind CSS
    JSON Server integration for products
    Product listing using reusable Card component


PHASE-2
Controlled & Uncontrolled Registration Forms
Objective
    Implement user registration and login forms using controlled and uncontrolled components.
Features Implemented
  Controlled Components
    Registration form using useState
  Input fields:
    Name
    Email
    Password
    Real-time state updates
    Form submission handling

  Uncontrolled Components
    Registration form using useRef
    Direct DOM access
    Form data extraction using refs

PHASE-3
Validations
Objective
  Add validation logic to forms to ensure correct user input.
Features Implemented
  Email validation using Regex
  Password validation rules:
    Minimum length
    Special characters
  Required field validation
  Error message display
  Login authentication using localStorage
  Protected routes using HOC / ProtectedRoute

PHASE-4
Flux Architecture & Dependency Injection (DI)
Objective
  Implement Flux architecture for state management and understand Dependency Injection.
Features Implemented
  Dispatcher
  Actions
  Store
  Event listeners
  Cart state management using Flux
  Add to Cart / Remove from Cart functionality
Dependency Injection (DI)
  Injecting dependencies (CartStore, Actions) into components
  Loose coupling between components and business logic
  Better scalability and maintainability
