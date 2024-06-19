import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'

export default function CircularDasboard(props: any){
    const percentage = (props.completed/100)*100
    return <div className='flex justify-center'>
            <div className='h-[250px] w-[250px] p-10 shadow-lg md:ml-3 px-6 rounded-[5px]  py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
        <div>Total completed : {props.completed}</div>
        <div>Total : 100</div>        
        <CircularProgressbar className='p-5' value={percentage} text={`${percentage}%`} minValue={0} maxValue={100} />
    </div>
    </div>

}