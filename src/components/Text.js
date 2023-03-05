import { Text as NativeText } from 'react-native';
import React from 'react';

function Text({children, style}) {
  return (
    <NativeText style={{fontFamily: 'Gantari-Regular', ...style}}>{children}</NativeText>
  )
}

export default Text