import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { datasource } from './Data';

const Add = ({navigation}) => {
    const [letter,setLetter] = useState('');
    const [type, setType] = useState('Vowels');
    return(
        <View style={{padding:10}}>
            <View style={{padding:10}}>
            <Text style={{fontWeight: 'bold'}}>Letter:</Text>
            <TextInput style={{borderWidth:1}} onChangeText={(text) => setLetter(text)}/>
        </View>

        <View style={{padding:10}}>
            <RNPickerSelect
                value={type}
                onValueChange={(value) => setType(value)}
                items={[
                    {label:"Vowels", value:"Vowels"},
                    {label:"Consonants", value:"Consonants"}
                ]}
                />
        </View>
            <Button title='Submit'
            onPress={()=>{
                let item = {key:letter}
                let indexnum = 1;
                if(type === "Vowels") {
                    indexnum = 0;
                }
                datasource[indexnum].data.push(item);
                navigation.navigate("Home")
            }
            }
            />
        </View>
    );
};
export default Add;
