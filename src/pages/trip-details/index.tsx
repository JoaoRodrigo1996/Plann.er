import { Link2, Plus, Tag, X } from "lucide-react";
import { useState } from "react";
import { CreateActivityModal } from "./create-activity-modal";
import { ImportantLinks } from "./important-links";
import { Guests } from "./guests";
import { Activities } from "./activities";
import { DestinationAndDateHeader } from "./destination-and-date-header";
import { Button } from "../../components/button";

export function TripDetailsPage(){
  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] = useState(false)
  const [isCreateLinkModalOpen, setCreateLinkModalOpen] = useState(false)

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
            <Guests />
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
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
            <div className="w-[720px] rounded-xl py-5 px-6 shadow-shape bg-zinc-100 space-y-5">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold">Cadastrar link</h2>
                  <button type='button' onClick={closeCreateLinkModal} className=''>
                    <X className='size-5 text-zinc-600' />
                  </button>
                </div>
                <p className='text-sm text-zinc-600'>
                  Todos convidados podem visualizar os links importantes.
                </p>
              </div>

              <form className='gap-3 space-y-3'>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 px-4 h-14 bg-zinc-200 border border-zinc-300 rounded-lg">
                    <Tag className='size-5 text-zinc-600' />
                    <input
                      type='text' 
                      name='name' 
                      className="bg-transparent text-lg placeholder-zinc-600 outline-none flex-1" placeholder="Título do link" 
                    />
                  </div>
                  <div className="flex items-center gap-2 px-4 h-14 bg-zinc-200 border border-zinc-300 rounded-lg">
                    <Link2 className='size-5 text-zinc-600' />
                    <input
                      type='email' 
                      name='email' 
                      className="bg-transparent text-lg placeholder-zinc-600 outline-none flex-1" placeholder="URL" 
                    />
                  </div>
                </div>
                
                <Button type="submit" variant="primary" size='full'>
                  Salvar link
                </Button>
              </form>
            </div>
          </div>
        )
      }
    </>
  )
}
