import { useState } from 'react'

export default function NumberList() {
  const [numberList, setNumberList] = useState([])
  // Implement the functions to add, remove, and edit numbers in the list
  console.log(numberList)

  return (
    <div>{/* Display the list of numbers and the interaction elements */}</div>
  )
}
