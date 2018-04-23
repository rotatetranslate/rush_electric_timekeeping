import React from 'react'
import Button from 'material-ui/Button'
import { withStyles } from 'material-ui/styles'
import { Link } from 'react-router-dom'
import bgImg from '../../assets/bgImg.jpg'

const styles = theme => ({
  background: {
    backgroundImage: `url(${bgImg})`,
    backgroundSize: 'cover',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '80vh'
  },
  content: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    color: 'white',
    width: '60vw',
    padding: '20px 30px',
    lineHeight: '1.3em',
    [theme.breakpoints.down('sm')]: {
      width: '80vw',
      padding: '20px 10px',
      '& h1': {
        padding: 0
      }
    }
  },
  button: {
    display: 'inherit',
    margin: '20px auto 0 auto',
    color: theme.palette.common.white,
    border: `2px solid ${theme.palette.common.white}`,
    '&:hover': {
      borderColor: theme.palette.secondary.main
    }
  },
  slogan: {
    textAlign: 'center',
    fontFamily: 'Raleway',
    lineHeight: '1.2em',
    padding: 20,
  }
})

const Home = ({classes}) => {
  return (
    <div className={classes.background}>
      <div className={classes.content}>
        {/* <p>Rush Electric has been in the same location for over 60 years serving residential customers as well as large industrial and commercial facilities. We prefer to stay small in order to provide a more personalized service for our customers. The owner, "Mike" is always personally available and on all jobs with his electricians. we keep our cost of business down in order to save our customers and still provide top quality work expediently. We believe in forming long term trust based relationships with people. Our best advertising has always been our reputation. Call and ask about our LED products for interior and exterior lighting. We can provide an estimated energy and maintenance savings breakdown for you. We can also retrofit your existing light fixtures to LED type for additional savings. Call for free estimate anytime.</p> */}
        <h1 className={classes.slogan}>Providiving top quality electrical work for residential, industrial, and commercial customers since 1954</h1>
        <Link to="/contact" style={{ display: 'grid' }}><Button className={classes.button}>GET IN TOUCH WITH US</Button></Link>
      </div>
    </div>
  )
}

export default withStyles(styles)(Home)
