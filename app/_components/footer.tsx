import { Card, CardContent } from "./ui/card";

export default function Footer() {
  return(
      <Card className="rounded-none border-none">
        <CardContent className="flex justify-center items-center p-5">
          <p className="text-xs">© 2023 Copyright <strong>FSW Barber</strong></p>  
        </CardContent>
      </Card>
  )
}
