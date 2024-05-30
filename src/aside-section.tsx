import React from 'react'
import { Wheels } from './items'
import type { CarItem } from './items'
import ItemSection from './item-section'
import { Upgrades } from './tesla-upgrades'
import type { UpgradeType, PaymentType } from './tesla-upgrades'
import { ConfigSection } from './config-section'

function AsideSection ({
  bodyColors,
  interiorColors,
  handleBodyColorChange,
  handleInteriorColorChange,
  props
}: {
  bodyColors: CarItem[],
  interiorColors: CarItem[],
  handleBodyColorChange: (color: CarItem) => void,
  handleInteriorColorChange: (color: CarItem) => void,
  props: React.HTMLAttributes<HTMLElement>
}) {
  const [selectedBodyColor, setSelectedBodyColor] = React.useState<CarItem>(bodyColors[0])
  const [selectedInteriorColor, setSelectedInteriorColor] = React.useState<CarItem>(interiorColors[0])
  const [selectedWheel, setSelectedWheel] = React.useState<CarItem>(Wheels[0])
  const [selectedUpgrade, setSelectedUpgrade] = React.useState<UpgradeType>('Rear-Wheel Drive')
  const [selectedPaymentType, setSelectedPaymentType] = React.useState<PaymentType>('cash')

  return (
    <aside {...props}>
      <ConfigSection
        title='Model 3'
        upgrades={Upgrades}
        selectedUpgrade={selectedUpgrade}
        selectedPaymentType={selectedPaymentType}
        handlePaymentTypeChange={setSelectedPaymentType}
        handleSelectedUpgradeChange={setSelectedUpgrade}
      />
      <ItemSection
        title='Paint'
        itemSet={bodyColors}
        selectedItem={selectedBodyColor}
        handleItemChange={handleBodyColorChange}
        setSelectedItem={setSelectedBodyColor}
      />

      {/* This section is just a placeholder for future development */}
      <ItemSection
        title='Wheels'
        itemSet={Wheels}
        selectedItem={selectedWheel}
        handleItemChange={() => {}}
        setSelectedItem={setSelectedWheel}
      />

      <ItemSection
        title='Interior'
        itemSet={interiorColors}
        selectedItem={selectedInteriorColor}
        handleItemChange={handleInteriorColorChange}
        setSelectedItem={setSelectedInteriorColor}
      />

    </aside>
  )
}

export default AsideSection
