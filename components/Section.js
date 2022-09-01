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

  const array = chicas ? images : beautyImgs

  console.log(array)
  return (
    <>
      <div>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: -16 }}
        >
          {array?.map((image, index) => (
            <img src={image} key={index} />
          ))}
        </motion.div>
        <div>
          <h3>Productos que te podrian gustar!</h3>
          <div className="marquee">
            <motion.div
              className="track"
              drag="x"
              dragConstraints={{ left: -300, right: 0 }}
            >
              {array?.map((image, index) => (
                <img className="marquee__img" src={image} key={index} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          div {
            width: 100%;
            height: 100%;
          }
          img {
            width: 100%;
            object-fit: fill;
            height: 50%;
            margin-top: 1rem;
          }
          .marquee {
            position: relative;
            height: 350px;
            width: 200vw;
            overflow: hidden;
          }

          .track {
            position: absolute;
            display: flex;
            width: 200%;
            display: flex;
          }
          h3{
            font-size: 1.45rem;
            margin-left: 1rem;
          }
          .marquee__img {
            min-width: 10rem;
            height: 15rem;
            max-width: 12rem;
            margin: 1em;
            object-fit: fill;
            border-radius: 1rem;
          }
        `}
      </style>
    </>
  )
}

export default Section
