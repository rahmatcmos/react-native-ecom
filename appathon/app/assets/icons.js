import React from 'react'
import Octicon from 'react-native-vector-icons/Octicons'
import Icon from 'react-native-vector-icons/FontAwesome'
import MIcon from 'react-native-vector-icons/MaterialIcons'

export const FontIcons = {
    login: <Octicon name="lock" size={30} color="#900" />,
    store: <MIcon name="local-grocery-store" size={30} color="#900" />,
    balance: <MIcon name="account-balance-wallet" size={30} color="#900" />,
    payment: <MIcon name="payment" size={30} color="#900" />,
    reward: <MIcon name="grade" size={30} color="#900" />,
    setting: <MIcon name="settings" size={30} color="#900" />,
    mobile: '',
    other: '',
    theme: '',
    card: '',
    addToCardForm: '',
  };
  
  export const FontAwesome = {
    heart: String.fromCharCode(61444),
    comment: String.fromCharCode(61669),
    user: String.fromCharCode(62144),
    twitter: <Icon name="twitter" size={30} color="#900" />,
    google: <Icon name="google" size={30} color="#900" />,
    facebook: <Icon name="facebook" size={30} color="#900" />,
    plus: String.fromCharCode(61543),
    search: String.fromCharCode(61442),
    smile: String.fromCharCode(61720),
    chevronRight: <Icon name="chevron-right" size={30} color="#000" />,
    chevronLeft: <Icon name="chevron-left" size={30} color="#000" />,
    bars: <Icon name="bars" size={30} color="#000" />,
    slashEye: String.fromCharCode(61552),
    github: String.fromCharCode(61595),
  };