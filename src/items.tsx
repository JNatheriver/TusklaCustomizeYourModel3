import * as THREE from 'three'

export type CarItem = {
  name: string
  url: string
  color: THREE.Color
  price: number
}

export const BodyColors : CarItem[] = [
  {
    name: 'Stealth Grey',
    url: 'https://digitalassets.tesla.com/co1n/image/upload/f_auto,q_auto/prod/static_assets/MODEL3_/UI/Paint_StealthGrey.png',
    color: new THREE.Color('#555'),
    price: 0
  },
  {
    name: 'Pearl White Multi-Coat',
    url: 'https://digitalassets.tesla.com/co1n/image/upload/f_auto,q_auto/prod/static_assets/MODEL3/UI/Paint_White.png',
    color: new THREE.Color('white'),
    price: 1000
  },
  {
    name: 'Deep Blue Metallic',
    url: 'https://digitalassets.tesla.com/co1n/image/upload/f_auto,q_auto/prod/static_assets/MODEL3/UI/Paint_Blue.png',
    color: new THREE.Color('midnightblue'),
    price: 1000
  },
  {
    name: 'Solid Black',
    url: 'https://digitalassets.tesla.com/co1n/image/upload/f_auto,q_auto/prod/static_assets/MODEL3/UI/Paint_Black.png',
    color: new THREE.Color('black'),
    price: 1000
  },
  {
    name: 'Ultra Red',
    url: 'https://digitalassets.tesla.com/co1n/image/upload/f_auto,q_auto/prod/static_assets/MODEL3/UI/Paint_Red.png',
    color: new THREE.Color('darkred'),
    price: 2000
  }
]

export const InteriorColors : CarItem[] = [
  {
    name: 'Black',
    url: 'https://digitalassets.tesla.com/co1n/image/upload/f_auto,q_auto/prod/static_assets/MODEL3/UI/ui_swat_int_in3pb.png',
    color: new THREE.Color('#383838'),
    price: 0
  },
  {
    name: 'Black and White',
    url: 'https://digitalassets.tesla.com/co1n/image/upload/f_auto,q_auto/prod/static_assets/MODEL3/UI/ui_swat_int_white.png',
    color: new THREE.Color('white'),
    price: 0
  }
]

export const Wheels : CarItem[] = [
  {
    name: '19’’ Nova Wheels',
    url: 'https://digitalassets.tesla.com/co1n/image/upload/f_auto,q_auto/prod/static_assets/MODEL3_/UI/Wheel-Swatch_19-in.png',
    color: new THREE.Color(),
    price: 0
  }
]
