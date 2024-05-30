export type UpgradeType = 'Rear-Wheel Drive' | 'Long Range All-Wheel Drive' | 'Performance All-Wheel Drive'
export type PaymentType = 'cash' | 'lease' | 'finance'

export type PaymentRecordType = Record<PaymentType, number>

type UpgradeDetailsType = {
    price: PaymentRecordType,
    range: number,
    topSpeed: number,
    acceleration: number,
}

export type UpgradeRecordType = Record<UpgradeType, UpgradeDetailsType>

export const Upgrades : UpgradeRecordType = {
  'Rear-Wheel Drive': {
    price:
    {
      cash: 38900,
      lease: 299,
      finance: 605
    },
    range: 272,
    topSpeed: 125,
    acceleration: 5.8
  },
  'Long Range All-Wheel Drive': {
    price: {
      cash: 47740,
      lease: 399,
      finance: 752
    },
    range: 341,
    topSpeed: 125,
    acceleration: 4.2
  },
  'Performance All-Wheel Drive': {
    price: {
      cash: 54990,
      lease: 599,
      finance: 874
    },
    range: 301,
    topSpeed: 163,
    acceleration: 2.9
  }
}

export const UpgradeSavings : PaymentRecordType = {
  cash: 5000,
  lease: 83,
  finance: 83
}
