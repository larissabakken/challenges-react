import { TypedTaskItem } from "../../pages/task/types"
import { TaskItem } from "../taskItem"

interface IProps {
  taskList: TypedTaskItem[]
  handleDeleteTask: (id: string) => void
}

export const TaskList = ({taskList, handleDeleteTask}: IProps) => {
  return (
    <ul className="flex flex-col gap-3 mt-5">
      {taskList?.map((task) => {
        return(
          <li key={task.id}>
            <TaskItem 
              task={task} 
              handleDeleteTask={handleDeleteTask}
            />
          </li>
        )
      })}
    </ul>
  )
}
