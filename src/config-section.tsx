import React, { useState } from 'react'
import { PaymentRecordType, PaymentType, UpgradeRecordType, UpgradeSavings, UpgradeType } from './tesla-upgrades'

export function ConfigSection ({
  title,
  upgrades,
  selectedUpgrade,
  selectedPaymentType,
  handlePaymentTypeChange,
  handleSelectedUpgradeChange
}: {
    title: string,
    upgrades: UpgradeRecordType,
    selectedUpgrade: UpgradeType,
    selectedPaymentType: PaymentType,
    handlePaymentTypeChange: (paymentType: PaymentType) => void
    handleSelectedUpgradeChange: (upgrade: UpgradeType) => void
}) {
  const [showSavings, setShowSavings] = useState(false)

  return (
    <section className='flex flex-col items-center justify-center h-full w-full pt-28 pb-20'>
      <h1 className='text-5xl font-semibold font-sans'>{title}</h1>
      <ConfigFeatures upgrades={upgrades} selectedUpgrade={selectedUpgrade} />
      <PaymentTypeSection selectedPaymentType={selectedPaymentType} handlePaymentTypeChange={handlePaymentTypeChange} />
      <span className='flex flex-row items-center justify-between pt-5 w-full px-12'>
        {paymentToSavingsSection[selectedPaymentType]}
        <ToggleButton showSavings={showSavings} handleShowSavingsChange={setShowSavings} />
      </span>
      <UpgradeSelectorSection handleSelectedUpgradeChange={handleSelectedUpgradeChange} showSavings={showSavings} upgrades={upgrades} selectedPaymentType={selectedPaymentType} savings={UpgradeSavings} currentUpgrade={selectedUpgrade} />
    </section>
  )
}

function ConfigFeatures ({ upgrades, selectedUpgrade }: { upgrades: UpgradeRecordType, selectedUpgrade: UpgradeType }) {
  return (
    <ul className='flex flex-row mt-8 items-center gap-7 pr-4'>
      <li className='flex flex-col items-center'>
        <strong className='text-xl'>
          {upgrades[selectedUpgrade].range} mi
        </strong>
        <p className='text-sm font-semibold text-black/40'>Range (EPA est.)</p>
      </li>
      <li className='flex flex-col items-center'>
        <strong className='text-xl'>
          {upgrades[selectedUpgrade].topSpeed} mph
        </strong>
        <p className='text-sm font-semibold text-black/40'>Top Speed</p>
      </li>
      <li className='flex flex-col items-center'>
        <strong className='text-xl'>
          {upgrades[selectedUpgrade].acceleration} sec
        </strong>
        <p className='text-sm font-semibold text-black/40'>0-60 mph</p>
      </li>
    </ul>
  )
}

function PaymentTypeSection ({ selectedPaymentType, handlePaymentTypeChange }: { selectedPaymentType: PaymentType, handlePaymentTypeChange: (paymentType: PaymentType) => void }) {
  const buttonUnselectedStyle = 'h-full w-full px-9 py-1 border-b-2 border-black/60 hover:border-b-4 hover:border-black/40'
  const buttonSelectedStyle = 'h-full w-full px-9 py-1 border-b-4 border-black/80'

  return (
    <ul className='flex flex-row pt-6 *:w-full *:h-full *:content-center'>
      <li>
        <button
          className={selectedPaymentType === 'cash' ? buttonSelectedStyle : buttonUnselectedStyle}
          onClick={() => handlePaymentTypeChange('cash')}
        >
          Cash
        </button>
      </li>
      <li>
        <button
          className={selectedPaymentType === 'lease' ? buttonSelectedStyle : buttonUnselectedStyle}
          onClick={() => handlePaymentTypeChange('lease')}
        >
          Lease
        </button>
      </li>
      <li>
        <button
          className={selectedPaymentType === 'finance' ? buttonSelectedStyle : buttonUnselectedStyle}
          onClick={() => handlePaymentTypeChange('finance')}
        >
          Finance
        </button>
      </li>
    </ul>
  )
}

function UpgradeSelectorSection ({ handleSelectedUpgradeChange, showSavings, upgrades, selectedPaymentType, savings, currentUpgrade }: { handleSelectedUpgradeChange: (upgrade: UpgradeType) => void, showSavings: boolean, upgrades: UpgradeRecordType, selectedPaymentType: PaymentType, savings: PaymentRecordType, currentUpgrade: UpgradeType }) {
  const buttonSelectedStyle = 'w-full border-4 rounded-md border-blue-600 flex flex-row justify-between py-3 px-3 *:font-semibold *:text-black/80'
  const buttonUnselectedStyle = 'w-full border rounded-md border-black/60 flex flex-row justify-between py-3 px-3 *:font-semibold *:text-black/40'

  const UpgradeButton = ({ upgradeType, label } : { upgradeType: UpgradeType, label: string }) => (
    <li>
      <button onClick={() => handleSelectedUpgradeChange(upgradeType)} className={currentUpgrade === upgradeType ? buttonSelectedStyle : buttonUnselectedStyle}>
        <p>{label}</p>
        <span>
          ${
            showSavings
              ? (upgrades[upgradeType].price[selectedPaymentType] - savings[selectedPaymentType]).toLocaleString()
              : upgrades[upgradeType].price[selectedPaymentType].toLocaleString()
          }
          {selectedPaymentType === 'cash' ? '' : '/mo'}
        </span>
      </button>
    </li>
  )

  return (
    <ul className='w-full px-12 flex flex-col gap-4 pt-4 '>
      <UpgradeButton upgradeType='Rear-Wheel Drive' label='Rear-Wheel Drive' />
      <UpgradeButton upgradeType='Long Range All-Wheel Drive' label='Long Range All-Wheel Drive' />
      <UpgradeButton upgradeType='Performance All-Wheel Drive' label='Performance All-Wheel Drive' />
    </ul>
  )
}

const paymentToSavingsSection : Record<PaymentType, React.JSX.Element> = {
  cash: (
    <p className='text-sm font-semibold text-black/40 flex-1'>Include est. 5-year gas savings of $5,000.<br /><a>Customize</a></p>
  ),
  lease: (
    <p className='text-sm font-semibold text-black/40 flex-1'>Include gas savings of $83 /mo.<br /><a>Customize</a></p>
  ),
  finance: (
    <p className='text-sm font-semibold text-black/40 flex-1'>Include gas savings of $83 /mo.<br /><a>Customize</a></p>
  )
}

function ToggleButton ({ showSavings, handleShowSavingsChange }: { showSavings: boolean, handleShowSavingsChange: (nextShowSavings: boolean) => void }) {
  return (
    <label className='inline-flex items-center cursor-pointer pr-2 pb-1'>
      <input type='checkbox' checked={showSavings} className='sr-only peer' onChange={() => handleShowSavingsChange(!showSavings)} />
      <div className="relative w-9 h-5 bg-gray-200 peer-focus:ring-4 rounded-full peer dark:bg-black/25 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600 ring-transparent" />
    </label>
  )
}
