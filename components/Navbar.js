import React, { useState } from 'react'
import { BsHandbag, BsCart2 } from 'react-icons/bs'
import Link from 'next/link'
import { useStateContext } from 'context/StateContext'
import SideBar from './SideBar'
import Cart from './Cart'

const Navbar = () => {
  const { openSection, setOpenSection, openNavItem, setOpenNavItem } =
    useStateContext()

  const { chicas, belleza } = openSection
  const { sidebar, carrito } = openNavItem
  return (
    <>
      <header>
        <nav>
          <div
            className="nav__item-container"
            onClick={() => setOpenNavItem({ sidebar: true, carrito: false })}
          >
            <BsHandbag />
            <p>Tienda</p>
          </div>
          <Link href="/">
            <a>
              <span>k</span>Store
            </a>
          </Link>
          <div
            className="nav__item-container"
            onClick={() => setOpenNavItem({ sidebar: false, carrito: true })}
          >
            <div className="nav__cart-qty">0</div>
            <BsCart2 />
            <p>Carrito</p>
          </div>
        </nav>
        <div className="nav__navigation">
          <div
            className={` ${chicas ? 'active' : ''} nav__navigation-item`}
            onClick={() => setOpenSection({ chicas: true, belleza: false })}
          >
            <p>Chicas</p>
          </div>
          <div
            className={` ${belleza ? 'active' : ''} nav__navigation-item`}
            onClick={() => setOpenSection({ chicas: false, belleza: true })}
          >
            <p>Belleza</p>
          </div>
        </div>
        {sidebar && <SideBar />}
        {carrito && <Cart />}
      </header>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Italiana&display=swap');

        header {
          position: sticky;
          display: flex;
          height: 10rem;
          border-bottom: 2px solid #f0f0f0;
          top: 0;
          width: 100%;
          background: #fff;
          justify-content: center;
          flex-direction: column;
          z-index: 10;
        }

        nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }

        .nav__item-container {
          display: flex;
          flex-direction: column;
          font-size: 1.25rem;
          align-items: center;
          margin: 1rem;
          padding: 0;
          cursor: pointer;
          transition: all 0.5s ease;
          padding: 0.2rem;
          border-radius: 50%;
        }
        .nav__item-container:hover {
          background: #f8f8f8;
          border-radius: 50%;
        }
        .nav__navigation {
          display: flex;
          margin: 0;
          width: 100%;
          justify-content: space-around;
          align-items: center;
          position: relative;
          margin-bottom: 1rem;
        }
        .nav__cart-qty {
          position: absolute;
          background: #ff0000;
          color: #fff;
          font-size: 0.85rem;
          display: grid;
          place-items: center;
          font-weight: 700;
          border-radius: 100%;
          height: 1.25rem;
          width: 1.25rem;
          right: 2rem;
          top: 1.25rem;
        }
        :global(svg) {
          margin: 0;
          font-size: 2rem;
        }
        p {
          margin: 0.5rem;
          font-weight: 600;
        }

        a {
          font-family: 'Italiana', serif;
          text-decoration: none;
          font-size: 3rem;
          color: #000;
        }
        span {
          font-size: 4.5rem;
        }
        .active {
          font-weight: 900;
          font-size: 1.25rem;
        }
        .nav__navigation-item {
          cursor: pointer;
          width: 50%;
          padding: 0.5rem;
          display: grid;
          place-items: center;
        }
        .underline {
          position: absolute;
          bottom: -1px;
          left: 0;
          right: 0;
          height: 1rem;
          background: #000;
          width: 100%;
        }
      `}</style>
    </>
  )
}

export default Navbar
