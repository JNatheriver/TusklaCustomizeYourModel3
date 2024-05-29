import React, { useState } from 'react'
import TeslaCanvas from './tesla-canvas'
import AsideSection from './aside-section'
import { BodyColors, InteriorColors } from './items'
import type { CarItem } from './items'

export default function App () {
  const [bodyColor, setBodyColor] = useState<CarItem>(BodyColors[0])
  const [interiorColor, setInteriorColor] = useState<CarItem>(InteriorColors[0])
  const handleBodyColorChange = (color : CarItem) => setBodyColor(color)
  const handleInteriorColorChange = (color : CarItem) => setInteriorColor(color)

  return (
    <>
      <TeslaCanvas bodyColor={bodyColor} interiorColor={interiorColor} props={{ className: 'flex w-[71.5%] h-full' }} />
      <AsideSection
        bodyColors={BodyColors}
        interiorColors={InteriorColors}
        handleBodyColorChange={handleBodyColorChange}
        handleInteriorColorChange={handleInteriorColorChange}
        props={{ className: 'flex flex-col w-[28.5%] h-full gap-32 overflow-y-scroll no-scrollbar' }}
      />
    </>
  )
}
