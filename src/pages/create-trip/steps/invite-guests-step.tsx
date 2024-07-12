import { ArrowRight, UserRoundPlus } from "lucide-react";
import { Button } from "../../../components/button";

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

      <Button onClick={openConfirmTripModal}  variant="primary" size='default'>
        Confirmar viagem
        <ArrowRight className='size-5' />
      </Button>
    </div>
  )
}
