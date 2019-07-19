import React,{Component} from 'react';
import {View,Text,Dimensions} from 'react-native';
import {styles} from './styles';

class SuperText extends Component {
    render(){
        console.warn(Dimensions.get('screen'));
        console.warn(Dimensions.get('window'));
    
        return <View>
            <Text style={[styles.supertext,this.props.style]}>
                {this.props.children}
            </Text>
        </View>
    }
}

export default SuperText;