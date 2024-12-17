import React, { useEffect, useRef } from 'react';
import {
  NaverMapView,
  NaverMapViewRef,
  NaverMapMarkerOverlay,
} from '@mj-studio/react-native-naver-map';
import useLocationPermission from '@/hooks/useLocationPermissions';
import useAnsimStore from '@/stores/ansimStore';
import MapBottomSheetModal from '@/components/map/MapBottomSheetModal';
import useLocationTrack from '@/hooks/useTrack';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import SosButton from '@/components/map/SosButton';

function Map() {
  const ref = useRef<NaverMapViewRef>(null);
  const selectedDestination = useAnsimStore(state => state.selectedDestination);
  useLocationPermission();
  const { isArrive } = useLocationTrack({ ref, selectedDestination });
  console.log(isArrive);
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  useEffect(() => {
    bottomSheetRef.current?.present();
  }, []);
  return (
    <>
      <NaverMapView
        ref={ref}
        style={{ flex: 1 }}
        mapType={'Basic'}
        isIndoorEnabled={false}
        buildingHeight={0}
        layerGroups={{
          BUILDING: false,
          TRAFFIC: false,
          TRANSIT: false,
          BICYCLE: false,
          MOUNTAIN: false,
          CADASTRAL: false,
        }}
        lightness={-0.12}
        isShowCompass
        isLiteModeEnabled={true}
        isNightModeEnabled={true}
        isShowLocationButton={true}>
        {selectedDestination && (
          <NaverMapMarkerOverlay
            latitude={selectedDestination.latitude}
            longitude={selectedDestination.longitude}
            caption={{ text: selectedDestination.name }}
            width={20}
            height={30}
          />
        )}
      </NaverMapView>
      <SosButton />
      <MapBottomSheetModal bottomSheetRef={bottomSheetRef} />
    </>
  );
}

export default Map;
