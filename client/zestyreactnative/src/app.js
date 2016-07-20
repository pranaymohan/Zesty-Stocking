import React, { Component } from 'react';
import {
  Navigator,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Signin from './components/authentication/signin';
import Posts from './components/timeline/posts';
import { border } from '../helpers/scaffolding';

var dummyMessages = [
  { user: 'Bronson', text: 'Nom nom nom', likes: 1 },
  { user: 'Fifo', text: 'First in, first out. I mean: Woof!', likes: 1 }
];

var ROUTES = {
  // keys with route name, maps to value of actual component to display
  signin: Signin,
  posts: Posts
}

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      messages: dummyMessages
    };
  }

  renderScene(route, navigator) {
    var Comp = ROUTES[route.name]; // ROUTES['signin'] => Signin
    return <Comp route={route} navigator={navigator} />;
  }

  render() {
    return (
      <Navigator
        style={ [ styles.container, border('yellow') ] }
        initialRoute={ { name: 'signin' } }
        renderScene={ this.renderScene }
        configureScene={ () => {
          return Navigator.SceneConfigs.FloatFromRight;
        } }
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
