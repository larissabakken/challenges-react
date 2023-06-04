import { useState } from 'react'
import NumberList from '../../components/numberList'
import Average from '../../components/average'
import { Separator } from '../../items/Separator'
import { Link } from 'react-router-dom'


export default function Calculator() {
  const [numberList, set_numberList] = useState<number[]>([1, 2, 3, 4])

  return (
    <div className="flex flex-col items-center bg-gray-800 h-screen text-white select-none">
      <h2 className="text-bold mt-3">CALCULATOR</h2>
      <p className="text-slate-400 text-xs font-bold">useMemo</p> 
      <p className="text-slate-400 text-xs"><Link to={'/task'}>thank u, next 🎶</Link></p>

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
