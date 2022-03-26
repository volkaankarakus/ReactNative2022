import react,{Component} from 'react';
import {
    View,
    Text,
} from 'react-native';


/* This usage is more logical if the operation will not be performed with "State". */

const FirstComponent = ({name,text}) => {
    return (
        <View>
            <Text> 
                {name} {text} First Component 
            </Text>
        </View>
    )
}

export default FirstComponent;


/*
export default class FirstComponent extends Component{
    render(){
        return (
            <View>
                <Text>
                    First Component 
                </Text>
            </View>
        )
    }
}
*/