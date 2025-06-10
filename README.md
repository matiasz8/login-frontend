# Login Frontend

A simple login frontend application built with React, Vite, TypeScript, and Tailwind CSS.

## 🧱 Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- PNPM (package manager)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/matiasz8/login-frontend.git
cd login-frontend
```

### 2. Install nvm (Node Version Manager)

If you don't have nvm installed, follow the instructions from the official [repo](https://github.com/nvm-sh/nvm)

### 3. Install Node

```bash
nvm install node
```

### 4. Install pnpm globally and use

```bash
npm install -g pnpm
nvm use
```

### 5. Install dependencies

```bash
pnpm install
```

### 6. Run the development server

```bash
pnpm dev
```


📦 Available Scripts

pnpm dev: start the development server

pnpm build: generate a production build

pnpm preview: preview the production build locally

---

### 📂 Project Structure

├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # Main views like the Login page
│   ├── styles/         # Global styles
│   └── main.tsx        # Entry point
├── public/             # Static assets
├── index.html          # Main HTML file
├── tailwind.config.js  # Tailwind configuration
└── vite.config.ts      # Vite configuration
