import React from 'react'
import {View,Text} from 'react-native'

import StyleSheet from '../styles'

export default class Title extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <View style={StyleSheet.title.container}>
        <Text style={[StyleSheet.text,StyleSheet.title.titleText]}>
          {this.props.text}
        </Text>
      </View>
    )
  }
}
Title.propTypes = {
  'text': React.PropTypes.string,
}
