import { useEffect, useState } from "react";
import { MapPin, Calendar, Settings2 } from "lucide-react";
import { useParams } from 'react-router-dom'
import { Button } from "../../components/button";
import { api } from "../../lib/axios";
import { format } from "date-fns";

interface Trip {
  id: string
  destination: string
  is_confirmed: boolean
  starts_at: string
  ends_at: string
}

export function DestinationAndDateHeader(){
  const [trip, setTrip] = useState<Trip | undefined>()
  const { tripId } = useParams()

  useEffect(() => {
    api.get(`/trips/${tripId}`).then(response => setTrip(response.data.trip))
  }, [tripId])

  const displayedDate = trip ? format(trip.starts_at, "d' de 'LLL").concat(' até ').concat(format(trip.ends_at, "d' de 'LLL")) : null

  return (
    <header className="px-4 h-16 rounded-xl bg-zinc-50 shadow-shape flex items-center justify-between">
      <div className="flex items-center gap-2">
        <MapPin className='size-5 text-zinc-600' />
        <span className="text-zinc-900">{trip?.destination}</span>
      </div>

      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <Calendar className='size-5 text-zinc-600' />
          <span className="text-zinc-900">{displayedDate}</span>
        </div>

        <div className="w-px h-6 bg-zinc-200" />

        <Button variant="secondary">
          Alterar local/data
          <Settings2 className='size-5' />
        </Button>
      </div>
    </header>
  )
}
