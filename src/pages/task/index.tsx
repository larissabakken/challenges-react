import { useCallback, useState } from "react";
import { TaskForm } from "../../components/taskForm";
import { TypedTaskItem } from "./types";
import { v4 as idMaker } from 'uuid'
import { TaskList } from "../../components/taskList";
import { Separator } from "../../items/Separator";
import { Link } from "react-router-dom";

export default function Task() {
  const [taskList, set_taskList] = useState<TypedTaskItem[]>([
    {id: idMaker(), text: 'Estudar useMemo'},
    {id: idMaker(), text: 'Estudar useCallback'}
  ])

  const handleAddTask = useCallback((text: string) => {
    const newTask = {
      id: idMaker(),
      text: text
    }

    set_taskList([newTask, ...taskList])
    }, [taskList])

  const handleDeleteTask = useCallback((id: string) => {
    const newTaskList = taskList.filter((task) => task.id !== id)

    set_taskList(newTaskList)
  }, [taskList])

  return (
    <main 
      className="bg-slate-800 h-screen flex flex-col items-center text-white"
    >
      {/*Crie os componentes necessários para criar suas tasks*/}
      <h1 className="text-bold mt-3">TASK LIST</h1>
      <p className="text-slate-400 text-xs font-bold">useCallback</p> 
      <p className="text-slate-400 text-xs"><Link to={'/calculator'}>thank u, next 🎶</Link></p>

      <Separator />

      <TaskForm 
        handleAddTask={handleAddTask}
      />
      <TaskList 
        taskList={taskList}
        handleDeleteTask={handleDeleteTask}
      />
    </main>
  )
}
