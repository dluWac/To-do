import React from 'react'
import { View, Text, TextInput, Image, Pressable, } from 'react-native'

import style from './style'
import image from '../../constants/images'



const index = () => {
  return (
    
    <KeyboardAvoidingView style={style.AddPart}>
        <TextInput placeholder='Create Task' style={style.AddText} placeholderTextColor={'white'}/>
            <Pressable onPress={()=> ('')}>
                <Image source={image.Up} style={{width: 30, height: 30, tintColor: 'white'}}/>
            </Pressable>
    </KeyboardAvoidingView>
    
  )
} 
export default index