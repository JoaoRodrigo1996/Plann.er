import { CircleDashed, UserCog } from "lucide-react";
import { Button } from "../../components/button";

export function Guests(){
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Convidados</h2>
      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5 flex-1">
            <span className="block font-medium text-zinc-900">Rodrigo Mesquita</span>
            <span className="block text-sm text-zinc-600 truncate">
              dev.rodrigomesquita@gmail.com
            </span>
          </div>
          <CircleDashed className="text-lime-700 size-5" />
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5 flex-1">
            <span className="block font-medium text-zinc-900">Dr. Rita Pacocha</span>
            <span className="block text-sm text-zinc-600 truncate">
              lacy.stiedemann@gmail.com
            </span>
          </div>
          <CircleDashed className="text-lime-700 size-5" />
        </div>
      </div>
      
      <Button variant="secondary" size='full'>
        <UserCog className='size-5' />
        Gerenciar convidados
      </Button>
    </div>
  )
}