import {FaCheck} from 'react-icons/fa'
import {IoTrashBinOutline} from 'react-icons/io5'
export const Task=({dTask,setDTask,val})=>{
    const removeElement=()=>{
        setDTask(val)
    }
    return(
        <div className="w-[30vw] flex items-center justify-between p-2 px-6 bg-white text-lg rounded-full">
            {val}
            <div className='flex gap-2'>
                <span onClick={removeElement} className="cursor-pointer rounded-full text-green-400 h-full aspect-square " ><FaCheck/></span>
                <span onClick={removeElement} className="cursor-pointer rounded-full text-red-400 h-full aspect-square " ><IoTrashBinOutline/></span>
            </div>
        </div>
    )
}