# LuxeStay-Hotel-Restaurant

🏨 LuxeStay - Hotel & Restaurant Website
A elegant, fully responsive front-end website for a luxury hotel and restaurant business. Built with vanilla HTML, CSS, and JavaScript.

https://img.shields.io/badge/status-complete-brightgreen
https://img.shields.io/badge/license-MIT-blue
https://img.shields.io/badge/HTML-5-orange
https://img.shields.io/badge/CSS-3-blue
https://img.shields.io/badge/JavaScript-ES6-yellow

📋 Table of Contents
Overview

Features

Project Structure

Pages & Sections

Design System

Interactive Features

Installation

Usage

Browser Support

Future Enhancements

License

🎯 Overview
LuxeStay is a modern, single-page hotel and restaurant website designed to provide an immersive user experience. It showcases the property's rooms, dining options, amenities, and brand story through a clean, luxury-focused design.

Live Demo
Open index.html directly in your browser or run with a local server.

✨ Features
Core Pages
Home - Hero section, featured rooms, restaurant preview, amenities, gallery, testimonials

Rooms - Three room types with details, amenities, and booking buttons

Restaurant - Fine dining preview, featured dishes, opening hours

About - Hotel history, mission, chef profile, awards

Contact - Contact form, Google Maps placeholder, contact details

Key Functionality
✅ Fully responsive (Mobile, Tablet, Desktop)

✅ Dark mode toggle

✅ Room booking modal (frontend only)

✅ Testimonial carousel

✅ Image gallery with hover effects

✅ Contact form validation

✅ Back-to-top button

✅ Sticky navigation

✅ Smooth scrolling

✅ Hamburger menu for mobile

✅ Interactive hover animations

📁 Project Structure
text
hotel-restaurant-website/
│
├── index.html                 # Main file (all-in-one HTML)
│
├── css/
│   ├── style.css             # (Optional - can extract from inline)
│   └── responsive.css        # (Optional - can extract from inline)
│
├── js/
│   └── script.js             # (Optional - can extract from inline)
│
└── images/
    ├── hero.jpg              # (Add your images)
    ├── room1.jpg
    ├── room2.jpg
    ├── restaurant.jpg
    ├── food1.jpg
    ├── chef.jpg
    └── gallery/
        ├── lobby.jpg
        ├── room.jpg
        └── ... (8 gallery images)
Note: This is a single-file implementation for simplicity. All CSS and JavaScript are included inline.

🎨 Design System
Color Palette
Color Name	Hex Code	Usage
Gold	#C8A45D	Primary accents, buttons
Dark Navy	#0F172A	Headers, footer, text
White	#FFFFFF	Backgrounds, cards
Light Gray	#F5F5F5	Section backgrounds
Dark Gray	#374151	Secondary text
Typography
Headings: Playfair Display (serif) - Elegant, luxury feel

Body: Poppins (sans-serif) - Clean, modern readability

Icons
Font Awesome 6 (free version)

📄 Pages & Sections
1. Home Page
Navigation: Logo, Home, Rooms, Restaurant, Gallery, About, Contact, Book Now button

Hero: Large banner with tagline and CTAs

Featured Rooms: 3 room cards with image, price, description, amenities, and book button

Restaurant Preview: Image + text layout with "View Menu" CTA

Amenities: Grid layout with icons (WiFi, Pool, Gym, Spa, etc.)

Gallery: 8-image grid with hover effects

Testimonials: 3 customer reviews with star ratings

Footer: Quick links, services, newsletter signup, social media

2. Rooms
The room cards display:

Room image (placeholder SVGs provided)

Room name (Deluxe, Suite, Executive)

Price per night

Description

Amenities list with icons

"Book Now" button

3. Restaurant
Hero image section

Fine dining description

Featured dishes

Opening hours (placeholder)

4. About
Hotel history and mission

Chef profile

Awards and recognition

5. Contact
Contact form with validation

Contact information (phone, email, address)

Google Maps placeholder

🎮 Interactive Features
JavaScript Functionality
Mobile Navigation - Hamburger menu toggle

Booking Modal - Frontend-only reservation form

Dark Mode Toggle - Switch between light/dark themes

Back-to-Top Button - Appears after scrolling 500px

Contact Form Validation - Prevents empty submissions

Smooth Scrolling - For internal navigation links

Responsive Grids - Dynamic layout changes

Animations
Fade-in on page load

Hover zoom on images

Button hover effects (translate + shadow)

Smooth scroll behavior

Testimonial carousel (horizontal scroll)

🚀 Installation
Quick Start (No server needed)
Download index.html

Double-click to open in browser

With Local Server (Recommended)
bash
# Clone or download the project
git clone https://github.com/yourusername/hotel-restaurant-website.git
cd hotel-restaurant-website

# Using Python 3
python -m http.server 8000

# Using Node.js
npx serve

# Using PHP
php -S localhost:8000
VS Code Setup
Install VS Code

Install Live Server extension

Open index.html

Right-click → "Open with Live Server"

📱 Responsive Design
Device	Breakpoint	Layout Adjustments
Desktop	> 992px	4-column gallery, 3 room cards, horizontal navbar
Tablet	768px - 992px	2-column gallery, 2 room cards
Mobile	< 768px	Single column, hamburger menu
🌐 Browser Support
✅ Chrome (latest)

✅ Firefox (latest)

✅ Safari (latest)

✅ Edge (latest)

✅ Opera (latest)

✅ Mobile browsers

🔧 Future Enhancements
Backend integration for booking system

Real image gallery with lightbox

Restaurant menu tabs (Breakfast, Lunch, Dinner, Drinks)

Room search/filter functionality

Newsletter subscription backend

FAQ accordion section

Multi-language support

Online payment integration

Customer reviews submission

📸 Adding Real Images
Create an images/ folder in the project root

Add your images with these filenames:

hero.jpg (1920x800 recommended)

room1.jpg, room2.jpg (600x400)

restaurant.jpg (600x400)

food1.jpg, food2.jpg, food3.jpg

chef.jpg (400x400)

Gallery: lobby.jpg, room.jpg, restaurant.jpg, pool.jpg, gym.jpg, garden.jpg, reception.jpg, dining.jpg

Replace the SVG data URIs in the HTML with actual image paths:

html
<!-- Before -->
<img src="data:image/svg+xml;base64,...">

<!-- After -->
<img src="images/room1.jpg">
🤝 Contributing
Fork the repository

Create your feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some AmazingFeature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

👏 Acknowledgments
Font Awesome for icons

Google Fonts for typography (Playfair Display, Poppins)

Inspiration from luxury hotel websites

📞 Support
For support, email hello@luxestay.com or create an issue in the repository.

Built with ❤️ for luxury hospitality experiences

