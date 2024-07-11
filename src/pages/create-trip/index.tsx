import { FormEvent, useState } from 'react'
import { MapPin, Calendar, ArrowRight, UserRoundPlus, Settings2, X, AtSign, Plus, Mail, User } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

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

  function createTrip(){
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
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="w-[720px] rounded-xl py-5 px-6 shadow-shape bg-zinc-100 space-y-5">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Selecionar convidados</h2>
                <button type='button' onClick={closeGuestsModal} className=''>
                  <X className='size-5 text-zinc-600' />
                </button>
              </div>
              <p className='text-sm text-zinc-600'>
                Os convidados irão receber e-mails para confirmar a participação na viagem.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {
                emailsToInvite.map(email => (
                  <div key={email} className="py-1.5 px-2.5 rounded-md bg-zinc-200 flex items-center gap-2">
                    <span className="text-zinc-600">{email}</span>
                    <button type='button' onClick={() => removeEmailsToInvites(email)}>
                      <X className='size-4 text-zinc-600' />
                    </button>
                  </div>
                ))
              }
            </div>

            <div className="w-full h-px bg-zinc-200" />

            <form onSubmit={addNewEmailToInvite} className="flex items-center gap-2 p-2.5 bg-zinc-200 border border-zinc-300 rounded-lg">
              <div className="px-2 flex items-center flex-1 gap-2">
                <AtSign className='size-5 text-zinc-600' />
                <input
                  type='email' 
                  name='email' 
                  className="bg-transparent text-lg placeholder-zinc-600 outline-none flex-1" placeholder="Digite o e-mail do convidado" 
                />
              </div>
                    
              <button type='submit' className='flex items-center gap-2 bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium hover:bg-lime-400 transition-colors'>
                Convidar
                <Plus className='size-5' />
              </button>
            </form>
          </div>
        </div>
      )}

      {isConfirmTripModalOpen && (
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
                Para concluir a criação da viagem para <span className='font-semibold text-zinc-950'>Florianópolis, Brasil</span> nas datas de <span className='font-semibold text-zinc-950'>16 a 27 de Agosto de 2024</span> preencha seus dados abaixo:
              </p>
            </div>

            <form onSubmit={addNewEmailToInvite} className='flex flex-col gap-3'>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 px-4 h-14 bg-zinc-200 border border-zinc-300 rounded-lg">
                  <User className='size-5 text-zinc-600' />
                  <input
                    type='text' 
                    name='name' 
                    className="bg-transparent text-lg placeholder-zinc-600 outline-none flex-1" placeholder="Seu nome completo" 
                  />
                </div>
                <div className="flex items-center gap-2 px-4 h-14 bg-zinc-200 border border-zinc-300 rounded-lg">
                  <Mail className='size-5 text-zinc-600' />
                  <input
                    type='email' 
                    name='email' 
                    className="bg-transparent text-lg placeholder-zinc-600 outline-none flex-1" placeholder="Seu e-mail pessoal" 
                  />
                </div>
              </div>
                    
              <button onClick={createTrip} type='submit' className='flex items-center justify-center gap-2 bg-lime-300 text-lime-950 rounded-lg px-5 h-11 font-medium hover:bg-lime-400 transition-colors'>
                Confirmar criação da viagem
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
