'use client'

import { IoAdd } from "react-icons/io5";
import { FormEvent, useCallback, useState } from "react"

interface IProps {
  handleAddTask: (text: string) => void
}

export const TaskForm = ({ handleAddTask }: IProps) => {
  const [inputText, set_inputText] = useState<string>('')

  const handleSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    handleAddTask(inputText)
    set_inputText('')
  }, [inputText])

  return (
    <form 
    className="flex justify-center w-[350px]"
      onSubmit={handleSubmit}
    >
      <input
        className="flex-1 rounded-s-full bg-slate-700 border border-spacing-1 border-emerald-500 px-3 text-slate-200"
        onChange={(event) => set_inputText(event.target.value)}
        value={inputText}
        required
      />
      <button 
        className="p-1 bg-emerald-500 rounded-e-full text-xl font-extrabold border border-spacing-1 border-emerald-500 hover:text-slate-700 transition duration-500"
        type={'submit'}><IoAdd/></button>
    </form>
  )
}
