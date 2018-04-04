import React from 'react'
import { withStyles } from 'material-ui/styles'
import bgImg from '../../assets/bgImg.jpg'

console.log('bgImg?', bgImg)

const styles = () => ({
  background: {
    backgroundImage: `url(${bgImg})`,
    backgroundSize: 'cover',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '80vh'
  },
  content: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    color: 'white',
    width: '60vw',
  }
})

const Home = ({classes}) => {
  return (
    <div className={classes.background}>
      <div className={classes.content}>
        <p>Rush Electric has been in the same location for over 60 years serving residential customers as well as large industrial and commercial facilities. We prefer to stay small in order to provide a more personalized service for our customers. The owner, "Mike" is always personally available and on all jobs with his electricians. we keep our cost of business down in order to save our customers and still provide top quality work expediently. We believe in forming long term trust based relationships with people. Our best advertising has always been our reputation. Call and ask about our LED products for interior and exterior lighting. We can provide an estimated energy and maintenance savings breakdown for you. We can also retrofit your existing light fixtures to LED type for additional savings. Call for free estimate anytime.</p>
      </div>
    </div>
  )
}

export default withStyles(styles)(Home)
