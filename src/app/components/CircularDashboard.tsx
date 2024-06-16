import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'

export default function CircularDasboard(props: any){
    const percentage = (props.completed/100)*100
    return <div className='h-[250px] w-[200px] p-10 shadow-lg ml-3'>
        <div>Total completed : {props.completed}</div>
        <CircularProgressbar value={percentage} text={`${percentage}%`} minValue={0} maxValue={100} />
    </div>
}