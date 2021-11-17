import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

const NumberBtn = (props) => {
    return (
        <TouchableOpacity
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 25,
                borderColor: '#111',
                borderWidth: 1
            }}
            onPress={() => {
                props.updateFun(props.name)
            }}
        >
            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}>{props.name}</Text>
        </TouchableOpacity>
    )
}

export default NumberBtn
