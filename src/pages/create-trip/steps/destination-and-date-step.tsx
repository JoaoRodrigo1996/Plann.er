import { MapPin, Calendar, Settings2, ArrowRight } from "lucide-react";

interface DestinationAndDateStepProps {
  isGuestsInputOpen: boolean
  closeGuestsInput: () => void
  openGuestsInput: () => void
}

export function DestinationAndDateStep({ closeGuestsInput, isGuestsInputOpen, openGuestsInput }: DestinationAndDateStepProps){
  return (
    <div className="bg-zinc-50 px-4 h-16 rounded-xl flex items-center shadow-shape gap-3">
      <div className="flex flex-1 items-center gap-2">
        <MapPin className='size-5 text-zinc-600'/>
        <input disabled={isGuestsInputOpen} className="bg-transparent text-lg placeholder-zinc-600 outline-none flex-1 disabled:cursor-not-allowed" type="text" placeholder="Para onde você vai?" />
      </div>
      <div className="flex items-center gap-2">
        <Calendar className='size-5 text-zinc-600'/>
        <input disabled={isGuestsInputOpen} className="bg-transparent text-lg placeholder-zinc-600 w-40 outline-none disabled:cursor-not-allowed" type="text" placeholder="Quando" />
      </div>

      <div className="w-px h-6 bg-zinc-200" />

      {
        isGuestsInputOpen ? (
          <button onClick={closeGuestsInput} className='flex items-center gap-2 bg-zinc-200 text-zinc-700 rounded-lg px-5 py-2 font-medium hover:bg-zinc-300 transition-colors'>
            Alterar local/data
            <Settings2 className='size-5' />
          </button>
        ) : (
          <button onClick={openGuestsInput} className='flex items-center gap-2 bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium hover:bg-lime-400 transition-colors'>
            Continuar
            <ArrowRight className='size-5' />
          </button>
        )
      }
    </div>
  )
}
