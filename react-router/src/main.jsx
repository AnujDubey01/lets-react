import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Change made by Amazon Q - Fixed import paths to match actual file locations
import Layout from './layout.jsx'
import Home from './home/home.jsx'
import About from './about/about.jsx'
import Contact from './contact/contact.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Change made by Amazon Q - Fixed component capitalization
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
