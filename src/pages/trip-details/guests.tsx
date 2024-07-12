import { CircleDashed, UserCog } from "lucide-react";

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
      <button className='w-full flex items-center justify-center gap-2 bg-zinc-200 text-zinc-700 rounded-lg px-5 h-11 font-medium hover:bg-zinc-300 transition-colors'>
        <UserCog className='size-5' />
        Gerenciar convidados
      </button>
    </div>
  )
}