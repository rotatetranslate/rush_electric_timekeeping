import React from 'react'
import { withStyles } from 'material-ui/styles'
import rush1 from '../../assets/rush_1.jpg'
import rush2 from '../../assets/rush_2.jpg'
import rush3 from '../../assets/rush_3.jpg'
import rush4 from '../../assets/rush_4.jpg'
import rush5 from '../../assets/rush_5.jpg'
import rush6 from '../../assets/rush_6.jpg'

const photos = [rush1, rush2, rush3, rush4, rush5, rush6]
console.log('photos', photos)

const styles = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(to bottom right, #30455e, #f2ffb5)',
    minHeight: '80vh',
  },
  content: {
    backgroundColor: 'rgba(0, 0, 0, 0.55)',
    color: 'white',
    width: '60vw',
    padding: '20px 30px',
    lineHeight: '1.5em',
    [theme.breakpoints.down('sm')]: {
      lineHeight: '1.3em',
      width: '80vw',
      padding: '20px 10px',
    }
  },
})

const About = ({classes}) => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <p>Rush Electric has been in the same location for over 60 years serving residential customers as well as large industrial and commercial facilities. We prefer to stay small in order to provide a more personalized service for our customers. The owner, "Mike" is always personally available and on all jobs with his electricians. we keep our cost of business down in order to save our customers and still provide top quality work expediently. We believe in forming long term trust based relationships with people. Our best advertising has always been our reputation. Call and ask about our LED products for interior and exterior lighting. We can provide an estimated energy and maintenance savings breakdown for you. We can also retrofit your existing light fixtures to LED type for additional savings. Call for free estimate anytime.</p>
      </div>
      <div className={classes.content}>
      </div>
      <span
        className="yelp-review"
        data-review-id="3Ndau-FDKa_1NtnUUFMC_Q"
        data-hostname="www.yelp.com">
        Read <a href="https://www.yelp.com/user_details?userid=5SqzRqP5lR3TQ4nYW240qA" rel="nofollow noopener">Jed R.</a>'s <a href="https://www.yelp.com/biz/rush-electric-south-el-monte-2?hrid=3Ndau-FDKa_1NtnUUFMC_Q" rel="nofollow noopener">review</a> of <a href="https://www.yelp.com/biz/8gbIZ4R1Zx8YHdJuDajnSg" rel="nofollow noopener">Rush Electric</a> on <a href="https://www.yelp.com" rel="nofollow noopener">Yelp</a>
        <script async="async" src="https://www.yelp.com/embed/widgets.js" type="text/javascript"></script>
      </span>
    </div>
  )
}

export default withStyles(styles)(About)
