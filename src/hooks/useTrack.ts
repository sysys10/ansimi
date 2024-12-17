import { LocationType } from '@/types';
import { NaverMapViewRef } from '@mj-studio/react-native-naver-map';
import Geolocation from '@react-native-community/geolocation';
import React, { useEffect, useState } from 'react';

interface useTrackProps {
  ref: React.RefObject<NaverMapViewRef>;
  selectedDestination: LocationType | null;
}

function useLocationTrack({ ref, selectedDestination }: useTrackProps) {
  const [isArrive, setIsArrive] = useState(false);
  useEffect(() => {
    const watchId = Geolocation.watchPosition(
      position => {
        const { latitude, longitude } = position.coords;
        ref.current?.animateCameraTo({ latitude, longitude, duration: 500 });
        ref.current?.setLocationTrackingMode('Follow');
        console.log(latitude, selectedDestination?.latitude);
        console.log(longitude, selectedDestination?.longitude);
        latitude == selectedDestination?.latitude &&
        longitude == selectedDestination?.longitude
          ? setIsArrive(true)
          : setIsArrive(false);
      },
      error => {
        console.log('Location error:', error.code, error.message);
      },
      {
        enableHighAccuracy: true,
        interval: 1,
        distanceFilter: 0,
        fastestInterval: 1,
      },
    );
    return () => {
      if (watchId) {
        Geolocation.clearWatch(watchId);
      }
    };
  }, []);

  return { isArrive };
}

export default useLocationTrack;
