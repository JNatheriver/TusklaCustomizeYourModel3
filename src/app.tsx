import React, { useState } from 'react'
import TeslaCanvas from './tesla-canvas'
import AsideSection from './aside-section'
import { BodyColors, InteriorColors } from './colors'
import type { CarColor } from './colors'

export default function App () {
  const [bodyColor, setBodyColor] = useState<CarColor>(BodyColors[0])
  const [interiorColor, setInteriorColor] = useState<CarColor>(InteriorColors[0])
  const handleBodyColorChange = (color : CarColor) => setBodyColor(color)
  const handleInteriorColorChange = (color : CarColor) => setInteriorColor(color)

  return (
    <>
      <TeslaCanvas bodyColor={bodyColor} interiorColor={interiorColor} props={{ className: 'flex w-[71.5%] h-full' }} />
      <AsideSection
        bodyColors={BodyColors}
        interiorColors={InteriorColors}
        handleBodyColorChange={handleBodyColorChange}
        handleInteriorColorChange={handleInteriorColorChange}
        props={{ className: 'flex flex-col w-[28.5%] h-full gap-32' }}
      />
    </>
  )
}
