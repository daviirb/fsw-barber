import { Card, CardContent } from "./ui/card";

export default function Footer() {
  return(
      <Card className="rounded-none border-none">
        <CardContent className="flex justify-center items-center p-5">
          <p>© 2023 Copyright FSW Barber</p>  
        </CardContent>
      </Card>
  )
}
