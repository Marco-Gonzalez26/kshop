import React from 'react'
import styles, { globalStyles } from './styles'
import Navbar from 'components/Navbar'
import { FaTiktok, FaInstagram, FaFacebookSquare } from 'react-icons/fa'
import kate1 from '../../assets/KATE1.png'
import SideBar from 'components/SideBar'
export default function AppLayout({ children }) {
  return (
    <>
      <div>
        <section className="right__section">
          <h1>"Foto tuya"</h1>
          <img
            src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt="kate"
          />
        </section>
        <main>

          <Navbar />

          {children}
        </main>
        <section className="left__section">
          <h1>Sigueme en mis redes sociales!</h1>
          <a href="/" className="tiktok">
            <FaTiktok /> Tiktok
          </a>
          <a href="/" className="instagram">
            <FaInstagram /> Instagram
          </a>
          <a href="/" className="facebook">
            <FaFacebookSquare /> Facebook
          </a>
        </section>
      </div>
      <style jsx>{styles}</style>
      <style jsx global>
        {globalStyles}
      </style>
    </>
  )
}
