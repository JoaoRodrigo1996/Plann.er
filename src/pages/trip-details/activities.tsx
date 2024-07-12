import { CircleCheck } from "lucide-react";

export function Activities(){
  return (
    <div className="space-y-8">
      <div className="space-y-2.5">
        <div className="flex gap-2 items-baseline">
          <span className="text-xl text-zinc-700 font-semibold">Dia 17</span>
          <span className="text-xs text-zinc-600">Sábado</span>
        </div>
        <p className='text-zinc-600 text-sm'>Nenhuma atividade cadastrada nessa data.</p>
      </div>

      <div className="space-y-2.5">
        <div className="flex gap-2 items-baseline">
          <span className="text-xl text-zinc-700 font-semibold">Dia 18</span>
          <span className="text-xs text-zinc-600">Domingo</span>
        </div>
        <div className='space-y-2.5'>
          <div className="flex items-center gap-3 px-4 py-2.5 bg-zinc-50 rounded-xl shadow-shape">
            <CircleCheck className="size-5 text-lime-700" /> 
            <span className="text-zinc-900">Academia em grupo</span>
            <span className="text-zinc-600 text-sm ml-auto">08:00h</span>
          </div>
        </div>
        <div className='space-y-2.5'>
          <div className="flex items-center gap-3 px-4 py-2.5 bg-zinc-50 rounded-xl shadow-shape">
            <CircleCheck className="size-5 text-lime-700" /> 
            <span className="text-zinc-900">Academia em grupo</span>
            <span className="text-zinc-600 text-sm ml-auto">08:00h</span>
          </div>
        </div>
      </div>
    </div>
  )
}
