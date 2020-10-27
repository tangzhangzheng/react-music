import React from 'react';
import Text from '.';


export default {
    title: '排版/Text',
    component: Text,

}


export const Default = () => {
    return <Text>默认</Text>;
}
export const Secondary = () => {
    return <Text type="secondary">次要文本</Text>;
}
export const Medium = () => {
    return <Text size="medium">medium 文本</Text>;
}
export const Large = () => {
    return (
        <div>
            <Text size="large" bold>Large大小文本 加粗</Text>
            <div></div>
            <Text size="large" >Large大小文本 </Text>
        </div>
    )
}