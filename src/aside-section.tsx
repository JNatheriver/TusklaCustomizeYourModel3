import React from 'react'
import type { CarColor } from './colors'
import ColorSection from './color-section'

function AsideSection ({
  bodyColors,
  interiorColors,
  handleBodyColorChange,
  handleInteriorColorChange,
  props
}: {
  bodyColors: CarColor[],
  interiorColors: CarColor[],
  handleBodyColorChange: (color: CarColor) => void,
  handleInteriorColorChange: (color: CarColor) => void,
  props: React.HTMLAttributes<HTMLElement>
}) {
  const [selectedBodyColor, setSelectedBodyColor] = React.useState<CarColor>(bodyColors[0])
  const [selectedInteriorColor, setSelectedInteriorColor] = React.useState<CarColor>(interiorColors[0])

  return (
    <aside {...props}>
      <ColorSection
        title='Paint'
        colorSet={bodyColors}
        selectedColor={selectedBodyColor}
        handleBodyColorChange={handleBodyColorChange}
        setSelectedColor={setSelectedBodyColor}
      />
      <ColorSection
        title='Interior'
        colorSet={interiorColors}
        selectedColor={selectedInteriorColor}
        handleBodyColorChange={handleInteriorColorChange}
        setSelectedColor={setSelectedInteriorColor}
      />
    </aside>
  )
}

export default AsideSection
