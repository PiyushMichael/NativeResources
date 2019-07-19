import React,{Component} from 'react';
import {View,Text,Button,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';

class IconComponent extends Component{
    state={tex: 'haaaloooo :) '};

    pressed = () => {
        this.setState({tex: this.state.tex+'haaaloooo :) '});
    };

    render(){
        return (<View>
            <Text>{this.state.tex}</Text>
            <TouchableOpacity onPress={this.pressed} >
                    <Icon name="md-home" color="#02fa0a" size={200} style={{
                    borderWidth:1,
                    borderColor: '#fff',
                    padding: 10,
                    textAlign: 'center',
                    backgroundColor: 'lightgrey'
                }} />
            </TouchableOpacity>
            <Icon.Button name="logo-whatsapp" backgroundColor="#0a8c0a" borderRadius={20}>
                <Text>whatsapp button</Text>
            </Icon.Button>
        </View>);
    }
}

export default IconComponent;