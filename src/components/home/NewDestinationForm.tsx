import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { colors } from '@/constants';
import { LocationType } from '@/types';

interface Props {
  onSave: (destination: LocationType) => void;
  onCancel: () => void;
}

export function NewDestinationForm({ onSave, onCancel }: Props) {
  // 실제에선 주소만 검색해서 위도 경도 바꿔서 넣어주는걸로 가자
  const [name, setName] = useState('');
  const [lang, setLang] = useState('');
  const [long, setLong] = useState('');
  const [address, setAddress] = useState('');

  const handleSave = () => {
    const newDestination = {
      name: name,
      address: '집',
      latitude: parseFloat(lang), // 임시값, 실제로는 주소 검색 API 사용
      longitude: parseFloat(long),
    };

    onSave(newDestination);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>새로운 목적지</Text>

      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>장소명</Text>
          <TextInput
            style={styles.input}
            placeholder="예: 집, 회사"
            placeholderTextColor={colors.text.placeholder}
            value={name}
            onChangeText={setName}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>위도</Text>
          <TextInput
            style={styles.input}
            placeholder="주소 입력"
            placeholderTextColor={colors.text.placeholder}
            value={lang}
            onChangeText={setLang}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>경도</Text>
          <TextInput
            style={styles.input}
            placeholder="주소 입력"
            placeholderTextColor={colors.text.placeholder}
            value={long}
            onChangeText={setLong}
          />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.cancelButton]}
          onPress={onCancel}>
          <Text style={styles.cancelButtonText}>취소</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.saveButton]}
          onPress={handleSave}>
          <Text style={styles.saveButtonText}>저장</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.text.primary,
    marginBottom: 20,
  },
  form: {
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    color: colors.text.secondary,
    marginBottom: 8,
  },
  input: {
    backgroundColor: colors.background.card,
    borderRadius: 8,
    padding: 12,
    color: colors.text.primary,
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  button: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: colors.background.card,
  },
  saveButton: {
    backgroundColor: colors.primary.main,
  },
  cancelButtonText: {
    color: colors.text.primary,
    fontSize: 16,
    fontWeight: '500',
  },
  saveButtonText: {
    color: colors.text.primary,
    fontSize: 16,
    fontWeight: '600',
  },
});
