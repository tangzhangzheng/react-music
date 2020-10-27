import React from 'react'
import PropTypes from 'prop-types'
import StyledText from './style'


function Text({ size = "normal", type = "primary", bold, ...rest }) {
    return (
        <StyledText size={size} type={type} bold={bold} {...rest}>

        </StyledText>
    )
}

Text.propTypes = {

}

export default Text


