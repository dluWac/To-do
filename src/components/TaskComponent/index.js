import React from 'react'
import { View, Text, Image, Pressable} from 'react-native'

import image from '../../constants/images';

import styles from './style'

const index = () => {
  return (
    <View style={styles.Task}>
        <View style={{backgroundColor: '#3c305e', borderRadius: 10,padding:10}}>
            <Text style={[styles.MainHead, {marginTop: 0}]}>1</Text>
        </View>
        <View style={styles.TextPart}>
            <Text style={[styles.MainHead, {marginTop: 0}]}>Task1</Text>
            <Pressable onPress={()=> ('')}>
              <Image
                source={image.Delete}
                style={styles.deleteImg}
              />
            </Pressable>
        </View>
    </View>
  )
}

export default index