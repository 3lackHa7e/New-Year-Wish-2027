# ✨ New Year Wish 2027

A beautiful, interactive web application designed to count down the moments to **2027** while spreading joy with randomized, heartwarming New Year wishes.


## 🌟 Features

* **⏱️ Live Countdown:** A real-time countdown timer (Days, Hours, Minutes, Seconds) ticking towards Jan 1, 2027.
* **✨ Wish Generator:** Click the "Get Another Wish" button to receive a unique, randomized wish paired with a cute icon.
* **🎨 Aesthetic Design:** Soft pastel colors, floating animations, and a clean, responsive UI.
* **⚛️ Modern Tech Stack:** Built with React, Vite, and Lucide React icons for high performance.

## 🛠️ Tech Stack

* **Framework:** [React](https://reactjs.org/)
* **Build Tool:** [Vite](https://vitejs.dev/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Icons:** [Lucide React](https://lucide.dev/)

## 🚀 Getting Started

Follow these steps to run the project locally on your machine.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed.

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/3lackHa7e/New-Year-Wish-2027.git
cd New-Year-Wish-2027

```


2. **Install dependencies**
```bash
npm install

```


3. **Run the development server**
```bash
npm run dev

```


4. **Open in Browser**
Visit `http://localhost:5173` to see the app live!

## 📝 How to Customize Wishes

Want to add your own custom wishes? It's easy!

1. Open the file where your wishes are stored (e.g., `src/App.jsx` or `src/data/wishes.js`).
2. Locate the `wishes` array.
3. Add a new object following this format:

```javascript
import { Rocket } from 'lucide-react'; // Don't forget to import the icon!

const wishes = [
  // ... existing wishes
  { 
    icon: Rocket, 
    text: "Soar to new heights in 2027! 🚀", 
    color: "text-orange-500" 
  },
];

```

## 🤝 Contributing

Contributions are welcome! If you have a cool idea for a feature or a new design:

1. Fork the project.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

<p align="center">
Made with ❤️ by <a href="[https://github.com/3lackHa7e](https://github.com/3lackHa7e)">Abid</a> for a wonderful 2027!
</p>
