# 3D Parallax Website

A visually engaging website featuring a 3D parallax effect built with vanilla JavaScript and CSS. The background elements move at varying speeds in response to mouse movements, creating a dynamic sense of depth and immersion.

## Features

- **3D Parallax Effect:** Background layers (mountains, fog, sky) move relative to the mouse position to simulate a 3D environment.
- **Responsive Design:** Adjusts layout and font sizes for different screen widths (desktop, tablet, mobile).
- **Smooth Animations:** Includes entry animations for the header and text, as well as hover effects for navigation elements.
- **Depth Layering:** Utilizes CSS z-index and specific positioning to stack multiple images (fog, mountains, sun rays) for a realistic scene.

## Technologies Used

- **HTML5**
- **CSS3** (Custom properties, Flexbox, Media Queries, Animations)
- **JavaScript** (ES6+, Event Listeners, Intersection Observer)

## How to Run

1. Clone the repository or download the source code.
2. Locate the `index.html` file in the root directory.
3. Open `index.html` in any modern web browser (Chrome, Firefox, Safari, etc.).

## Project Structure

- `js/app.js`: Handles the parallax logic, mouse move events, and intersection observers for animations.
- `style.css`: Contains all styling, variables for z-indices, and responsive media queries.