import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CustomIcon =
  (name: string) =>
  ({ color }: { color: string }) =>
    <Icon name={name} color={color} size={24} />;

export default CustomIcon;
