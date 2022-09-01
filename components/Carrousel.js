import React, { useState, useRef, useEffect } from 'react'
import { motion } from '../node_modules/framer-motion/dist/framer-motion'

const Carrousel = ({ products }) => {
  return (
    <>
      <h2>Tambien te podria gustar</h2>
      <motion.div className="slider-container">
        <motion.div
          className="slider"
          drag="x"
          dragConstraints={{ right: 0, left: -5 }}
        >
          {products.map((image) => (
            <motion.div className="item">
              <img src={image} alt="" className="item-img" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      <style jsx>
        {`
          .item {
            height: 0rem;
            min-width: 0rem;
            padding: 2rem;
          }
          .item-img {
            height: 50%;
            width: 50%;
            pointer-events: none;
          }
          .slider {
            display: flex;
            cursor: grab;
          }
          .slider-container {
            margin: 0 auto;
            overflow-x: hidden;
          }
        `}
      </style>
    </>
  )
}

export default Carrousel
