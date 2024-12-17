import { useEffect } from 'react';
import { Platform } from 'react-native';
import {
  PERMISSIONS,
  request,
  requestLocationAccuracy,
  requestMultiple,
} from 'react-native-permissions';
function useLocationPermission() {
  useEffect(() => {
    if (Platform.OS === 'ios') {
      request(PERMISSIONS.IOS.LOCATION_ALWAYS).then(status => {
        console.log(`Location request status: ${status}`);
        if (status === 'granted') {
          requestLocationAccuracy({
            purposeKey: '목적지에 무사히 도착했는지 확인하기 위해서 필요해요!',
          })
            .then(accuracy => {
              console.log(`Location accuracy is: ${accuracy}`);
            })
            .catch(e => {
              console.error(`Location accuracy request has been failed: ${e}`);
            });
        }
      });
    }
    if (Platform.OS === 'android') {
      requestMultiple([
        PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
        PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION,
      ])
        .then(status => {
          console.log(`Location request status: ${status}`);
        })
        .catch(e => {
          console.error(`Location request has been failed: ${e}`);
        });
    }
  }, []);
}

export default useLocationPermission;
