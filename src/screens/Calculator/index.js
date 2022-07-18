import React, {useState} from 'react';
import {View, Text, FlatList} from 'react-native';

import style from './style';
import constants from '../../constants/constants';
import KeyPad from '../../components/Keyboard';
import Screen from '../../components/OutputScreen';

const index = () => {
  const [pressedValue, setPressedValue] = useState('');
  const [Answer, setAnswerValue] = useState();

  const onPressedValue = (item, index) => {
    // console.log("data======",typeof item.number)
    const eqtion = () => {
      let ans = eval(pressedValue);
      setAnswerValue (ans);
    };
    if (item?.type) {
      if (item.type === 'clear') {
        setPressedValue('0');
        setAnswerValue('0')
      } else {
        eqtion();
      }
    } else {
      if(!Answer){
        setPressedValue(state => state + item.number);
      }else{
        setPressedValue(Answer+item.number)
        setAnswerValue('')
      }
    }
  };

  return (
    <View style={style.container}>
      <Screen
        pressedValue={pressedValue}
        // onPressedValue={onPressedValue}
        setAnswerValue={setAnswerValue}
        Answer={Answer}
      />
      <View style={style.KeyBoard}>
        {/* <FlatList
        data={''}
        keyExtractor={''}
        renderItem={''}
        />  */}
        {constants.keyBoardItems.map((item, index) => {
          return (
            <KeyPad
              item={item}
              onPressedValue={onPressedValue}
              setPressedValue={setPressedValue}
              pressedValue={pressedValue}
            />
          );
        })}
      </View>
    </View>
  );
};
export default index;
