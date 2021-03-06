import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core'
// import CssBaseline from '@material-ui/core/CssBaseline'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Icon from '@material-ui/core/Icon'
import Tooltip from '@material-ui/core/Tooltip'

import ThemeWrapper, { theme } from './lib/index'
import CustomButton from './lib/components/CustomButton'
import image from './assets/contemplative-reptile.jpg'

const styles = muiTheme => {
  console.log(theme, muiTheme)
  return {
    main: {
      ...theme.typography,
      width: '100%',
      maxWidth: 800,
      margin: '0 auto'
    },
    section: {
      marginBottom: '2rem'
    },
    button: {
      margin: theme.spacing.unit,
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    },
    card: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
  }
}

class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.props = props
    this.state = {
      name: 'Foobar',
      loading: false,
    }
  }
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }
  handleClick = (value) => event => {
    this.setState({
      loading: value
    }) 
  }
  render() {
    const {classes} = this.props
    const {name, loading} = this.state
    return (
      <div className={classes.main}>

        <ThemeWrapper>

          {/* Works like reset.css */}
          {/* <CssBaseline /> */}

          <div className={classes.section}>
            <h1>h1. The quick brown fox jumps over the lazy dog.</h1>
            <h2>h3. The quick brown fox jumps over the lazy dog.</h2>
            <h3>h3. The quick brown fox jumps over the lazy dog.</h3>
            <p>p. The quick brown fox jumps over the lazy dog.</p>
            <br/>
            <Typography variant="headline" gutterBottom>
              Headline. The quick brown fox jumps over the lazy dog.
            </Typography>
            <Typography variant="title" gutterBottom>
              Title. The quick brown fox jumps over the lazy dog.
            </Typography>
            <Typography variant="subheading" gutterBottom>
              Subheading. The quick brown fox jumps over the lazy dog.
            </Typography>
            <Typography variant="body2" gutterBottom>
              Body 2. The quick brown fox jumps over the lazy dog.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Body 1. The quick brown fox jumps over the lazy dog.
            </Typography>
          </div>

          <div className={classes.section}>
            <div>
              <Button disabled="true" className={classes.button}>
                Disabled
              </Button>
              <Button className={classes.button}>
                Default
              </Button>
              <Button color="primary" className={classes.button}>
                Primary
              </Button>
              <Button color="secondary" className={classes.button}>
                Secondary
              </Button>
            </div>
            <div>
              <Button variant="contained" disabled="true" className={classes.button}>
                Disabled
              </Button>
              <Button variant="contained" className={classes.button}>
                Default
              </Button>
              <Button variant="contained" color="primary" className={classes.button}>
                Primary
              </Button>
              <Button variant="contained" color="secondary" className={classes.button}>
                Secondary
              </Button>
            </div>
            <div>
             <ClickAwayListener onClickAway={this.handleClick(false)}>
                <CustomButton
                  onClick={this.handleClick(true)}
                  loading={loading}
                  variant="contained"
                  color="primary"
                  className={classes.button}>
                  Loader
                </CustomButton>
              </ClickAwayListener>
              <Tooltip title="Howdy!">
                <Button variant="contained" color="secondary" className={classes.button}>
                  Tooltip
                </Button>
              </Tooltip>
            </div>
            <div>
              <Button variant="fab" color="primary" aria-label="add" className={classes.button}>
                <Icon>add_icon</Icon>
              </Button>
              <Button variant="fab" color="secondary" aria-label="edit" className={classes.button}>
                <Icon>edit_icon</Icon>
              </Button>
              <Button variant="fab" disabled aria-label="delete" className={classes.button}>
                <Icon>delete_icon</Icon>
              </Button>
            </div>
          </div>

          <div className={classes.section}>
            <form className={classes.container} noValidate autoComplete="off">
              <TextField
                id="name"
                label="Name"
                className={classes.textField}
                value={name}
                onChange={this.handleChange('name')}
                margin="normal"
              />
              <TextField
                id="password-input"
                label="Password"
                className={classes.textField}
                value={name}
                onChange={this.handleChange('name')}
                type="password"
                autoComplete="current-password"
                margin="normal"
              />
              <TextField
                error
                id="error"
                label="Error"
                className={classes.textField}
                value={name}
                onChange={this.handleChange('name')}
                margin="normal"
              />
            </form>
          </div>

          <div className={classes.section}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image={image}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="headline" component="h2">
                  Lizard
                </Typography>
                <Typography component="p">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                  across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </div>

        </ThemeWrapper>

      </div>
    )
  }
}

Demo.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: theme })(Demo)
