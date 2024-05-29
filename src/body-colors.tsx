import * as THREE from 'three'

export type BodyColor = {
  name: string
  url: string
  color: THREE.Color
  price: number
}

export const BodyColors : BodyColor[] = [
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
