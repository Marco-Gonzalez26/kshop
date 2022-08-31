import React from 'react'
import { useStateContext } from 'context/StateContext'
import { AiOutlineCloseCircle } from 'react-icons/ai'

import { FaRegSadCry } from 'react-icons/fa'
const SideBar = () => {
  const { openNavItem, setOpenNavItem } = useStateContext()
  const { carrito } = openNavItem
  return (
    <>
      <div className="cart">
        <div className="close-icon">
          <AiOutlineCloseCircle
            onClick={() => setOpenNavItem({ carrito: false })}
          />
        </div>
        <div className="cart__items">
          <FaRegSadCry />

          <p>Tu carrito esta vacio!</p>
        </div>
      </div>
      <style jsx>
        {`
          .cart {
            width: ${carrito ? '50%' : '0'};
            max-width: 25rem;
            background: rgba(255, 255, 255, 0.85);
            backdrop-filter: blur(5px);
            border-right: 1px solid #0f0f0f;
            border-radius: 0 0 1rem;
            right: 0;
            top: 0;
            position: absolute !important;
            z-index: 10;
            height: 100vh;
            transition: width 2s, height 4s;
            animation: openSidebar 0.2s linear;
            animation-direction: forwards;
          }
          .cart__items{
            display: flex;
            flex-direction:  column;
            margin-top: 5em;
            justify-content: flex-end;
            align-items: center;
            text-align: center;
            font-size: 2rem;
            font-weight: 600;
          }

          .cart__items > :global(svg){
            font-size: 6rem;
            
          }
          @keyframes openSidebar {
            from {
              right: -200px;
            }
            to {
              right: 0;
            }
          }
          .close-icon {
            display: flex;
            justify-content: flex-end;
            margin: 1em;
            cursor: pointer;
          }
        `}
      </style>
    </>
  )
}

export default SideBar
