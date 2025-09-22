import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Render the App with your emoji message and image
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App 
      name="Anjali"
      message={`🎉🎂 Happy Birthday Anjali!!! 🎂🎉
You're an amazing person 🌟, and I'm so lucky to know you 🤗.
Wishing you a day filled with joy 😄, laughter, and everything you wished for ✨.
Cheers to another fantastic year! 🥳💖
Many more birthdays to celebrate together 🥂🎈
Stay Blessed 🙏💫
Our childhood friendship has grown into a Treasure 💛
HAPPY 20th Birthday! I hope you loved your birthday gift 🎊🎁🎉`}
      imageUrl="/my_photo.jpeg" // <-- Put your jpeg in public folder
    />
  </React.StrictMode>
);




