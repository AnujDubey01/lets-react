import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

// Change made by Amazon Q - Fixed import paths to match actual file locations
import Layout from './layout.jsx'
import Home from './home/home.jsx'
import About from './about/about.jsx'
import Contact from './contact/contact.jsx'
import User from './user/user.jsx'
import Github, {githubInfoLoader} from './github/github.jsx'



// there are two ways to define routes in react-router-dom v6.4+
// 1. Using createBrowserRouter (commented out below)
// 2. Using JSX inside App.jsx (currently being used)
/*
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, 
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
*/
// Using createRoutesFromElements
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userid" element={<User />} />
      <Route path="github" element={<Github />} loader={githubInfoLoader} />
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
