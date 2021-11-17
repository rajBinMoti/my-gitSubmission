import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

const ControlBtn = (props) => {
    console.log(props);
    return (
        <TouchableOpacity
            style={{
                ...props.bgStyles,
                borderWidth: 1,
                borderRadius: 25, 
                borderColor: '#000', 
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            <Text style={{...props.styles}}>{props.name}</Text>
        </TouchableOpacity>
    )
}

export default ControlBtn
