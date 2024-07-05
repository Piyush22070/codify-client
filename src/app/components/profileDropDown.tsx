"use client"
import Link from "next/link"
import Image from "next/image"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
export default function NavigationMenuDemo() {
  return (
  <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
                    <Avatar className="bg-black">
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
                </Avatar>

          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className=" p-4 md:w-[100px] gap-2 lg:w-[200px] bg-black text-white rounded-lg" >
              <li className="col-span-3">
                <Link href="/profile" className="flex flex-row">
                    <Image src={"/images/dropdown/profile.webp"} alt={"/pro"} height={50} width={35}/><code className=" hidden md:flex text-sm px-3">Profile</code>
                </Link>
              </li>
              <li className="col-span-3" >
                <Link href="/" className="flex flex-row">
                <Image src={"/images/dropdown/log.png"} alt={"/pro"} height={40} width={25}/> <code className=" hidden md:flex text-sm ml-5"> Logout</code>
                </Link>
              </li>
            </ul>
          </NavigationMenuContent>
          
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
   )
}

