import React from 'react'
import PropTypes from 'prop-types'
import StyledInput, { Suffix, InputContainer } from './style'
import { useTheme } from 'styled-components'
import Icon from 'components/Icon/index'
import { ReactComponent as SearchIcon } from 'assets/icon/search.svg'

function Input({ children, placeholder = "搜索音乐、MV、歌单、用户", prefix, suffix, ...rest }) {
    return (
        <InputContainer {...rest}>
            <StyledInput placeholder={placeholder}>
            </StyledInput>
            {suffix && <Suffix>{suffix}</Suffix>}
        </InputContainer>
    )
}
function Search({ placeholder = "搜索音乐、MV、歌单、用户", ...rest }) {
    const theme = useTheme();
    return (
        <Input
            placeholder={placeholder}
            suffix={
                <Icon icon={SearchIcon} color={theme.IconGary} width={18} height={18} opacity={1} />
            }
            {...rest}
        />
    )
}

Input.Search = Search

Input.propTypes = {
    placeholder: PropTypes.string,
    suffix: PropTypes.any
}

export default Input


