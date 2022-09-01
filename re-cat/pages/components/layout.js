// import Navbar from '../navbar'
import Navbar from "../navbar"
import Footer from '../footer'
import { useState } from "react"

export default function Layout({ children }) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <Navbar onChange={(isOpen)=>{setNavbarOpen(isOpen)}} />
      <main>{children}</main>
      <Footer hidden={navbarOpen}/>
    </>
  )
};