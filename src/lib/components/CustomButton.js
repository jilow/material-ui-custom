import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'

/*
 * CustomButton extends the Button component from material-ui.
 * 
 * It passes all known props to the button, the rest is 
 * handled or consumed by the CustomButton.
 */

const styles = theme => ({
  progress: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
})

const CustomButton = props => {
  const { children } = props
  const { loading, disabled, classes, ...buttonProps } = props
  const { progress, ...buttonClasses } = classes
  return (
    <React.Fragment>
      <Button loading={loading ? 'true' : undefined} disabled={disabled || loading} classes={buttonClasses}  {...buttonProps}>
        { children }
        { loading && <CircularProgress size={24} className={progress} /> }
      </Button>
    </React.Fragment>
  )
}

CustomButton.muiName = 'CustomButton'

CustomButton.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(CustomButton)
