import React, { useEffect, useState } from 'react';
import MainBottomTabNavigation from '../bottomTab/mainBottomTabNavigation';
import { Text } from 'react-native';
import AnsimStore from '@/stores/ansimStore';

interface RootNavigationProps {}

function Loading() {
  return <Text>a</Text>;
}

function RootNavigation({}: RootNavigationProps) {
  const [loading, setLoading] = useState(true);

  const { destinations, getDestinations, addDestination } = AnsimStore();
  useEffect(() => {
    //데이터 있는지 확인 없으면 그거
    addDestination({
      name: 'string', // 장소명
      address: 'string', // 주소
      latitude: 'string', // 위도
      longitude: 'string', // 경도
    });
    getDestinations();
    console.log(destinations);
    setLoading(false);
  }, []);

  return loading ? <Loading /> : <MainBottomTabNavigation />;
}

export default RootNavigation;
