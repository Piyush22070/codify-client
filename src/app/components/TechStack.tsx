import Image from "next/image"
export default function TechStack(){
    return <div className=" flex flex-col justify-center items-center p-4">

            <div className=" flex flex-col md:flex-row"
             ><div className="bg-black h-[150px] w-[200px] text-center m-[30px] shadow-lg  shadow-gray-700  hover:shadow-lg hover:shadow-slate-500">
                <Image src="/images/techstack/n.png" alt ={"/"} height={50} width={200} />
                <p>Next JS</p>
            </div ><div className="bg-black h-[150px] w-[200px] text-center shadow-lg  shadow-gray-700  hover:shadow-lg hover:shadow-slate-500 flex flex-col justify-center items-center m-[30px]">
                <Image src="/images/techstack/r.png" alt ={"/"} height={50} width={180} />
                <p>React JS</p>
            </div> <div className="bg-black h-[150px] w-[200px] text-center shadow-lg  shadow-gray-700  hover:shadow-lg hover:shadow-slate-500 flex flex-col justify-center items-center m-[30px]" >
                <Image src="/images/techstack/e.png" alt ={"/"} height={50} width={100} />
                <p>Express JS</p>
            </div> <div className="bg-black h-[150px] w-[200px] text-center shadow-lg  shadow-gray-700  hover:shadow-lg hover:shadow-slate-500 flex flex-col justify-center items-center m-[30px]">
                <Image src="/images/techstack/m.jpg" alt ={"/"} height={50} width={150} />
                <p>Mongo DB</p>
            </div>
            </div>
            <div className=" flex flex-col md:flex-row">
             <div className="bg-black h-[150px] w-[200px] text-center shadow-lg  shadow-gray-700  hover:shadow-lg hover:shadow-slate-500 m-[30px] ">
                <Image src="/images/techstack/t.jpeg" alt ={"/"} height={50} width={200} />
                <p>Tailwind CSS</p>
            </div> <div className="bg-black h-[150px] w-[200px] text-center shadow-lg  shadow-gray-700  hover:shadow-lg hover:shadow-slate-500 flex flex-col justify-center items-center m-[30px]">
                <Image src="/images/techstack/ts.png" alt ={"/"} height={50} width={100} />
                <p>Type Script</p>
            </div><div className="bg-black h-[150px] w-[200px] text-center shadow-lg  shadow-gray-700  hover:shadow-lg hover:shadow-slate-500 m-[30px]">
                <Image src="/images/techstack/nj.jpg" alt ={"/"} height={50} width={180} />
                <p>Node JS</p>
            </div>
            </div>
    </div>
}