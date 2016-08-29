import React, { Component } from 'react';
import {
  AsyncStorage,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import NavBar from '../common/navBar';
import Button from '../common/button';
import { postMessage } from '../../helpers/api';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 10
  },
  textInput: {
    height: 210,
    fontSize: 28,
    marginTop: 10,
    padding: 10
  },
  inputWrapper: {
    alignSelf: 'stretch',
    borderWidth: 0.5,
    borderColor: '#0f0f0f',
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10
  }
});

class MessageComposer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      buttonDisabled: true
    };

    this.onPressSend = this.onPressSend.bind(this);
  }

  onPressSend() {
    // attempt to retreive access token from device storage
    AsyncStorage.getItem('accessToken')
      .then(accessToken => {
        // then send along that token with the text of the message
        var text = this.state.text;

        postMessage(text, accessToken)
          .then((message) => {
            this.props.route.callback();
            this.props.navigator.pop();
          })
          .catch(err => console.log(err));
      })
  }

  render() {

    return (
      <View style={ styles.container }>
        <NavBar
          navigator={ this.props.navigator }
          title={ { title: 'Compose a Byte', tintColor: '#333' }}
        />
        <View style={ styles.inputWrapper }>
          <TextInput
            style={ styles.textInput }
            placeholder='Type here'
            autoFocus={true}
            multiline={true}
            numberOfLines={5}
            maxLength={140}
            onChangeText={ (text) => this.setState({
              text: text,
              buttonDisabled: false
              })
            }
          />
        </View>
        <Button
          text={ 'Send' }
          onPress={ this.onPressSend }
          disabled={ this.state.buttonDisabled }
        />
      </View>
    );
  }
}

export default MessageComposer;
