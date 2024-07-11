import { FormEvent, useState } from 'react'
import { MapPin, Calendar, ArrowRight, UserRoundPlus, Settings2 } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { InviteGuestsModal } from './invite-guests-modal'
import { ConfirmTripModal } from './confirm-trip-modal'

export function CreateTripPage() {
  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false)
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false)
  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false)
  const [emailsToInvite, setEmailsToInvite] = useState<string[]>([])

  const navigate = useNavigate()

  function openGuestsInput(){
    setIsGuestsInputOpen(true)
  }

  function closeGuestsInput(){
    setIsGuestsInputOpen(false)
  }

  function openGuestsModal(){
    setIsGuestsModalOpen(true)
  }

  function closeGuestsModal(){
    setIsGuestsModalOpen(false)
  }

  function openConfirmTripModal(){
    setIsConfirmTripModalOpen(true)
  }

  function closeConfirmTripModal(){
    setIsConfirmTripModalOpen(false)
  }

  function addNewEmailToInvite(event: FormEvent<HTMLFormElement>){
    event.preventDefault()

    const data = new FormData(event?.currentTarget)
    const email = data.get('email')?.toString()

    if (!email) return

    if (emailsToInvite.includes(email)) return

    setEmailsToInvite((prevState) => [...prevState, email])

    event.currentTarget.reset()
  }

  function removeEmailsToInvites(emailToRemove: string){
    const newEmailList = emailsToInvite.filter(email => email !== emailToRemove)

    setEmailsToInvite(newEmailList)
  }

  function createTrip(event: FormEvent<HTMLFormElement>){
    event.preventDefault()
    
    navigate("/trips/123")
  }

  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <div className="flex flex-col items-center gap-3">
          <img src="/logo.svg" alt="Plann.er" />
          <p className="text-zinc-700 text-lg">Convide seus amigos e planeje sua próxima viagem!</p>
        </div>

        <div className="space-y-4">
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

          {
            isGuestsInputOpen && (
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
        </div>

        <p className='text-sm text-zinc-500'>
          Ao planejar sua viagem pela plann.er você automaticamente concorda <br />
          com nossos <a className="text-zinc-700 underline underline-offset-2" href="#">termos de uso</a> e <a className="text-zinc-700 underline underline-offset-2" href="#">políticas de privacidade.</a>
        </p>
      </div>

      {isGuestsModalOpen && (
        <InviteGuestsModal 
          emailsToInvite={emailsToInvite} 
          closeGuestsModal={closeGuestsModal} 
          addNewEmailToInvite={addNewEmailToInvite}
          removeEmailsToInvites={removeEmailsToInvites}
        />
      )}

      {isConfirmTripModalOpen && (
        <ConfirmTripModal 
          closeConfirmTripModal={closeConfirmTripModal} 
          createTrip={createTrip}
        />
      )}
    </div>
  )
}
