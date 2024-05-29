type Upgrade = {
    name: string,
    priceCash: number,
    priceLease: number,
    priceFinance: number,
    range: number,
    topSpeed: number,
    acceleration: number,
}

type UpgradeSavingsType = {
    cashSavings: number,
    leaseSavings: number,
    financeSavings: number,
}

export const UpgradeSavings : UpgradeSavingsType = {
  cashSavings: 5000,
  leaseSavings: 83,
  financeSavings: 187
}

export const Upgrades : Upgrade[] = [
  {
    name: 'Rear-Wheel Drive',
    priceCash: 38900,
    priceLease: 299,
    priceFinance: 605,
    range: 272,
    topSpeed: 125,
    acceleration: 5.8
  },
  {
    name: 'Long Range All-Wheel Drive',
    priceCash: 47740,
    priceLease: 399,
    priceFinance: 752,
    range: 341,
    topSpeed: 125,
    acceleration: 4.2
  },
  {
    name: 'Performance All-Wheel Drive',
    priceCash: 54990,
    priceLease: 599,
    priceFinance: 874,
    range: 301,
    topSpeed: 163,
    acceleration: 2.9
  }
]
