import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LandingPage from './components/ui/LandingPage.jsx';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Skills from './components/ui/skills.jsx';
import Projects from './components/ui/projects.jsx';
import Socials from './components/ui/socials.jsx';
import NotFound from "./notfound.jsx";


const router = createBrowserRouter([
  {path: "/",element: <LandingPage  />},
  {path: "/skills",element: <Skills/>},
  {path: "/projects",element: <Projects/>},
  {path: "/socials",element: <Socials/>},
  {path: "*",element: <NotFound/>},


])



createRoot(document.getElementById('root')).render(
    <main>
        <RouterProvider router = {router}/>
     
    </main>
)
