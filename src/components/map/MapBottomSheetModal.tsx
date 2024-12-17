import React, { useMemo } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet';
import { colors } from '@/constants';
import useAnsimStore from '@/stores/ansimStore';
interface MapBottomSheetModalProps {
  bottomSheetRef: React.RefObject<BottomSheetModal>;
}

export default function MapBottomSheetModal({
  bottomSheetRef,
}: MapBottomSheetModalProps) {
  const snapPoints = useMemo(() => ['30%'], []);
  const selectedDestination = useAnsimStore(state => state.selectedDestination);

  return (
    <BottomSheetModal
      ref={bottomSheetRef}
      snapPoints={snapPoints}
      index={0} // 처음부터 첫번째 스냅포인트에 위치
      enablePanDownToClose={false} // 아래로 드래그해서 닫기 비활성화
      backgroundStyle={{
        backgroundColor: colors.background.secondary,
      }}>
      <BottomSheetView style={styles.container}>
        {/* 목적지 정보 */}
        <View style={styles.header}>
          <Text style={styles.title}>
            {selectedDestination?.name || '목적지'}로 가는 중
          </Text>
          <Text style={styles.subtitle}>도착까지 15분 남음</Text>
        </View>

        {/* 예상 도착 시간 */}
        <View style={styles.infoCard}>
          <Text style={styles.label}>도착 예정 시간</Text>
          <Text style={styles.time}>22:45까지</Text>
        </View>

        {/* 보호자 정보 */}
        <View style={styles.infoCard}>
          <View style={styles.guardianInfo}>
            <View style={styles.avatarCircle} />
            <View>
              <Text style={styles.label}>보호자</Text>
              <Text style={styles.guardianText}>엄마 · 자동 알림 설정됨</Text>
            </View>
          </View>
        </View>

        {/* SOS 버튼 */}
        <TouchableOpacity style={styles.sosButton}>
          <Text style={styles.sosText}>SOS</Text>
        </TouchableOpacity>
      </BottomSheetView>
    </BottomSheetModal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text.primary,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: colors.text.tertiary,
  },
  infoCard: {
    backgroundColor: colors.background.card,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  label: {
    fontSize: 14,
    color: colors.text.tertiary,
    marginBottom: 4,
  },
  time: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primary.main,
  },
  guardianInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: colors.primary.main,
    marginRight: 12,
  },
  guardianText: {
    fontSize: 14,
    color: colors.text.secondary,
  },
  sosButton: {
    backgroundColor: colors.status.error,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginTop: 8,
  },
  sosText: {
    color: colors.text.primary,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
