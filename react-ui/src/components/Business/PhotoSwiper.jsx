import React from 'react';
import Swiper from 'react-id-swiper';

class Example extends React.Component {
  render() {
    const params = {
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      spaceBetween: 30
    }

    return(
      <Swiper {...params}>
        <div style={{ height: '400px', width: '400px', border: '1px solid black'}}/>
        <div style={{ height: '400px', width: '400px', border: '1px solid black'}}/>
      </Swiper>
    )
  }
}

export default Example;
