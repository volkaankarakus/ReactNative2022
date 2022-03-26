import react,{Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';


/* This usage is more logical if the operation will not be performed with "State". 

const FirstComponent = ({name,year,changeState}) => {
    return (
        <View>
            <Text> {name} {year} </Text>
            <TouchableOpacity onPress={changeState}>
                <Text>
                    Degistir Component
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default FirstComponent;
*/


export default class FirstComponent extends Component{

    constructor(){
        super();
        this.state = {
            address : ''
        };
    }

    changeAddress = () => {
        this.setState({address:'Istanbul'})
    };


    render(){

        const {name,year,changeState} = this.props;
        const {address} = this.state;

        return (
            <View>
                <Text>{name} {year} {address}</Text>
                <TouchableOpacity onPress={() => {
                    this.changeAddress();
                    changeState();
                    }}>
                    <Text> Propsla Degistir</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
