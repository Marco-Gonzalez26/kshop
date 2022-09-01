import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

const Carrousel = ({ products }) => {
  const [width, setWidth] = useState(0)

  const track = useRef()

  console.log(width)
  return (
    <>
      <div className="maylike-products-wrapper">
        <h2>Tambien te podria gustar</h2>
        <div className="marquee">
          <div className="maylike-products-container track" ref={track}>
            {products.map((item) => (
              <img key={item._id} src={item} />
            ))}
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .maylike-products-wrapper h2 {
            text-align: center;
            margin: 50px;
            color: #000;

            font-size: 2rem;
          }
          .maylike-products-container {
            display: flex;
            justify-content: center;
            gap: 15px;
            margin-top: 0.5em;
          }
          .marquee {
            position: relative;
            height: 60vh;
            width: 100%;
            overflow-x: hidden;
          }

          .track {
            position: absolute;
            white-space: nowrap;
            will-change: transform;
            animation: marquee 15s linear infinite;
            width: 180%;
          }

          .track img {
            width: 15rem;
            border-radius: 1em;
          }
          .track:hover {
            animation-play-state: paused;
          }
          @keyframes marquee {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
        `}
      </style>
    </>
  )
}

export default Carrousel
