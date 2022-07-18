import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
  Alert,
} from 'react-native';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import style from './style';
import Task from '../../components/TaskComponent';
import Add from '../../components/AddPart';

const index = ({}) => {
  const [listArray, setListArray] = useState([]);
  const [task, setTask] = useState('');
  const [isEditId, setIsEditId] = useState(null);
  
  const deleteTask = data => {
    const filterData = listArray.filter(item => {
      return data?.id != item?.id;
    });
    setListArray(filterData);
  };
  const editText = (item, index, data, ) => {
    setTask(item.text);
    setIsEditId(item?.id);
    
  };
  return (
    <View style={style.container}>
      <KeyboardAwareScrollView>
        <Text style={style.MainHead}>TODO LIST</Text>
        <FlatList
          data={listArray}
          keyExtractor={(item, index) => item?.id?.toString()}
          renderItem={({item, index}) => (
            <Task 
              item={item}
              index={index}
              setListArray={setListArray}
              listArray={listArray}
              deleteTask={deleteTask}
              editText={editText}
              
            />
          )}
          contentContainerStyle={{marginBottom: 10}}
        />
      </KeyboardAwareScrollView>
      <View style={style.AddCompnt}>
        <Add
          setListArray={setListArray}
          listArray={listArray}
          task={task}
          setTask={setTask}
          isEditId={isEditId}
          setIsEditId={setIsEditId}
          editText={editText}

        />
      </View>
    </View>
  );
};

export default index;
