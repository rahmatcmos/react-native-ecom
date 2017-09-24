import React from 'react'
import {View, Text, TouchableHighlight} from 'react-native'

import StyleSheet from '../styles'
import Icon from './icon'

export default class Button extends React.Component {

  render() {
    const {
      type, active, text, style, activeStyle, containerStyle,
      iconStyle, activeIconStyle, textStyle, activeTextStyle, children, ...props
    } = this.props

    const defaultButton = StyleSheet.buttons.default || {}
    const button = type ? StyleSheet.buttons[type] || defaultButton : defaultButton
    const textTransform = button.textTransform || defaultButton.textTransform || (s => s)

    return (
      <TouchableHighlight style={[{flex: 0, overflow: 'visible'},
        defaultButton.style,
        button.style,
        style,
        active ? defaultButton.activeStyle : null,
        active ? button.activeStyle : null,
        active ? activeStyle : null
      ]}
        activeOpacity={'activeOpacity' in button ? button.activeOpacity : defaultButton.activeOpacity}
        underlayColor={'underlayColor' in button ? button.underlayColor : defaultButton.underlayColor}
        {...props}>

        <View style={[defaultButton.containerStyle, button.containerStyle, containerStyle]}>
          {text && <Text style={[
            StyleSheet.text,
            defaultButton.textStyle,
            button.textStyle,
            textStyle,
            active ? defaultButton.activeTextStyle : null,
            active ? button.activeTextStyle : null,
            active ? activeTextStyle : null
          ]}>
            {typeof text === 'string' && textTransform(text) || text}
          </Text>}
          {children}
        </View>
      </TouchableHighlight>
    )
  }
}