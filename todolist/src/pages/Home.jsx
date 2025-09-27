import { useEffect, useState } from 'react';
import {Task} from '../components/Task'
export const Home =()=>{
    const [taskVal,setTaskVal]=useState("")
    const [time,setTime]=useState(new Date());
    const [tasks,setTasks]=useState(()=>{
        const rawTodos =localStorage.getItem("reactTodo")
        if(!rawTodos) return []
        return JSON.parse(rawTodos)
    });

    

    useEffect(()=>{
        const displayTime=setInterval(()=>{
            setTime(new Date())
        },1000)
        return()=>clearInterval(displayTime)
    },[]);
    const handleSubmit=()=>{
        if(taskVal.trim()!==""&&!tasks.includes(taskVal)){
            console.log(taskVal)
            setTasks([...tasks,taskVal.trim()])
            setTaskVal("")
            console.log(tasks)
        }
    }
    
    localStorage.setItem("reactTodo",JSON.stringify(tasks));

    const [dTask,setDTask]=useState("")
    if(dTask!==""){
        setTasks(tasks.filter(task=>
            task!==dTask
        ))
        setDTask("")
    }
    return(
        <div className='flex mt-[15vh] items-center flex-col'>
            <h1 className='text-white font-bold mb-[15px] text-3xl ' >Todo List</h1>
            <h2 className='flex text-white font-bold mb-[15px] gap-[7px] text-md'>
                <span>{time.toLocaleDateString()}</span>-
                <span>{time.toLocaleTimeString()}</span>
            </h2>
            <div className='mb-[20px] flex rounded-lg overflow-hidden' >
                <input placeholder='Enter a task' onChange={(e)=>{setTaskVal(`${e.target.value}`)}} className= 'text-sm outline-none focus:border p-2 focus:border-blue-400 bg-white' type="text"/>
                <button onClick={handleSubmit} className=' cursor-pointer bg-blue-400 text-sm text-center p-2 px-3 text-white font-semibold' >Add Task</button>
            </div>
            <div className='flex flex-col gap-[15px] justify-center items-center'>
                {tasks.map((atask)=>{
                    return(
                        <Task dTask={dTask} setDTask={setDTask} key={atask} val={atask} />
                    )
                })}
            </div>
        </div>
    )
}