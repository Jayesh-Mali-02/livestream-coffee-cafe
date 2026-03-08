# Livestream Coffee

A premium, highly-responsive web app designed for a luxury cafe experience. Built with React.js, Vite, and custom CSS, it features a cinematic 3D parallax hero, an interactive staggered masonry gallery, a dynamic categorized CSS menu, and buttery-smooth 60fps animations.

## 🌟 Features
- **Cinematic Hero Display**: Engaging full-screen introductory section with parallax scroll.
- **Interactive Custom Masonry Gallery**: A complex, staggered Pinterest-style image grid featuring lazy load, 3D parallax hover cards, and immersive full-screen lightbox viewing.
- **Dynamic Restaurant Menu**: Dual-tab categorized menu (Drinks vs. Food) with horizontal mobile scrollable categories and elegant display cards.
- **Sleek Testimonial Carousel**: Trust-building animated review slider built purely in CSS.
- **Fully Responsive**: Optimized flawlessly for Desktop, Tablet, and Mobile devices with 60fps animations.

## 🛠️ Tech Stack
- **Framework:** React.js (v18+)
- **Build Tool:** Vite
- **Styling:** Custom Modular CSS + CSS Variables (`global.css`)
- **Icons:** Inline SVG React Components

## 🚀 Local Development

To run this project locally on your machine:

1. **Prerequisites**: Make sure you have [Node.js](https://nodejs.org/) installed.
2. **Install Dependencies**: Open the terminal in the project directory (`my-app`) and run:
   ```bash
   npm install
   ```
3. **Start Development Server**:
   ```bash
   npm run dev
   ```
   *Your local server will start, typically at `http://localhost:5173/`*

## 📦 Deployment (e.g., GitHub Pages)

This project uses Vite, so you cannot deploy the raw `src` folders directly. You must build it first.

1. **Build the Project**:
   ```bash
   npm run build
   ```
2. **Deploy the `dist` Folder**:
   The `npm run build` command creates a `dist/` folder containing your minified, production-ready `index.html` and `assets/`. 
   
   To deploy via GitHub manual upload:
   - Go to your GitHub repository.
   - Click "Upload files".
   - Drag and drop **only the contents inside the `dist` folder** (not the folder itself) into your repository.
   - Commit the changes.

---
*Designed & Developed by Livestream Coffee Dev Team.*
