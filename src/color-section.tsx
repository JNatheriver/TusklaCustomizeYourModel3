import React from 'react'
import type { CarColor } from './colors'

interface ColorSectionProps {
  title: string,
  colorSet: CarColor[]
  selectedColor: CarColor
  handleBodyColorChange: (color: CarColor) => void
  setSelectedColor: React.Dispatch<React.SetStateAction<CarColor>>
}

const ColorSection: React.FC<ColorSectionProps> = ({ title, colorSet, selectedColor, handleBodyColorChange, setSelectedColor }) => {
  const notSelectedColorStyle = 'rounded-full p-2 hover:outline hover:outline-4 hover:outline-offset-[-4px] hover:outline-blue-600 '
  const selectedColorStyle = 'rounded-full p-2 outline outline-4 outline-offset-[-4px] outline-blue-800'

  return (
    <section className='grid grid-cols-5 grid-rows-3 px-20'>
      <h1 className='col-span-5 text-center text-3xl font-semibold font-sans'>{title}</h1>
      {colorSet.map((color, index) => (
        <button
          key={`color ${index}`}
          className={selectedColor.name === color.name ? selectedColorStyle : notSelectedColorStyle}
          onClick={() => {
            handleBodyColorChange(color)
            setSelectedColor(color)
          }}
        >
          <img src={color.url} alt={color.name} />
        </button>
      ))}
      <p className='col-span-5 text-center pt-3'>
        <strong>{selectedColor.name}</strong> {selectedColor.price > 0 ? `$${selectedColor.price.toLocaleString()}` : 'Included'}
      </p>
    </section>
  )
}

export default ColorSection
