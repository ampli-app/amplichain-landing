import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const container = document.getElementById("root")!;

if (container.hasChildNodes()) {
  // Hydrate if pre-rendered
  createRoot(container).render(<App />);
} else {
  // Normal render
  createRoot(container).render(<App />);
}
