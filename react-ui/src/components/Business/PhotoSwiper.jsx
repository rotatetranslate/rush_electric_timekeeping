import React, { Component } from 'react';
import Swiper from 'react-id-swiper';

export default class Navigation extends Component {
  render() {
    const params = {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    }

    return (
      <Swiper {...params}>
        <div>Slide 1</div>
        <div>Slide 2</div>
        <div>Slide 3</div>
        <div>Slide 4</div>
        <div>Slide 5</div>
      </Swiper>
    )
  }
}
