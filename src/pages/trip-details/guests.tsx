import { CheckCircle2, CircleDashed, UserCog } from "lucide-react";
import { Button } from "../../components/button";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";

interface Participants {
  id: string
  name: string | null
  email: string
  is_confirmed: boolean
}

interface GuestsProps {
  openConfirmParticipationsModal: () => void
}

export function Guests({ openConfirmParticipationsModal }: GuestsProps){
  const [participants, setParticipants] = useState<Participants[]>([])
  const { tripId } = useParams()

  useEffect(() => {
    api.get(`/trips/${tripId}/participants`).then(response => setParticipants(response.data.participants))
  }, [tripId])

  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Convidados</h2>
      <div className="space-y-5">
        {
          participants.map((participant, index) => (
            <div key={participant.id} className="flex items-center justify-between gap-4">
              <div className="space-y-1.5 flex-1">
                <span className="block font-medium text-zinc-900">{participant.name ?? `Convidado ${index}`}</span>
                <span className="block text-sm text-zinc-600 truncate">
                  {participant.email}
                </span>
              </div>
              {
                participant.is_confirmed ? (
                  <CheckCircle2 className="text-green-600 size-5" />
                ) : (
                  <CircleDashed className="text-lime-700 size-5" />
                )
              }
            </div>
          ))
        }
      </div>
      
      <Button onClick={openConfirmParticipationsModal} variant="secondary" size='full'>
        <UserCog className='size-5' />
        Gerenciar convidados
      </Button>
    </div>
  )
}
