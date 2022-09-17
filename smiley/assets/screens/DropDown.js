import React, { useState } from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const DropDown = ({data = [], value = {}, onSelect = () => {}}) => {

    const [showOptions, setShowOptions] = useState(false);

    const onSelectedItem = (val) => {
        setShowOptions(false);
        onSelect(val);
    }

  return (
    <View>
      <TouchableOpacity style={styles.dropDown} onPress={ () => setShowOptions(!showOptions) }>
        <Text style={styles.text}>
          {value ? value.name : 'ENTER YOUR SHIFT'}
        </Text>
        <Text style={styles.text}>
          <Icon name="angle-down" size={35} color="#0AA1DD"/>
        </Text>
      </TouchableOpacity>
      { showOptions && (<View style={styles.dropdownMenu}>
        {data.map((val, i) => {
          return <TouchableOpacity key={String(i)} onPress={ () => onSelectedItem(val) } style={{paddingVertical:8, borderRadius:10, paddingHorizontal:15}}>
            <Text>{val.name}</Text>
          </TouchableOpacity>;
        })}
      </View>)}
    </View>
  );
};

const styles = StyleSheet.create({
  dropDown: {
    backgroundColor: '#fff',
    width: '80%',
    borderRadius: 20,
    height: 65,
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    elevation: 8,
    shadowColor: '#747474',
    marginBottom: 55,
    display: 'flex',
    flexDirection: 'row',
  },

  text: {
    alignSelf: 'center',
  },

  dropdownMenu:{
    backgroundColor:'#fff',
    padding:15,
    borderRadius:15,
    elevation:8,
    width:'80%',
    position:'absolute',
    zIndex:1
  }
});

export default DropDown;
