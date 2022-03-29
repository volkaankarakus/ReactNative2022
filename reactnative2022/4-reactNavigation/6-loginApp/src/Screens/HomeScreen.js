import { StyleSheet,Dimensions, View, Text, TouchableOpacity, TextInput} from 'react-native'  // created with rnf
import React,{useState} from 'react'
import { useNavigation } from '@react-navigation/native';


export default function HomeScreen() {

    const navigationHook = useNavigation();

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handleSubmit = () => { // deleting ({navigation}) thanks to useNavigation() 
        navigationHook.navigate('Profile',{
            userName : name,
            userEmail : email,
            userPassword : password
        });
        // navigation.navigate('Profile',{
        //     userName : name,
        //     userEmail : email,
        //     userPassword : password
        // });
    }
 

    //console.log(navigation);
    
    function handleNavigation(screenName){
        //console.log(screenName);
        navigation.navigate(screenName);
    }
    
    return (
        <View style = {{flex:1,alignItems:'center',justifyContent:'center'}}>
          
          <View>
              <Text style={{textAlign:'center', marginBottom:20}}>
                  Information
              </Text>

              <TextInput 
                style={styles.input}
                value={name}
                onChangeText={(text) => setName(text)}
                placeholder='Enter your name'/>

              <TextInput 
                style={styles.input}
                value={email}
                onChangeText={(text) => setEmail(text)}
                placeholder='Enter your email'/>

              <TextInput 
                style={styles.input}
                value={password}
                onChangeText={(text) => setPassword(text)}
                placeholder='Enter your password'
                secureTextEntry={true}/>

              <TouchableOpacity 
                style={styles.submitButton}
                onPress={() => handleSubmit()}
                >
                  <Text style ={{textAlign:'center'}}>
                      Submit
                  </Text>
              </TouchableOpacity>
            {/*
              <TouchableOpacity
                onPress={() => handleNavigation("Screen1")}
                style={{backgroundColor:'lightblue', padding:30,marginBottom:20}}>
                  <Text>
                      Screen1
                  </Text>
              </TouchableOpacity>

              <TouchableOpacity 
                onPress={() => handleNavigation("Screen2")}
                style={{backgroundColor:'lightblue', padding:30,marginBottom:20}}>
                  <Text>
                      Screen2
                  </Text>
              </TouchableOpacity>
            */}
          </View>
        </View>
    );
}


const {width} = Dimensions.get('screen');

const styles = StyleSheet.create({
    input : {
        width: width - 20,
        borderWidth : 2,
        marginTop: 20,
        padding:10,
    },
    submitButton : {
        width : width - 20,
        backgroundColor : 'lightblue',
        padding : 20,
        marginTop : 20,
        borderRadius : 10

    }
})