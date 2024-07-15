import { Mail, Plus, User, X } from "lucide-react";
import { useState } from "react";
import { CreateActivityModal } from "./create-activity-modal";
import { ImportantLinks } from "./important-links";
import { Guests } from "./guests";
import { Activities } from "./activities";
import { DestinationAndDateHeader } from "./destination-and-date-header";
import { CreateImportantLinkModal } from "./create-important-link-modal";
import { Button } from "../../components/button";

export function TripDetailsPage(){
  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] = useState(false)
  const [isCreateLinkModalOpen, setCreateLinkModalOpen] = useState(false)
  const [isManageGuestsOpen, setManageGuestsOpen] = useState(false)

  function openCreateActivityModal(){
    setIsCreateActivityModalOpen(true)
  }

  function closeCreateActivityModal(){
    setIsCreateActivityModalOpen(false)
  }

  function openCreateLinkModal(){
    setCreateLinkModalOpen(true)
  }

  function closeCreateLinkModal(){
    setCreateLinkModalOpen(false)
  }

  function openManageGuestsModal(){
    setManageGuestsOpen(true)
  }

  function closeManageGuestsModal(){
    setManageGuestsOpen(false)
  }

  return (
    <>
      <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
        <DestinationAndDateHeader />

        <main className="flex gap-16 px-4">
          <div className="flex-1 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-semibold">Atividades</h2>
              <button onClick={openCreateActivityModal} className='flex items-center gap-2 bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium hover:bg-lime-400 transition-colors'>
                <Plus className='size-5' />
                Cadastrar atividade
              </button>
            </div>

            <Activities />
          </div>

          <div className="w-80 space-y-6">
            <ImportantLinks openCreateLinkModal={openCreateLinkModal} />
            <div className="w-full h-px bg-zinc-200" />
            <Guests 
              openManageGuestsModal={openManageGuestsModal} 
            />
          </div>
        </main>

      </div>
      {isCreateActivityModalOpen && (
        <CreateActivityModal 
          closeCreateActivityModal={closeCreateActivityModal}
        />
      )}

      {
        isCreateLinkModalOpen && (
          <CreateImportantLinkModal 
            closeCreateLinkModal={closeCreateLinkModal} 
          />
      )}

      {
        isManageGuestsOpen && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
            <div className="w-[720px] rounded-xl py-5 px-6 shadow-shape bg-zinc-100 space-y-5">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold">Confirmar participação</h2>
                  <button type='button' onClick={closeManageGuestsModal} className=''>
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

              <form className='gap-3 space-y-3'>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 px-4 h-14 bg-zinc-200 border border-zinc-300 rounded-lg">
                    <User className='size-5 text-zinc-600' />
                    <input
                      type='text' 
                      name='title' 
                      className="bg-transparent text-lg placeholder-zinc-600 outline-none flex-1"
                      placeholder="Seu nome completo" 
                    />
                  </div>
                  <div className="flex items-center gap-2 px-4 h-14 bg-zinc-200 border border-zinc-300 rounded-lg">
                    <Mail className='size-5 text-zinc-600' />
                    <input
                      type='url' 
                      name='url' 
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
    </>
  )
}
