import { useState } from 'react'
import NumberList from '../../components/numberList'
import Average from '../../components/average'
import { Separator } from '../../items/Separator'


export default function Calculator() {
  const [numberList, set_numberList] = useState<number[]>([1, 2, 3, 4])

  return (
    <div className='flex flex-col items-center bg-gray-800 h-screen text-white select-none'>
      <h2 className='mt-5'>CALCULATOR</h2>

      <Separator/>

      <NumberList 
        numberList={numberList}
        set_numberList={set_numberList}
      />

      <Separator/>

      <Average 
        numberList={numberList}
      />

      <Separator/>
    </div>
  )
}
