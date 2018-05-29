import React from 'react';
import Swiper from 'react-id-swiper';
import { withStyles } from 'material-ui/styles'
import rush1 from '../../assets/rush_1.jpg'
import rush2 from '../../assets/rush_2.jpg'
import rush3 from '../../assets/rush_3.jpg'
import rush4 from '../../assets/rush_4.jpg'
import rush5 from '../../assets/rush_5.jpg'
import rush6 from '../../assets/rush_6.jpg'

const photos = [rush1, rush2, rush3, rush4, rush5, rush6]

const styles = {
  pic: {
    height: 200,
    '& img': {
      height: 100,
      width: 100
    }
  }
}

class Example extends React.Component {
  render() {
    const { classes } = this.props

    const params = {
      autoHeight: true,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      spaceBetween: 30,
      slidesPerView: photos.length / 3
    }

    return(
      <Swiper {...params}>
        {photos.map(photo => (
          <div className={classes.pic} key={photo}>
            <img src={photo} alt=""/>
          </div>
        ))}
      </Swiper>
    )
  }
}

export default withStyles(styles)(Example)
