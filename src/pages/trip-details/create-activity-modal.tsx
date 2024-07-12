import { X, Tag, Calendar } from "lucide-react";
import { Button } from "../../components/button";
import { FormEvent } from "react";
import { api } from "../../lib/axios";
import { useParams } from "react-router-dom";

interface CreateActivityModalProps {
  closeCreateActivityModal: () => void
}

export function CreateActivityModal({ closeCreateActivityModal }: CreateActivityModalProps){
  const { tripId } = useParams()

  async function createActivity(event: FormEvent<HTMLFormElement>){
    event.preventDefault()

    const data = new FormData(event.currentTarget)

    const title = data.get('title')?.toString()
    const occurs_at = data.get('occurs_at')?.toString()

    await api.post(`/trips/${tripId}/activities`, { title, occurs_at })

    window.document.location.reload()
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[720px] rounded-xl py-5 px-6 shadow-shape bg-zinc-100 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Cadastrar atividade</h2>
            <button type='button' onClick={closeCreateActivityModal} className=''>
              <X className='size-5 text-zinc-600' />
            </button>
          </div>
          <p className='text-sm text-zinc-600'>
            Todos convidados podem visualizar as atividades.
          </p>
        </div>

        <form onSubmit={createActivity} className='flex flex-col gap-3'>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 px-4 h-14 bg-zinc-200 border border-zinc-300 rounded-lg">
              <Tag className='size-5 text-zinc-600' />
              <input
                type='text' 
                name='title' 
                className="bg-transparent text-lg placeholder-zinc-600 outline-none flex-1" placeholder="Qual a atividade?" 
              />
            </div>
            
            <div className="flex items-center gap-2 px-4 h-14 bg-zinc-200 border border-zinc-300 rounded-lg">
              <Calendar className='size-5 text-zinc-600' />
              <input
                type='datetime-local' 
                name='occurs_at' 
                className="bg-transparent text-lg placeholder-zinc-600 outline-none flex-1" placeholder="Data e horário da atividade" 
              />
            </div>
          </div>
                
          <Button variant="primary" size='full'>Salvar atividade</Button>
        </form>
      </div>
    </div>
  )
}
