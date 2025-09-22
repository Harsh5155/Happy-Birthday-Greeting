import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Change this to your JPEG file in public folder
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App 
      name="Anjali"
      message="Happy Birthday Anjali !!! You're an amazing person, and I'm so lucky to know you. Wishing you a day filled with joy, laughter, and everything you wished for. Cheers to another fantastic year! 💖 Many more birthdays to celebrate together Stay Blessed Our childhood friendship have grown into a Treasure HAPPY 20 th"
      imageUrl="/my_photo.jpeg" // <-- Put your jpeg in public folder
    />
  </React.StrictMode>
);


