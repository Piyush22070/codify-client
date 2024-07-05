"use client"
import Image from "next/image"
import PerformanceGraph from "../components/ActivityHeatMap";
import axios from "axios";
import { useState,useEffect } from "react";

export default function Profile(){

const [userdata,setUserdata] = useState({
        username:"Newbie",
        country : "India",
        role :"Berojgar",
        rank :"1",
        title :"rookie",
        avatar: "/images/nominal.png",
        sampleData :[
            { date: '2024-05-01', rating: 1000 },
            { date: '2024-05-02', rating: 1100 },
            { date: '2024-05-03', rating: 900 },
            { date: '2024-05-04', rating: 1100 },
            { date: '2024-05-05', rating: 1400 },
            { date: '2024-05-06', rating: 1500 },
            { date: '2024-05-07', rating: 1600 },
            { date: '2024-05-08', rating: 1400 },
            { date: '2024-05-10', rating: 1500 },
          ]
    })
    const demo =[
        { date: '2024-05-01', rating: 1000 },
        { date: '2024-05-02', rating: 1100 },
        { date: '2024-05-03', rating: 900 },
        { date: '2024-05-04', rating: 1100 },
        { date: '2024-05-05', rating: 1400 },
        { date: '2024-05-06', rating: 1500 },
        { date: '2024-05-07', rating: 1600 },
        { date: '2024-05-08', rating: 1400 },
        { date: '2024-05-10', rating: 1500 },
      ]

    const userCrediential =
    {
        username: "piyush",
        password : "123456"
    } 

    useEffect( () => {
        axios.post("https://codify-kmyn.onrender.com/login",userCrediential)
        .then((response)=>{
            setUserdata(response.data.data.user)        
        })
        .catch((err)=>{console.log("Error while fetching the data from login route")})
    },[])


    return <div className=" flex items-center justify-center px-6">
        <code>
        <div className=" md:h-[800px] h-fit  md:w-[800px] w-[400px] mt-[5px] shadow-lg">

            <div className="flex flex-row  p-6 ">
                <div className=" w-[100px] h-[100px]">
                    <Image src={userdata.avatar} alt="nominal" height={100}  width={100}/>
                </div>
                <div className=" w-[500px] px-6 text-3xl">{userdata.username}<p className=" text-sm">{userdata.title}</p></div>
            </div>

            <div className=" flex flex-row  shadow-lg">
                <div className=" flex flex-col w-[200px] h-[150px] text-sm gap-4 px-6 py-2 font-bold ">
                    <div>Country :</div>
                    <div>Professional :</div>
                    <div>Rank :</div>
                </div>

                <div className=" flex flex-col w-[600px] gap-4">
                    <div>{userdata.country}</div>
                    <div>{userdata.role}</div>
                    <div>{userdata.rank}</div>
                </div>
            </div>
        <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-semibold mb-4">User Performance</h1>
        <PerformanceGraph data={demo} />
        </div>
        </div>
        </code>
    </div>
}
