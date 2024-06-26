"use client" 
import {Parallax,ParallaxLayer} from '@react-spring/parallax'
import Spline from '@splinetool/react-spline'
import Image from 'next/image'
import  Meteors from './Meteror'
import TechStack from './TechStack'

export default function Homee(){
    return <div>
        <main className=" bg-black h-[800px]" >
            <Parallax pages={5}>

                <ParallaxLayer speed={1} offset={0}  factor={2}>
                    <Image src="/images/space.jpg" alt={'/'} className=' w-full bg-black'  height={50} width={900}/>
                    </ParallaxLayer>

                <ParallaxLayer offset={1.8} speed={3} factor={2} >
                <Image src="/images/mountain.jpg"  className=' w-full opacity-[70%]' alt={'/'} height={500} width={500}/>
                </ParallaxLayer>

                <ParallaxLayer offset={0} speed={1} >
                        <Spline className=' w-[400px]' scene="images/rocket.splinecode" />
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={2}>
                        
                    <div className=' text-white text-center  flex justify-center items-center flex-col'>
                                    
                                    <div className=' text-5xl md:text-8xl p-5'><code>Codify...</code></div>
                                    <Meteors number={30}  />
                                        <h1 className='text-sm p-3'><code>Piyush Production</code></h1>
                                        <p className='text-sm border-4 rounded-[5px] w-fit p-2'><code><strong>Mission : </strong>Provides you quality questions !</code></p>
                                    </div>  
                </ParallaxLayer>

                <ParallaxLayer offset={1.9} speed={1}>
                        <div className=' text-white text-center '>
                                <h1 className='text-2xl'><code>{`[Tech Stack]`}</code></h1>
                                <div>
                                    <TechStack/>
                                </div>
                        </div>
                </ParallaxLayer>

                <ParallaxLayer offset={3} speed={0.6}>

                <div className='text-8xl p-3 text-white text-center'><code></code>BOOM !</div>
                        <h1 className='text-sm p-3'><code>Web D</code></h1>
                </ParallaxLayer>

            </Parallax>            
        </main>
    </div>
}