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
  const notSelectedColorStyle = 'rounded-full p-2 max-w-16 hover:outline hover:outline-4 hover:outline-offset-[-4px] hover:outline-blue-600 '
  const selectedColorStyle = 'rounded-full p-2  max-w-16 outline outline-4 outline-offset-[-4px] outline-blue-800'

  return (
    <section className='flex flex-col w-full px-20 '>
      <h1 className='text-center text-3xl font-semibold font-sans'>{title}</h1>

      <menu className='flex flex-row items-center justify-center py-3'>
        {colorSet.map((color, index) => (
          <li key={`li-${index}`}>
            <button
              key={`color-${index}`}
              className={selectedColor.name === color.name ? selectedColorStyle : notSelectedColorStyle}
              onClick={() => {
                handleBodyColorChange(color)
                setSelectedColor(color)
              }}
            >
              <img src={color.url} alt={color.name} />
            </button>
          </li>
        ))}
      </menu>

      <p className='text-center pt-3'>
        <strong>{selectedColor.name}</strong> {selectedColor.price > 0 ? `$${selectedColor.price.toLocaleString()}` : 'Included'}
      </p>
    </section>
  )
}

export default ColorSection
