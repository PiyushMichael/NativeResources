import React,{Component} from 'react';
import {Platfrom,View,Text,Button,PermissionsAndroid,requestMultiple} from 'react-native';
import Contacts from 'react-native-contacts';
import {styles} from './styles';

class ContactComponent extends Component {
	state = {myContacts: []};
	
	async requestContactPermissions(){
		if(Platform.OS === 'ios'){return true;}
		if(Platform.OS === 'android') {
			const granted = await PermissionsAndroid.requestMultiple([
				PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
				PermissionsAndroid.PERMISSIONS.WRITE_CONTACTS
			]);
			if (granted['android.permission.WRITE_CONTACTS'] === PermissionsAndroid.RESULTS.GRANTED && granted['android.permission.READ_CONTACTS'] === PermissionsAndroid.RESULTS.GRANTED) return true;
			else return false;
		}
	}
	
	getContacts = () => {
		this.requestContactPermissions().then((gotPermission) => {
			if(gotPermission){
				Contacts.getAll((err,contacts) => {
					if (err) throw err;
					this.setState({myContacts: contacts});
				});
			}
			else alert('access... denied :))');
		});
	};
	
	addContacts = () => {
		this.requestContactPermissions().then((gotPermission) => {
			if(gotPermission){
				const newContact = {
					givenName: 'bajaj',
					familyName: 'pulsar',
					phoneNumbers: [{
						label: 'work',
						number: '220200160'
					}]
				};
				Contacts.addContact(newContact,(err)=>{
					if(err)throw(err);
					this.getContacts();
				});
			}
			else alert('access... denied :)))');
		});
	};
	
	openForm = () => {
		const newContact = {
			name: 'bajaj pulsar',
			phoneNumbers: [{
				label: 'work',
				number: '220200160'
			}]
		};
		Contacts.openContactForm(newContact,(err) => {
			if(err) throw err;
		});
	};
	
	render(){
		return (<View style={{marginTop: 20}}>
			<Text>Contact Component eheh :)</Text>
			<Button title="load contacts" onPress={this.getContacts} />
			<Button title="add contacts" onPress={this.addContacts}/>
			<Button title="open form" onPress={this.openForm} />
			<View>
				{this.state.myContacts.map((item,i) => (
					<Text key={i}>{item.givenName} {item.familyName}</Text>
				))}
			</View>
		</View>);
	}
}

export default ContactComponent;