"use client"
import  ProblemList from '../components/ProblemList'
import  TopicList from '../components/TopicList'
import Dashboard from '../components/Dashboard'
import CircularDasboard from '../components/CircularDashboard'

export default function Problems(){


    return <div className='flex flex-col md:flex-row justify-center ]'>

        <div className='flex flex-col md:flex-row'>
            <div><TopicList/></div>
            <div className='w-fit'>
                <ProblemList/> </div>
        </div>
        <div>
            <Dashboard /> 
            <CircularDasboard completed = {22}/>
        </div>
    </div>
}