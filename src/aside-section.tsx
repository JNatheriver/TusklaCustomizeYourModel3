import React from 'react'
import type { BodyColor } from './body-colors'

function AsideSection ({ bodyColors, handleBodyColorChange, props }: {bodyColors : BodyColor[], handleBodyColorChange : (color : BodyColor) => void, props : React.HTMLAttributes<HTMLElement>}) {
  const [selectedColor, setSelectedColor] = React.useState<BodyColor>(bodyColors[0])

  const notSelectedColorStyle = 'rounded-full p-2 hover:outline hover:outline-4 hover:outline-offset-[-4px] hover:outline-blue-800'
  const selectedColorStyle = 'rounded-full p-2 outline outline-4 outline-offset-[-4px] outline-blue-800'

  return (
    <aside {...props}>
      <section className='grid grid-cols-5 grid-rows-3  px-20'>
        <h1 className='col-span-5 text-center text-3xl font-semibold font-sans'>Paint</h1>
        {bodyColors.map((color, index) =>
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
        )}
        <p className='col-span-5 text-center pt-3'><strong>{selectedColor.name}</strong> {selectedColor.price > 0 ? `$${selectedColor.price.toLocaleString()}` : 'Included'}</p>
      </section>
    </aside>
  )
}

export default AsideSection
