import React from 'react'
import { withStyles } from 'material-ui/styles'
import bgImg from '../../assets/bgImg.jpg'

console.log('bgImg?', bgImg)

const styles = () => ({
  home: {
    backgroundImage: `url(${bgImg})`,
    width: '100%',
    height: '100%'
  }
})

const Home = ({classes}) => {
  return (
    <div className={classes.home}>
    </div>
  )
}

export default withStyles(styles)(Home)
