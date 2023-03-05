import { Text as NativeText } from 'react-native';
import React from 'react';

function Text({children}) {
  return (
    <NativeText style={{fontFamily: 'Gantari-Regular'}}>{children}</NativeText>
  )
}

export default Text