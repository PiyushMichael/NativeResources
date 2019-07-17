import React,{Component} from 'react';
import {ScrollView,View,Text,Image,Button} from 'react-native';
import ImagePicker from 'react-native-image-picker';
/*--------------------------------*/
import {styles} from './src/styles';
import ContactComponent from './src/contact-component';

class App extends Component {
	state = {avatar: ''};
	
	addAvatar = () => {
		ImagePicker.showImagePicker({
			title: 'you need an avatar',
			takePhotoButtonTitle: 'click an avatar :)',
			chooseFromLibraryButtonTitle: 'pick an avatar :)'
		},response => {
			if(response.didCancel){console.log('really?')}
			//else if(response.error != ''){console.log(error)}
			else{this.setState({avatar: response.uri})}
		});
	};
	launchCamera = () => {
		ImagePicker.launchCamera({},response => {
			if(response.didCancel) console.log('really');
			else this.setState({avatar: response.uri});
		});
	};
	launchGallery = () => {
		ImagePicker.launchImageLibrary({},response => {
			if(response.didCancel) console.log('really');
			else this.setState({avatar: response.uri});
		});
	};
	
	render(){
		return (
		<ScrollView>
			<View style={styles.container}>
				<Text>started from the bottom now we hya :)</Text>
				<Image source={{uri:this.state.avatar}} style={styles.avatar} />
				<Button title="add an image" onPress={this.addAvatar} />
				<Button title="camera" onPress={this.launchCamera}/>
				<Button title="gallery" onPress={this.launchGallery} />
				<ContactComponent />
			</View>
		</ScrollView>);
	}
};

export default App;
