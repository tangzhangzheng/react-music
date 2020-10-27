import React from 'react';
import Icon from '.';
import { ReactComponent as SearchIcon } from 'assets/icon/search.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots } from '@fortawesome/free-solid-svg-icons'

export default {
    title: 'UI 组件/Icon',
    component: Icon,

}


export const Default = () => {
    return <Icon icon={SearchIcon} />;
}

export const IconWithColor = () => {
    return <Icon icon={SearchIcon} color="#ff1adf77" />;
}

export const IconWithSize = () => {
    return <Icon icon={SearchIcon} color="#ff1adf77" width={50} height={50} />;
}
export const FontAwesome = () => {
    return (
        <div>
            <FontAwesomeIcon icon={faCommentDots} />
            <FontAwesomeIcon icon={faCommentDots} color="#ff1adf77" style={{ fontSize: "24px" }} />
            <FontAwesomeIcon icon={faCommentDots} color="#ff1adf77" style={{ fontSize: "50px" }} />

        </div>
    )
}