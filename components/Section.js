import React, { useState } from 'react'
import { useStateContext } from 'context/StateContext'
import { motion } from 'framer-motion'
import Carrousel from './Carrousel.js'

const images = [
  'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
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

  return (
    <>
      <div className="section__container" id='section'>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: -32 }}
        >
          {array?.map((image, index) => (
            <img className="section__product" src={image} key={index} />
          ))}
        </motion.div>
        <h2>Tambien te podria gustar</h2>

        <div className='maylike__container'>
          {array.map((img, index) => {
            return (
              <img src={img} key={index} className='maylike-item'/>
            )
          })}
        </div>
      </div>
      <style jsx>
        {`
          .section__container {
            width: 100%;
            height: 100%;
            position: relative;
          }
          .section__product {
            width: 100%;
            object-fit: fill;
            height: 50%;
            margin-top: 2rem;
          }

          h2 {
            text-align: center;
            font-size: 1.85rem;
            margin-bottom: 2em;
          }
          .maylike__container{
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 5rem;
            margin-bottom: 3rem;
          }
          .maylike-item{
            border-radius:1rem;
            width: 50%;
            object-fit: fill;

          }
        `}
      </style>
    </>
  )
}

export default Section
