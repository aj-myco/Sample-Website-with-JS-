const subtopics = {
    'c_language': ['Pointers', 'Functions', 'Structures', 'File Handling'],
    'python': ['Data Types', 'OOP Concepts', 'Modules', 'File I/O'],
    'html': ['Elements', 'Attributes', 'Forms', 'Multimedia'],
    'javascript': ['DOM Manipulation', 'Events', 'Async Programming', 'ES6 Features'],
    'php': ['Variables', 'Arrays', 'Sessions', 'Database Handling']
};

const subtopicContent = {
    'Pointers': 'Pointers allow direct memory access in C. They store memory addresses.',
    'Functions': 'Functions help modularize code for better reusability and readability.',
    'Structures': 'Structures group related variables of different data types under one name.',
    'File Handling': 'File handling allows reading from and writing to files in C.',
    'Data Types': 'Python has dynamic data types like int, float, str, and more.',
    'OOP Concepts': 'Python supports OOP concepts like classes, inheritance, and polymorphism.',
    'Modules': 'Modules are Python files containing functions or variables.',
    'File I/O': 'File I/O in Python involves reading/writing files with built-in functions.',
    'Elements': 'HTML elements represent the structure of web pages.',
    'Attributes': 'Attributes provide additional information about HTML elements.',
    'Forms': 'HTML forms collect user input and interact with servers.',
    'Multimedia': 'HTML supports embedding images, videos, and audio.',
    'DOM Manipulation': 'JavaScript can access and modify HTML and CSS using the DOM.',
    'Events': 'JavaScript can handle user events like clicks and key presses.',
    'Async Programming': 'Async operations in JavaScript handle tasks like API calls.',
    'ES6 Features': 'ES6 introduced features like let, const, arrow functions, etc.',
    'Variables': 'Variables store data values in PHP, prefixed with a $.',
    'Arrays': 'Arrays hold multiple values in a single variable in PHP.',
    'Sessions': 'Sessions manage user data across multiple PHP pages.',
    'Database Handling': 'PHP connects to databases like MySQL to store data.'
};

function loadContent(section) {
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    sidebar.innerHTML = '';
    sidebar.style.display = (section === 'home' || section === 'about') ? 'none' : 'block';
    mainContent.style.marginLeft = sidebar.style.display === 'block' ? '1vw' : '1vw';
    mainContent.innerHTML = section === 'home' ? '<h1>Welcome to the M-Tech Home Section</h1><p> Click the navigations above to explore various programming topics.</p>' :
                             section === 'about' ? '<h1>About Us</h1><p>M-Tech site is dedicated to providing programming knowledge.</p>' :
                             `<h1>${section.toUpperCase()} Section</h1><p>Select a subtopic to learn more.</p>`;

    if (subtopics[section]) {
        sidebar.innerHTML = `<h2>${section.toUpperCase()} Subtopics</h2><ul>${subtopics[section].map(topic => `<li onclick="showSubtopic('${topic}')">${topic}</li>`).join('')}</ul>`;
    }
}

function showSubtopic(topic) {
    const mainContent = document.querySelector('.main-content');
    mainContent.innerHTML = `<h1>${topic}</h1><p>${subtopicContent[topic]}</p>`;
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            loadContent(event.target.getAttribute('href').split('.')[0]);
        });
    });
    loadContent('home');
});