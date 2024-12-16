const colors = {
  // 메인 색상
  primary: {
    main: '#302B5E', // 메인 브랜드 컬러
    light: '#453D85', // 그라데이션, 하이라이트용
    dark: '#221F42', // 진한 강조용
  },
  // 배경
  background: {
    primary: '#161616', // colors.bg
    secondary: '#202124', // colors.bg_secondary
    card: '#171717', // colors.GRAY_50
  },

  // 텍스트
  text: {
    primary: '#FFFFFF', // colors.text_primary
    secondary: '#F8F8F8', // colors.text_secondary
    tertiary: '#8E8E8E', // colors.text_tertiary
    placeholder: '#8E8E8E', // colors.text_placeholder
  },

  // 기능성 색상
  status: {
    error: '#EC87A5', // colors.text_error, 위험/긴급 상황
    warning: '#FACC15', // colors.text_warning, 주의 필요
    success: '#82C766', // colors.text_success, 안전/완료
    info: '#7CC7FF', // colors.text_link, 정보/링크
  },

  // 테두리
  border: {
    default: '#3C4043', // colors.border
    focus: '#0D8AFF', // colors.border_focus
  },

  // 버튼
  button: {
    text: '#161616', // colors.text_button
    disabled: '#5e5e5e', // colors.GRAY_300
  },

  // 기능별 컴포넌트
  component: {
    sos: '#EC87A5', // 긴급 버튼
    tracking: '#82C766', // 추적 활성화 상태
    map: {
      background: '#202124',
      marker: '#302B5E',
      route: '#453D85',
    },
  },
} as const;

export { colors };
