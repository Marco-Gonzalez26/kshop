import React, { useState } from 'react'
import { useStateContext } from 'context/StateContext'
import { motion } from 'framer-motion'

const images = [
  'https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=420&q=80',
  'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80'
]

const beautyImgs = [
  'https://images.unsplash.com/photo-1610545935652-150729f94aad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  'https://images.unsplash.com/photo-1533562389935-457b1ae48a39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  'https://images.unsplash.com/photo-1621797064712-2ed3a36fc009?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
]
const Section = () => {
  const { openSection, setOpenSection } = useStateContext()
  const { chicas, belleza } = openSection

  console.log('chicas', chicas, 'belleza', belleza)
  return (
    <>
      <div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        {chicas === true && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {images.map((image, index) => (
              <img src={image} key={index} />
            ))}
          </motion.div>
        )}

        {belleza && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {beautyImgs.map((image, index) => (
              <img src={image} key={index} />
            ))}
          </motion.div>
        )}
      </div>
      <style jsx>
        {`
          div {
            width: 100%;
          }
          img {
            width: 100%;
            object-fit: fill;
            margin-top: 2rem;
          }
        `}
      </style>
    </>
  )
}

export default Section
