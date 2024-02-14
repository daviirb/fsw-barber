import { format } from "date-fns";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { ptBR } from "date-fns/locale";

export default async function BookingItem() {
  

  return(
    <Card className="min-w-full">
      <CardContent className="grid grid-cols-[70%,30%] p-0">
        <div>
          <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge variant={"default"} className="w-fit">Confirmado</Badge>
              <h2 className="text-xl font-bold">Corte de Cabelo</h2>
          
          <div className="flex gap-2 items-center">
              <Avatar>
                <AvatarImage />
                <AvatarFallback>VB</AvatarFallback>
              </Avatar>
              <h3>Vintage Barber</h3>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center border-l border-solid border-secondary">
          <p className="text-sm capitalize">{format(new Date(), "MMMM", {locale: ptBR})}</p>
          <p>{format(new Date(), "dd")}</p>
          <p>09:45</p>
        </div>
      </CardContent>
    </Card>
  )
}
