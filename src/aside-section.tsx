import React from 'react'
import { Wheels } from './items'
import type { CarItem } from './items'
import ItemSection from './item-section'

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

  return (
    <aside {...props}>
      <section className='flex flex-col items-center justify-center h-full w-full pt-28'>
        <h1 className='text-5xl font-semibold font-sans'>Model 3</h1>

      </section>
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
