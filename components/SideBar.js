import React from 'react'
import { useStateContext } from 'context/StateContext'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { motion } from 'framer-motion'

const SideBar = () => {
  const { openNavItem, setOpenNavItem } = useStateContext()
  const { sidebar } = openNavItem
  return (
    <>
      <div className="sideBar">
        <div className="close-icon">
          <AiOutlineCloseCircle
            onClick={() => setOpenNavItem({ sidebar: false })}
          />
        </div>
        <ul className="sideBar__items">
          <li className="sideBar__item">Inicio</li>
          <li className="sideBar__item">Toda la ropa</li>
          <li className="sideBar__item">Contacto</li>
        </ul>
      </div>
      <style jsx>
        {`
          .sideBar {
            width: ${sidebar ? '50%' : '0'};
            max-width: 25rem;
            background: rgba(255, 255, 255, 0.85);
            backdrop-filter: blur(5px);
            border-right: 1px solid #0f0f0f;
            border-radius: 0 0 1rem;
            left: 0;
            top: 0;
            position: absolute !important;
            z-index: 10;
            height: 100vh;
            transition: width 2s, height 4s;
            animation: openSidebar 0.2s linear;
          }

          @keyframes openSidebar {
            from {
              left: -200px;
            }
            to {
              left: 0;
            }
          }
          .close-icon {
            display: flex;
            justify-content: flex-end;
            margin: 1em;
            cursor: pointer;
          }

          .sideBar__items {
            list-style: none;
            font-size: 1.5rem;
          }

          .sideBar__item {
            margin-top: 2em;
            cursor: pointer;
          }
        `}
      </style>
    </>
  )
}

export default SideBar
