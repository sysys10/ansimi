interface NaverPlaceResponse {
  places: {
    name: string; // 장소명
    address: string; // 주소
    x: string; // 경도
    y: string; // 위도
    roadAddress: string; // 도로명 주소
  }[];
}

// 저장할 LocationType
type LocationType = {
  name: string; // 장소명
  address: string; // 주소
  latitude: number; // 위도
  longitude: number; // 경도
};

export type { NaverPlaceResponse, LocationType };
