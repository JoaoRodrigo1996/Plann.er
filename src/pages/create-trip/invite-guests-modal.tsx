import { AtSign, Plus, X } from "lucide-react";
import { FormEvent } from "react";
import { Button } from "../../components/button";

interface InviteGuestsModalProps {
  emailsToInvite: string[]
  closeGuestsModal: () => void
  addNewEmailToInvite: (event: FormEvent<HTMLFormElement>) => void
  removeEmailsToInvites: (email: string) => void
}

export function InviteGuestsModal(props: InviteGuestsModalProps){
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[720px] rounded-xl py-5 px-6 shadow-shape bg-zinc-100 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Selecionar convidados</h2>
            <button type='button' onClick={props.closeGuestsModal} className=''>
              <X className='size-5 text-zinc-600' />
            </button>
          </div>
          <p className='text-sm text-zinc-600'>
            Os convidados irão receber e-mails para confirmar a participação na viagem.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {
            props.emailsToInvite.map(email => (
              <div key={email} className="py-1.5 px-2.5 rounded-md bg-zinc-200 flex items-center gap-2">
                <span className="text-zinc-600">{email}</span>
                <button type='button' onClick={() => props.removeEmailsToInvites(email)}>
                  <X className='size-4 text-zinc-600' />
                </button>
              </div>
            ))
          }
        </div>

        <div className="w-full h-px bg-zinc-200" />

        <form onSubmit={props.addNewEmailToInvite} className="flex items-center gap-2 p-2.5 bg-zinc-200 border border-zinc-300 rounded-lg">
          <div className="px-2 flex items-center flex-1 gap-2">
            <AtSign className='size-5 text-zinc-600' />
            <input
              type='email' 
              name='email' 
              className="bg-transparent text-lg placeholder-zinc-600 outline-none flex-1" placeholder="Digite o e-mail do convidado" 
            />
          </div>

          <Button type="submit" variant="primary" size='default'>
            Convidar
            <Plus className='size-5' />
          </Button>
        </form>
      </div>
    </div>
  )
}
