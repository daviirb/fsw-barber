import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import Link from "next/link";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

export default function Header() {
  return(
    <Card>
      <CardContent className="flex justify-between items-center p-5">
        <Link href="/">
          <Image 
            src="/logo.png"
            alt="FSW Barber"
            width={120}
            height={18}
          />
        </Link>
        <Button variant={"ghost"} size={"icon"} >
          <MenuIcon size={16}/>
        </Button>

      </CardContent>
      
    </Card>
  )
}
