import { Mail, User, X } from "lucide-react";
import { FormEvent } from "react";
import { Button } from "../../components/button";

interface ConfirmTripModalProps {
  closeConfirmTripModal: () => void
  createTrip: (event: FormEvent<HTMLFormElement>) => void
  setOwnerName: (name: string) => void
  setOwnerEmail: (email: string) => void
}

export function ConfirmTripModal({closeConfirmTripModal, createTrip, setOwnerEmail, setOwnerName }: ConfirmTripModalProps){
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[720px] rounded-xl py-5 px-6 shadow-shape bg-zinc-100 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Confirmar criação da viagem</h2>
            <button type='button' onClick={closeConfirmTripModal} className=''>
              <X className='size-5 text-zinc-600' />
            </button>
          </div>
          <p className='text-sm text-zinc-600'>
            Para concluir a criação da viagem para <span className='font-semibold text-zinc-950'>Florianópolis, Brasil</span> 
            nas datas de <span className='font-semibold text-zinc-950'>16 a 27 de Agosto de 2024</span> preencha seus dados abaixo:
          </p>
        </div>

        <form onSubmit={createTrip} className='gap-3 space-y-3'>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 px-4 h-14 bg-zinc-200 border border-zinc-300 rounded-lg">
              <User className='size-5 text-zinc-600' />
              <input
                type='text' 
                name='name' 
                className="bg-transparent text-lg placeholder-zinc-600 outline-none flex-1" placeholder="Seu nome completo" 
                onChange={event => setOwnerName(event.target.value)}
              />
            </div>
            <div className="flex items-center gap-2 px-4 h-14 bg-zinc-200 border border-zinc-300 rounded-lg">
              <Mail className='size-5 text-zinc-600' />
              <input
                type='email' 
                name='email' 
                className="bg-transparent text-lg placeholder-zinc-600 outline-none flex-1" placeholder="Seu e-mail pessoal" 
                onChange={event => setOwnerEmail(event.target.value)}
              />
            </div>
          </div>
          
          <Button type="submit" variant="primary" size='full'>
            Confirmar criação da viagem
          </Button>
        </form>
      </div>
    </div>
  )
}
