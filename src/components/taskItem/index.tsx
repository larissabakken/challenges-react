'use client'
import { IoCheckmark, IoCheckmarkDone, IoTrashOutline } from "react-icons/io5";
import { TypedTaskItem } from "../../pages/task/types"
import { useCallback, useState } from "react";

interface IProps {
  task: TypedTaskItem
  handleDeleteTask: (id: string) => void
}


export const TaskItem = ({task, handleDeleteTask}: IProps) => {
  const [isCompleted, set_isCompleted] = useState<boolean>(false)

  const handleTaskStatus = useCallback(() => {
    set_isCompleted(!isCompleted)
  }, [isCompleted])

  return (
    <div className={`flex flex-col gap-3 w-[300px] rounded-md bg-slate-700 p-1 border border-spacing-1 border-emerald-500 transition duration-300 ${!isCompleted ? 'opacity-100' : 'opacity-50'}`}>
      <div className="flex justify-between">
        <p 
          className={`${!isCompleted ? "text-white" : "text-slate-400 line-through decoration-lime-500"} flex-1 truncate cursor-pointer`}
          onClick={handleTaskStatus}
          >{task.text}</p>
        {!isCompleted ? 
          <button
            className="text-slate-400 text-[22px] hover:text-lime-300 transition duration-500"
            onClick={handleTaskStatus}><IoCheckmark/></button> 
          : 
          <button
            className="text-lime-500 text-[22px]"
            onClick={handleTaskStatus}><IoCheckmarkDone/></button>
        }
      </div>
      <button
        className="self-end text-slate-400 text-[16px] hover:text-red-500 transition duration-500"
        onClick={() => handleDeleteTask(task.id)}><IoTrashOutline/></button>
    </div>
  )
}
