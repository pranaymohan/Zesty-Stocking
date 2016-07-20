import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Button from '../common/button';

class Signin extends Component {

	constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
  }
  render () {
		return (
			<View style={styles.container}>
				<Text style={styles.title}>Zesty Stocking</Text>
				<Button text={'Sign in with Github'} onPress={this.onPress} />
			</View>
		);
	}
	onPress() {
		// Log the user in
		console.log('clicked!');
		this.props.navigator.push({name: 'oauthwebview'});
	}
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 20
  },
});

export default Signin;
