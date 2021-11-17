import React from 'react'
import { View, Text } from 'react-native'

const DisplayComponent = ({ equ }) => {
    return (
        <View style={{
            flex: 1, margin: 4,
            alignItems: 'flex-end',
            backgroundColor: '#abc'
        }}>
            <Text style={{ fontSize: 40 }} >{equ}</Text>
        </View>
    )
}

export default DisplayComponent
