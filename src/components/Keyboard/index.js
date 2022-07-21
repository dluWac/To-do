import React from 'react'
import { View, Text, TouchableOpacity} from 'react-native'

import style from './style'

const index = ({item, onPressedValue, }) => {

  return (
    <View style={{}}>
        <TouchableOpacity style={style.NumStyle} onPress={() => onPressedValue(item)}>
          <Text style={style.KeyPad(item)}>{item.number == ' * ' ? "X" : item.number }</Text>
        </TouchableOpacity>
    </View>
  )
}

export default index