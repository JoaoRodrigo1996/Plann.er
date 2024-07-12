import { MapPin, Calendar, Settings2 } from "lucide-react";
import { Button } from "../../components/button";

export function DestinationAndDateHeader(){
  return (
    <header className="px-4 h-16 rounded-xl bg-zinc-50 shadow-shape flex items-center justify-between">
      <div className="flex items-center gap-2">
        <MapPin className='size-5 text-zinc-600' />
        <span className="text-zinc-900">Rio de Janeiro</span>
      </div>

      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <Calendar className='size-5 text-zinc-600' />
          <span className="text-zinc-900">17 a 23 de Agosto</span>
        </div>

        <div className="w-px h-6 bg-zinc-200" />

        <Button variant="secondary">
          Alterar local/data
          <Settings2 className='size-5' />
        </Button>
      </div>
    </header>
  )
}
