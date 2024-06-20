"use client"
import Spline from '@splinetool/react-spline/next';
export default function Home() {
  return (
    <main className=' h-[350px] md:h-[800px]'>
      <Spline
        scene="images/rocket.splinecode" 
      />
    </main>
  );
}
