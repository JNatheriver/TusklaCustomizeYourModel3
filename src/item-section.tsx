import React from 'react'
import type { CarItem } from './items'

interface ItemSectionProps {
  title: string,
  itemSet: CarItem[],
  selectedItem: CarItem
  handleItemChange: (color: CarItem) => void
  setSelectedItem: React.Dispatch<React.SetStateAction<CarItem>>
}

const ItemSection: React.FC<ItemSectionProps> = ({ title, itemSet, selectedItem, handleItemChange, setSelectedItem }) => {
  const notSelectedColorStyle = 'rounded-full p-2 max-w-16 hover:outline hover:outline-4 hover:outline-offset-[-4px] hover:outline-blue-600 '
  const selectedColorStyle = 'rounded-full p-2  max-w-16 outline outline-4 outline-offset-[-4px] outline-blue-800'

  return (
    <section className='flex flex-col w-full px-20 '>
      <h1 className='text-center text-3xl font-semibold font-sans'>{title}</h1>

      <menu className='flex flex-row items-center justify-center py-3'>
        {itemSet.map((color, index) => (
          <li key={`li-${index}`}>
            <button
              key={`color-${index}`}
              className={selectedItem.name === color.name ? selectedColorStyle : notSelectedColorStyle}
              onClick={() => {
                handleItemChange(color)
                setSelectedItem(color)
              }}
            >
              <img src={color.url} alt={color.name} />
            </button>
          </li>
        ))}
      </menu>

      <p className='text-center pt-3'>
        <strong>{selectedItem.name}</strong> {selectedItem.price > 0 ? `$${selectedItem.price.toLocaleString()}` : 'Included'}
      </p>
    </section>
  )
}

export default ItemSection
