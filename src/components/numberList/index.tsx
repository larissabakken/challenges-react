import { useState } from 'react'
import { Separator } from '../../items/Separator'

  interface IProps {
    numberList: number[]
    set_numberList: React.Dispatch<React.SetStateAction<number[]>>
  }

export default function NumberList({numberList, set_numberList}: IProps) {
  const [inputToAddNumber, set_inputToAddNumber] = useState<number>(0)
  const [inputToEditNumber, set_inputToEditNumber] = useState<number>(0)
  const [inputToEditOldNumber, set_inputToEditOldNumber] = useState<number>(0)

  const [modalOpened, set_modalOpened] = useState<boolean>(false)


  // Implement the functions to add, remove, and edit numbers in the calculator

  const handleAddNumber = () => {
    const inputToAddNumberList = [...numberList, inputToAddNumber]
    set_numberList(inputToAddNumberList)
    set_inputToAddNumber(0)
  }


  const handleinputToEditNumber = (value:number) => {
    set_inputToEditNumber(value)
    set_modalOpened(true)
    set_inputToEditOldNumber(value)
  }

  const handleEditAccept = () => {
    set_modalOpened(false)


    const inputToAddNumberList = numberList.map((item) => {
      if(item === inputToEditOldNumber){
        return inputToEditNumber
      }
      return item
    })

    set_numberList(inputToAddNumberList)
  }


  const handleRemoveNumber = (index: number) => {
    const inputToAddNumberList = [...numberList]
    inputToAddNumberList.splice(index, 1)
    set_numberList(inputToAddNumberList)
  }

  return (
    <div className='mt-8 flex flex-col items-center w-full'>
      {/* Display the calculator of numbers and the interaction elements */}

      <section className='flex justify-center'>
        <ul className='grid grid-cols-4 gap-2'>
          {numberList.map((number, index) => {
            return (
              <li className='border border-spacing-0 border-amber-500 flex flex-col gap-3 bg-gray-600 p-2 rounded-md'>
                <p className='text-center'>{number}</p>
                <div className='flex gap-2'>
                  <button
                    className='bg-green-500 w-[75px] rounded-lg'
                    onClick={() => handleinputToEditNumber(number)}>Edit</button>
                  <button 
                    className='bg-red-500 w-[75px] rounded-lg'
                    onClick={() => handleRemoveNumber(index)}>Remove</button>
                </div>
              </li>
            )
          })}
        </ul>
      </section>

      <Separator />

      <section className='flex justify-center items-end gap-4'>
        <div className='bg-gray-600 py-4 px-8 flex flex-col items-center gap-2 rounded-md w-[200px]'>

        <p className='text-amber-500 font-semibold text-lg'>Set a value</p>
        <input 
          className='bg-gray-700 px-3 rounded-2xl w-[100px] border border-spacing-1 border-amber-500'
          onChange={(event) => set_inputToAddNumber(Number(event.target.value))}
          value={inputToAddNumber}
          type={'number'}
          />
        <button 
          className='mt-4 bg-amber-500 w-[85px] mx-auto rounded-lg'
          onClick={handleAddNumber}>Add more</button>
        </div>
      </section>

      <div className={`${modalOpened ? 'block' : 'hidden'} fixed top-0 left-0 bg-slate-900/40 w-screen h-screen`}>
        <div className='shadow shadow-slate-950 rounded-md gap-4 p-4 flex flex-col items-center justify-between w-[250px] bg-gray-600 fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
          <p className='text-amber-500 font-semibold text-lg'>Chooge a new value</p>
          <input 
            className='bg-gray-700 px-3 rounded-2xl w-[100px] border border-spacing-1 border-amber-500'
            onChange={(event) => set_inputToEditNumber(Number(event.target.value))}
            value={inputToEditNumber}
            type={'number'}
          />
          <div className='flex gap-4 mt-8'>
            <button 
              className='bg-green-500 w-[75px] rounded-lg'
              onClick={() => handleEditAccept()}>Accept</button>
            <button 
              className='bg-red-500 w-[75px] rounded-lg'
              onClick={() => set_modalOpened(false)}>Decline</button>
          </div>
        </div>
      </div>

    </div>
  )
}
