import { X, User, Mail } from "lucide-react"
import { Button } from "../../components/button"
import { FormEvent } from "react"
import { api } from "../../lib/axios"
import { useParams } from "react-router-dom"

interface ConfirmParticipationModalProps {
  closeConfirmParticipationsModal: () => void
}

export function ConfirmParticipationModal({ closeConfirmParticipationsModal }: ConfirmParticipationModalProps){
  const { tripId } = useParams()

  async function confirmParticipation(event: FormEvent<HTMLFormElement>){
    event.preventDefault()

    const response = await api.get(`/trips/${tripId}/confirm`)
    console.log(response)
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[720px] rounded-xl py-5 px-6 shadow-shape bg-zinc-100 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Confirmar participação</h2>
            <button type='button' onClick={closeConfirmParticipationsModal} className=''>
              <X className='size-5 text-zinc-600' />
            </button>
          </div>
          <div className="space-y-6">
            <p className='text-sm text-zinc-600'>
              Você foi convidado(a) para participar de uma viagem para <span className='font-semibold text-zinc-950'>Florianópolis</span>, Brasil nas datas de <span className='font-semibold text-zinc-950'>16 a 27 de Agosto de 2024.</span>
            </p>
            <p className='text-sm text-zinc-600'>
              Para confirmar sua presença na viagem, preencha os dados abaixo:
            </p>
          </div>
        </div>

        <form onSubmit={confirmParticipation} className='gap-3 space-y-3'>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 px-4 h-14 bg-zinc-200 border border-zinc-300 rounded-lg">
              <User className='size-5 text-zinc-600' />
              <input
                type='text' 
                name='name' 
                className="bg-transparent text-lg placeholder-zinc-600 outline-none flex-1"
                placeholder="Seu nome completo" 
              />
            </div>
            <div className="flex items-center gap-2 px-4 h-14 bg-zinc-200 border border-zinc-300 rounded-lg">
              <Mail className='size-5 text-zinc-600' />
              <input
                type='email' 
                name='email' 
                className="bg-transparent text-lg placeholder-zinc-600 outline-none flex-1"
                placeholder="Seu e-mail" 
              />
            </div>
          </div>
          
          <Button type="submit" variant="primary" size='full'>
            Confirmar minha presença
          </Button>
        </form>
      </div>
    </div>
  )
}
