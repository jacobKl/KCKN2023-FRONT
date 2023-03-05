import React from 'react'
import { TextInput } from 'react-native/types';

function Input({placeholder, value, onChange}) {
  return (
    <TextInput value={value} onChange={onChange} placeholder={placeholder}></TextInput>
  )
}

export default Input