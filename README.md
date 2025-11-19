# 📸 Picsum Gallery

A beautiful photo gallery web application built with React, showcasing high-quality images from [Picsum Photos](https://picsum.photos/).

## ✨ Features

- 🖼️ Browse beautiful photos with responsive grid layout
- 🔍 View photo details with full-size images
- 📱 Fully responsive design (mobile, tablet, desktop)
- ⚡ Fast loading with optimized image handling
- 🎨 Clean and modern UI design
- 🌐 Deployed on GitHub Pages

## 🚀 Demo

Check out the live demo: [Picsum Gallery](https://minhanh1202.github.io/picsum-gallery/)

## 🛠️ Technologies Used

- **React 19** - Frontend framework
- **React Router Dom** - Client-side routing
- **Vite** - Build tool and dev server
- **CSS3** - Styling with modern features
- **Picsum Photos API** - Source for random photos
- **GitHub Pages** - Deployment platform

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/MinhAnh1202/picsum-gallery.git
cd picsum-gallery
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 🏗️ Build & Deploy

Build for production:
```bash
npm run build
```

Deploy to GitHub Pages:
```bash
npm run deploy
```

## 📱 Project Structure

```
picsum-gallery/
├── components/          # Reusable React components
│   ├── PhotoCard.jsx   # Individual photo card
│   ├── Spinner.jsx     # Loading spinner
│   └── ErrorMessage.jsx # Error handling component
├── src/
│   ├── pages/          # Page components
│   │   ├── PhotoList.jsx    # Gallery listing page
│   │   └── PhotoDetail.jsx  # Photo detail page
│   ├── api.js          # API utilities
│   ├── App.jsx         # Main app component
│   └── main.jsx        # Application entry point
├── public/             # Static assets
└── index.html          # HTML template
```

## 🎨 Features Overview

### Photo Gallery
- Grid layout showing photo thumbnails
- Responsive design adapting to different screen sizes
- Loading states with spinners

### Photo Details
- Full-size photo viewing
- Photo information display
- Navigation back to gallery

### Error Handling
- Graceful error handling for API failures
- User-friendly error messages

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## 👨‍💻 Author

**MinhAnh1202**
- GitHub: [@MinhAnh1202](https://github.com/MinhAnh1202)
