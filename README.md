# 💝 Valentine's Day Surprise Website

A magical, mobile-first Valentine's Day proposal website built with React and Vite. Features interactive elements, romantic animations, and a special gifts section to make your proposal unforgettable!

## ✨ Features

### 🎀 Main Proposal Screen
- Beautiful romantic design with pastel pink and lavender colors
- **YES button**: Triggers heart confetti animation and mobile vibration
- **NO button**: Playfully dodges away when clicked (impossible to press!)
- Floating hearts background animation

### 🎁 Three Special Gifts (After YES)
1. **💌 Romantic Poem** - With typing animation effect
2. **😘 Kisses** - Animated floating emoji kisses
3. **📸 Photo Memories** - Touch-swipe enabled photo carousel

### 📱 Mobile-First Design
- Optimized for phones (Android & iPhone)
- Touch-friendly buttons (minimum 48px)
- Smooth animations without lag
- Fully responsive (portrait & landscape)
- Works perfectly on desktop too!

## 🚀 Quick Start

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   - The app will run at `http://localhost:5173`
   - Test on mobile viewport using Chrome DevTools (F12)

## 🎨 Customization Guide

### 1. Personalize the Name

Edit `src/components/ProposalScreen.jsx`:

```javascript
const girlfriendName = "Beautiful" // Change to her name
```

### 2. Customize the Poem

Edit `src/components/PoemGift.jsx`:

```javascript
const poem = `Your custom poem here
Line by line
With all your love... 💕`
```

### 3. Add Your Photos

1. **Place your photos** in the `public/images/` folder
2. **Name them**: `couple1.jpg`, `couple2.jpg`, `couple3.jpg` (or any names)
3. **Update paths** in `src/components/MemoriesGift.jsx`:

```javascript
const photos = [
  '/images/couple1.jpg',
  '/images/couple2.jpg',
  '/images/couple3.jpg',
  // Add more photos as needed
]
```

**Supported formats**: JPG, PNG, WebP  
**Recommended size**: 1200x800px or similar aspect ratio

### 4. Optional: Add Background Music

1. **Add music file** to `public/music/` folder (create folder if needed)
2. **Update `App.jsx`** to add audio player:

```javascript
// In App.jsx, add this inside the App component:
const [isMuted, setIsMuted] = useState(true)

useEffect(() => {
  const audio = new Audio('/music/romantic-song.mp3')
  audio.loop = true
  if (!isMuted) {
    audio.play()
  }
  return () => audio.pause()
}, [isMuted])

// Add mute button in JSX
<button onClick={() => setIsMuted(!isMuted)}>
  {isMuted ? '🔇' : '🔊'}
</button>
```

## 📦 Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

## 🌐 Deploy to Vercel

### Method 1: Vercel CLI (Recommended)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Follow prompts:**
   - Login to your Vercel account
   - Confirm project settings
   - Deploy!

### Method 2: Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your Git repository (GitHub/GitLab/Bitbucket)
4. Vercel auto-detects Vite settings
5. Click "Deploy"

### Method 3: Deploy from GitHub

1. Push your code to GitHub
2. Connect repository to Vercel
3. Automatic deployments on every push!

**Your website will be live at**: `https://your-project-name.vercel.app`

## 🧪 Testing on Mobile

### Using Chrome DevTools (Desktop)
1. Open DevTools (F12)
2. Click "Toggle Device Toolbar" (Ctrl+Shift+M)
3. Select device: iPhone 12, Samsung Galaxy S21, etc.
4. Test portrait and landscape modes

### Testing on Real Device
1. Deploy to Vercel (or use ngrok for local testing)
2. Open the URL on your phone
3. Test all interactions:
   - NO button dodging
   - YES button and confetti
   - Photo carousel swipe
   - All animations

## 🎯 Project Structure

```
my-love/
├── public/
│   └── images/          # Your couple photos go here
├── src/
│   ├── components/
│   │   ├── ProposalScreen.jsx    # Main proposal with YES/NO buttons
│   │   ├── ProposalScreen.css
│   │   ├── GiftsSection.jsx      # Container for all gifts
│   │   ├── GiftsSection.css
│   │   ├── PoemGift.jsx          # Poem with typing animation
│   │   ├── PoemGift.css
│   │   ├── KissesGift.jsx        # Animated emoji kisses
│   │   ├── KissesGift.css
│   │   ├── MemoriesGift.jsx      # Photo carousel
│   │   └── MemoriesGift.css
│   ├── App.jsx          # Main app component
│   ├── App.css
│   ├── main.jsx         # React entry point
│   └── index.css        # Global styles & animations
├── index.html
├── package.json
├── vite.config.js
└── vercel.json          # Vercel deployment config
```

## 🎨 Color Palette

- **Pink Light**: `#FFE5EC`
- **Pink**: `#FFB3C6`
- **Blush**: `#FF8FAB`
- **Lavender**: `#E0BBE4`
- **Purple**: `#957DAD`
- **Text**: `#4A4A4A`

## 💡 Tips

1. **Test on actual mobile devices** before the big day
2. **Keep photos under 1MB** each for fast loading
3. **Use landscape photos** for better carousel display
4. **Pre-load the website** on her phone if internet is slow
5. **Have a backup plan** (screenshots) just in case!

## 🐛 Troubleshooting

### Photos not showing?
- Check file paths are correct
- Ensure photos are in `public/images/`
- File names are case-sensitive on some systems

### NO button not dodging?
- Make sure you're testing in a browser (not in editor preview)
- Try clearing browser cache

### Confetti not appearing?
- Check browser console for errors
- Ensure `react-confetti` is installed

## 📱 Browser Compatibility

- ✅ Chrome (Desktop & Mobile)
- ✅ Safari (iOS)
- ✅ Firefox (Desktop & Mobile)
- ✅ Edge
- ✅ Samsung Internet

## 💖 Make It Special

This is more than just a website - it's a digital love letter! Take time to:
- Write a heartfelt poem
- Choose your best photos together
- Test everything thoroughly
- Maybe add your song lyrics in the poem
- Practice the timing of when to show her

## 📄 License

This is a personal project for your Valentine! Feel free to customize it however you like. 💕

---

**Made with ❤️ for love**

Good luck with your proposal! 🎉💝
