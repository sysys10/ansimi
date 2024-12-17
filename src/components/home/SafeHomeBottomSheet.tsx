import React, { useMemo, useState } from 'react';
import { BottomSheetView } from '@gorhom/bottom-sheet';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import useAnsimStore from '@/stores/ansimStore';
import { colors } from '@/constants';
import { NewDestinationForm } from './NewDestinationForm';
import { MainBottomTabNavigationProps } from '@/navigations/bottomTab/mainBottomTabNavigation';
import { LocationType } from '@/types';

interface Props {
  onClose: () => void;
  navigation: MainBottomTabNavigationProps;
}

export default function SafeHomeBottomSheet({ onClose, navigation }: Props) {
  const [isNewForm, setIsNewForm] = useState(false);
  const snapPoints = useMemo(() => ['50%', '80%'], []);

  const { destinations, selectDestination, addDestination } = useAnsimStore();

  const handleSelectDestination = (destination: LocationType) => {
    selectDestination(destination);
    navigation.navigate('Map');
    onClose();
  };

  const handleSaveForm = destination => {
    addDestination(destination);
    console.log(1);

    setIsNewForm(false);
    console.log(1);
  };
  if (destinations.length === 0 || isNewForm) {
    return (
      <BottomSheetView style={styles.container}>
        <NewDestinationForm
          onSave={handleSaveForm}
          onCancel={() => setIsNewForm(false)}
        />
      </BottomSheetView>
    );
  }

  return (
    <BottomSheetView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>저장된 목적지</Text>
      </View>

      <View style={styles.destinationList}>
        {destinations.map((dest, index) => (
          <TouchableOpacity
            key={index}
            style={styles.destinationItem}
            onPress={() => handleSelectDestination(dest)}>
            <Text style={styles.destName}>{dest.name}</Text>
            <Text style={styles.destAddress}>{dest.address}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setIsNewForm(true)}>
        <Text style={styles.addButtonText}>+ 새로운 목적지 추가</Text>
      </TouchableOpacity>
    </BottomSheetView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.secondary,
  },
  header: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.border.default,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text.primary,
  },
  destinationList: {
    flex: 1,
    padding: 20,
  },
  destinationItem: {
    padding: 16,
    backgroundColor: colors.background.card,
    borderRadius: 12,
    marginBottom: 12,
  },
  destName: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text.primary,
    marginBottom: 4,
  },
  destAddress: {
    fontSize: 14,
    color: colors.text.tertiary,
  },
  addButton: {
    margin: 20,
    padding: 16,
    backgroundColor: colors.primary.main,
    borderRadius: 12,
    alignItems: 'center',
  },
  addButtonText: {
    color: colors.text.primary,
    fontSize: 16,
    fontWeight: '600',
  },
});
