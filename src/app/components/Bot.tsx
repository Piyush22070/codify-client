import Spline from '@splinetool/react-spline/next';

export default function Home() {
  return (
    <main className=' h-[500px] md:h-fit'>
      <Spline
        scene="images/bot.splinecode" 
      />
    </main>
  );
}
