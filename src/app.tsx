import React, { useState } from 'react'
import TeslaCanvas from './tesla-canvas'
import AsideSection from './aside-section'
import { BodyColors } from './body-colors'
import type { BodyColor } from './body-colors'

export default function App () {
  const [bodyColor, setBodyColor] = useState<BodyColor>(BodyColors[0])
  const handleBodyColorChange = (color : BodyColor) => setBodyColor(color)

  return (
    <>
      <TeslaCanvas bodyColor={bodyColor} props={{ className: 'flex w-[71.5%] h-full' }} />
      <AsideSection bodyColors={BodyColors} handleBodyColorChange={handleBodyColorChange} props={{ className: 'flex flex-col w-[28.5%] h-full' }} />
    </>
  )
}
