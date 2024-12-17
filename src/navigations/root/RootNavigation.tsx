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

  const { getDestinations } = AnsimStore();
  useEffect(() => {
    //데이터 있는지 확인 없으면 그거
    getDestinations();
    setLoading(false);
  }, []);

  return loading ? <Loading /> : <MainBottomTabNavigation />;
}

export default RootNavigation;
