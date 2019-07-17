import React,{Component} from 'react';
import {View,Text,Image,Button} from 'react-native';
import ImagePicker from 'react-native-image-picker';
/*--------------------------------*/
import {styles} from './src/styles';

class App extends Component {
	state = {avatar: ''};
	
	addAvatar = () => {
		ImagePicker.showImagePicker({},response => {
			if(response.didCancel){console.warn('really?')}
			else if(response.error){console.warn(error)}
			else{this.setState({avatar: response.uri})}
		});
	};
	
	render(){
		return (
		<View style={styles.container}>
			<Text>started from the bottom now we hya :)</Text>
			<Image source={{uri:this.state.avatar}} style={styles.avatar} />
			<Button title="add an image" onPress={() => this.addAvatar()} />
		</View>);
	}
};

export default App;
