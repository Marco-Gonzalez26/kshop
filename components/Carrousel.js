import React, { useState, useRef, useEffect } from 'react'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
import '@splidejs/react-splide/css/core'

const Carrousel = ({ products }) => {
  const options = {
    type: 'loop',
    gap: '2rem',
    width: '100%',
    autoplay: true,
    pauseOnHover: false,
    resetProgress: false,
    height: '20rem',
    arrows: false,
    perPage: 1,
    perMove: 1,
    padding: '20%',
    cover: true,
    pagination: false
  }

  return (
    <>
      <h2>Tambien te podria gustar</h2>
      <div className="slider-container">
        <Splide
          options={options}
          className="slider"
          aria-label="My Favorite Images"
          hasTrack={false}
        >
          <SplideTrack className="track">
            {products.map((image) => (
              <SplideSlide className="item">
                <img src={image} alt="" className="item-img" />
              </SplideSlide>
            ))}
          </SplideTrack>
        </Splide>
      </div>
      <style jsx>
        {`
          h2 {
            text-align: center;
            font-size: 2.25rem;
          }
          .slider-container {
            margin-bottom: 5em;
          }
        `}
      </style>
    </>
  )
}

export default Carrousel
