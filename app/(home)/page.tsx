import Image from "next/image";
import Header from "../_components/header";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import Search from "./_components/search";
import BookingItem from "../_components/booking-item";
import { db } from "../_lib/prisma";
import { Card, CardContent } from "../_components/ui/card";
import { Badge } from "../_components/ui/badge";
import { StarIcon } from "lucide-react";
import { Button } from "../_components/ui/button";
import Footer from "../_components/footer";

export default async function Home() {
  const barbershops = await db.barbershop.findMany({})
  return (
    <div>
      <Header />

      <div className="px-5 pt-5">
        <h2 className="text-xl font-bold">Olá, <strong>Davi</strong></h2>
        <p className="text-sm capitalize">{format(new Date(), "EEEE',' dd 'de' MMMM", {locale: ptBR})}</p>
      </div>
      <div className="px-5 pt-5">
        <Search />
      </div>
      <div className="mt-6">
        <h2 className="pl-5 text-xs uppercase text-gray-400 font-bold">Agendamentos</h2>
      </div>
      <div className="px-5 mt-4">
        <BookingItem />
      </div>
      <div className="mt-6">
        <h2 className="pl-5 text-xs uppercase text-gray-400 font-bold">Recomendados</h2>
        <div className="flex px-5 gap-4 mt-2 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <div key={barbershop.id} className="px-5">
              <Card className="min-w-full max-w-full rounded-2xl">
                <CardContent className="px-1 py-0 pt-1">
                  <div className="w-full h-[159px] relative">
                    <div className="absolute top-2 left-2 z-50">
                      <Badge variant="secondary" className="opacity-90 flex gap-1 items-center top-3 left-3">
                        <StarIcon size={12} className="fill-primary text-primary" />
                        <span className="text-xs">5,0</span>
                      </Badge>
                    </div>
                    <Image
                      alt={barbershop.name}
                      src={barbershop.imageUrl}
                      style={{
                        objectFit: "cover",
                      }}
                      fill
                      className="rounded-2xl"
                    />
                  </div>
                  <div className="px-2 pb-3">
                    <h2 className="font-bold mt-2 overflow-hidden text-ellipsis text-nowrap">{barbershop.name}</h2>
                    <p className="text-sm text-gray-400 overflow-hidden text-ellipsis text-nowrap">{barbershop.address}</p>
                    <Button className="w-full mt-3" variant="secondary">
                      Reservar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6">
        <h2 className="pl-5 text-xs uppercase text-gray-400 font-bold">Populares</h2>
        <div className="flex px-5 gap-4 mt-2 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <div key={barbershop.id} className="px-5">
              <Card className="min-w-full max-w-full rounded-2xl">
                <CardContent className="px-1 py-0 pt-1">
                  <div className="w-full h-[159px] relative">
                    <div className="absolute top-2 left-2 z-50">
                      <Badge variant="secondary" className="opacity-90 flex gap-1 items-center top-3 left-3">
                        <StarIcon size={12} className="fill-primary text-primary" />
                        <span className="text-xs">5,0</span>
                      </Badge>
                    </div>
                    <Image
                      alt={barbershop.name}
                      src={barbershop.imageUrl}
                      style={{
                        objectFit: "cover",
                      }}
                      fill
                      className="rounded-2xl"
                    />
                  </div>
                  <div className="px-2 pb-3">
                    <h2 className="font-bold mt-2 overflow-hidden text-ellipsis text-nowrap">{barbershop.name}</h2>
                    <p className="text-sm text-gray-400 overflow-hidden text-ellipsis text-nowrap">{barbershop.address}</p>
                    <Button className="w-full mt-3" variant="secondary">
                      Reservar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6">
        <Footer />
      </div>
    </div>
    
  )
}
