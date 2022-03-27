import { StyleSheet, Text, View,TextInput,TouchableOpacity} from 'react-native';
import React,{Component} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import ItemList from '../ItemList';
// import { TouchableOpacity } from 'react-native-gesture-handler';


export default class FirstScreen extends Component{
    constructor(){
        super();
        this.state={
            text:'',
            data:[]
        }
    }

    handleSave = () => {
        const {text,data} = this.state;
        data.push({text});
        this.setState({data,text:''});
    };


    render(){
        const {text,data} = this.state;

        return (
        <SafeAreaView style={[{flex:1,paddingTop:30}]}>
            <View style = {style.title}>
                <Text style = {style.title_text}>
                    TODO APPLICATION
                </Text>
            </View>
            <View style={{backgroundColor:'#ccc',padding:10,flexDirection:'row'}}>
                    <TextInput 
                    style={style.input}
                    value={text}
                    onChangeText={(text) => this.setState({text})}
                    >

                    </TextInput>
                    <TouchableOpacity style={style.button} onPress={this.handleSave}>
                        <Text style={style.title_text}>
                            Add
                        </Text>
                    </TouchableOpacity>
            </View>
            <View>
                {data.map((item) => {
                    return (
                        <ItemList text={item.text}>

                        </ItemList>
                    );
                })}
            </View>
        </SafeAreaView>
        );
    }
}

const style = StyleSheet.create({
    title : {backgroundColor:'blue',padding:10},
    title_text: {color:'white',textAlign:'center',fontSize:20,fontWeight:'700'},
    input: {padding:10,backgroundColor:'white',flex:1}, // input expanded with flex:1
    button:{padding:10,backgroundColor:'blue',borderRadius:5,marginLeft:10}
})
