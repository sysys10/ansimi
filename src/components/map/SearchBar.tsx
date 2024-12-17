import React from 'react';
import { TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface SearchBarProps {}

function SearchBar({}: SearchBarProps) {
  return (
    <View>
      <TextInput /> <Icon name="search-outline" />
    </View>
  );
}

export default SearchBar;
