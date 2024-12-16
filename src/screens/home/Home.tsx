import CustomText from '@/components/common/CustomText';
import { NightSkyBackground } from '@/components/home/NightSkyBackGround';
import { colors } from '@/constants';
import { MainBottomTabNavigationProps } from '@/navigations/bottomTab/mainBottomTabNavigation';
import responsive from '@/utils/responsive';
import React, { useCallback, useRef } from 'react';
import { Pressable, SafeAreaView, StyleSheet, View } from 'react-native';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { BottomSheetModalMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import SafeHomeBottomSheet from '@/components/home/SafeHomeBottomSheet';

interface HomeScreenProps {
  navigation: MainBottomTabNavigationProps;
}
type BottomSheetRef<T = any> = BottomSheetModalMethods<T>;

function Home({ navigation }: HomeScreenProps) {
  const bottomSheetRef = useRef<BottomSheetRef>(null);

  const handlePressStart = () => {
    bottomSheetRef.current?.present();
  };

  const handleClose = useCallback(() => {
    bottomSheetRef.current?.dismiss();
  }, []);

  return (
    <SafeAreaView style={styles.backGround}>
      <View style={StyleSheet.absoluteFill}>
        <NightSkyBackground />
      </View>
      <View style={styles.container}>
        <View style={styles.textWrapper}>
          <CustomText type="title1" variant="primary" weight="bold">
            오늘밤도{'\n'}안전하게
          </CustomText>
        </View>
        <Pressable style={styles.circle} onPress={handlePressStart}>
          <CustomText type="largeTitle" variant="primary" weight="bold">
            안심귀가
          </CustomText>
          <CustomText type="title1" variant="primary" weight="regular">
            시작하기
          </CustomText>
        </Pressable>
      </View>
      <BottomSheetModal
        ref={bottomSheetRef}
        enablePanDownToClose
        index={1} // 기본으로 보여질 높이 인덱스
        snapPoints={['90%']}
        backgroundStyle={{
          backgroundColor: colors.background.secondary,
        }}>
        <SafeHomeBottomSheet onClose={handleClose} />
      </BottomSheetModal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  textWrapper: {
    position: 'absolute',
    top: responsive(60),
    left: responsive(30),
  },
  backGround: {
    backgroundColor: colors.background.primary,
    flex: 1,
  },
  container: {
    height: '100%',
    width: '100%',
    paddingLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    width: responsive(300),
    height: responsive(300),
    borderRadius: '100%',
    marginTop: responsive(20),
    borderColor: colors.primary.main,
    borderWidth: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 'auto',
  },
});

export default Home;
