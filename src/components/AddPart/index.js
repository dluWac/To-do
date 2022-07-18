import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Keyboard,
} from 'react-native';

import style from './style';
import image from '../../constants/images';

const index = ({
  setListArray,
  listArray,
  task,
  setTask,
  isEditId,
  setIsEditId,
}) => {
  const AddTask = () => {
    console.log('ADD TASK FUNCTION====', task);
    if (task != '') {
      if (isEditId != null) {
        console.log('not null======', isEditId, listArray);

        let tempArray = [];

        listArray.map((item, index) => {
          if (isEditId === item?.id) {
            const element = {
              id: isEditId,
              text: task,
            };

            tempArray.push(element);
          } else {
            tempArray.push(item);
          }
        });
        console.log('ITEM======', tempArray);
        setListArray(tempArray);
        setIsEditId(null);
        setTask('');
        Keyboard.dismiss();
      } else {
        // console.log('null valueeee');

        const payload = {
          id: Math.random(),
          text: task,
        };


        setListArray(prev => [...prev, payload]);
        setTask('');
        Keyboard.dismiss();
      }
    } else {
      Keyboard.dismiss();
    }
  };

  return (
    <View style={style.AddPart}>
      <TextInput
        placeholder="Create Task"
        style={style.AddText}
        placeholderTextColor={'white'}
        value={task}
        onChangeText={text => setTask(text)}
      />
      <TouchableOpacity onPress={() => AddTask()}>
        <Image
          source={image.Up}
          style={{width: 30, height: 30, tintColor: 'white'}}
        />
      </TouchableOpacity>
    </View>
  );
};
export default index;
