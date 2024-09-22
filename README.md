MedDoc - Medication Chatbot
MedDoc is a web-based medication chatbot designed to help patients keep track of their medication schedules, dosages, and possible side effects. This chatbot uses PHP and MySQL to dynamically store and retrieve intents (questions/commands) and responses, providing personalized interaction for users.

Key Features:
Dynamic Intent Management: Intents (user queries) and responses are stored in a MySQL database, allowing easy updates and scalability without hardcoding.
Database Integration: PHP scripts are used to manage and fetch intents and medication schedules, making the chatbot adaptable and data-driven.
Interactive User Interface: The chatbot interface is built with HTML, CSS, and JavaScript to provide a simple and intuitive interaction experience.
Responsive Design: The chatbot is mobile-friendly and optimized for use across devices.
Advanced Intent Matching: Intents such as greetings, medication schedules, dosages, and side effects are matched based on user input, providing appropriate responses.
Scalable Architecture: The chatbot can be extended to include more intents or integrate advanced AI functionality such as Dialogflow.
Technologies Used:
Frontend: HTML, CSS, JavaScript (for chatbot UI and handling user input).
Backend: PHP (for server-side logic and database interaction).
Database: MySQL (to store user intents, medication schedules, and responses).
Future Enhancements:
User Authentication: Adding login functionality to provide personalized medication schedules based on the user’s history.
Reminders & Notifications: Implement real-time reminders for medication schedules via email or SMS using services like Twilio or SendGrid.
Integration with NLP: Expanding the chatbot using APIs such as Dialogflow for more natural and conversational interactions.
Setup Instructions:
Clone the Repository:

bash
Copy code
git clone https://github.com/your-repo/meddoc-chatbot.git
Setup Database:

Import the meddoc_db.sql file to your MySQL server to create the necessary tables.
Configure your database connection in the config.php file.
Run Locally:

Ensure you have PHP and MySQL installed.
Start a local server (e.g., XAMPP, WAMP, or MAMP).
Open the chatbot in your browser via the local server.
Contribute:

To add more intents, modify the intents table in the MySQL database or use the provided admin dashboard (if implemented).

