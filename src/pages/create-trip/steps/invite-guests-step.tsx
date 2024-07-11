import { ArrowRight, UserRoundPlus } from "lucide-react";

interface InviteGuestsStepProps {
  emailsToInvite: string[]
  openGuestsModal: () => void
  openConfirmTripModal: () => void
}

export function InviteGuestsStep({ emailsToInvite, openConfirmTripModal, openGuestsModal }: InviteGuestsStepProps){
  return (
    <div className="bg-zinc-50 px-4 h-16 rounded-xl flex items-center shadow-shape gap-3">
      <button type='button' onClick={openGuestsModal} className="flex flex-1 items-center gap-2">
        <UserRoundPlus className='size-5 text-zinc-600'/>
        {emailsToInvite.length > 0 ? (
          <span className="text-zinc-950">{emailsToInvite.length} pessoas(s) condidada(s)</span>
        ) : (
          <span className="text-lg flex-1 text-left">Quem estará na viagem?</span>
        )
        }
      </button>

      <div className="w-px h-6 bg-zinc-200" />

      <button onClick={openConfirmTripModal} className='flex items-center gap-2 bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium hover:bg-lime-400 transition-colors'>
        Confirmar viagem
        <ArrowRight className='size-5' />
      </button>
    </div>
  )
}
