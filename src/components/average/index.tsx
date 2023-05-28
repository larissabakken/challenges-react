import { useMemo } from 'react'

export default function Average({ numberList = [1, 2] }) {
  // Use the useMemo hook to calculate the average of the numbers

  const average = useMemo(() => {
    const total = numberList.reduce((accumulator, currentValue) => {
      return accumulator + currentValue
    })

    return total / numberList.length
  }, [numberList])

  console.log(numberList)
  return (
    <div className='h-fit bg-gray-600 mt-4 w-[230px] p-2 text-center rounded-md'>
    {/* Display the result of the average of the numbers */}
    <p>The average is: <span className='text-lg ml-2 text-amber-500 font-semibold'>{average}</span></p>
    </div>
    )
}
