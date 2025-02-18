import { useState } from "react";
import { Plus } from "lucide-react";
import { CreateActivityModal } from "./create-activity-modal";
import { ImportantLinks } from "./important-links";
import { Guests } from "./guests";
import { Activities } from "./activities";
import { DestinationAndDateHeader } from "./destination-and-date-header";
import { CreateImportantLinkModal } from "./create-important-link-modal";
import { ConfirmParticipationModal } from "./confirmation-trip-modal";


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

  function openConfirmParticipationsModal(){
    setManageGuestsOpen(true)
  }

  function closeConfirmParticipationsModal(){
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
              openConfirmParticipationsModal={openConfirmParticipationsModal} 
            />
          </div>
        </main>

      </div>
      {isCreateActivityModalOpen && (
        <CreateActivityModal 
          closeCreateActivityModal={closeCreateActivityModal}
        />
      )}

      {isCreateLinkModalOpen && (
        <CreateImportantLinkModal 
          closeCreateLinkModal={closeCreateLinkModal} 
        />
      )}

      {isManageGuestsOpen && (
        <ConfirmParticipationModal 
          closeConfirmParticipationsModal={closeConfirmParticipationsModal} 
        />
      )}
    </>
  )
}
