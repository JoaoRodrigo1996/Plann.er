import { FormEvent, useEffect, useState } from "react";
import { MapPin, Calendar, Settings2, X, ArrowRight } from "lucide-react";
import { useParams } from 'react-router-dom'
import { Button } from "../../components/button";
import { api } from "../../lib/axios";
import { format } from "date-fns";
import { DateRange, DayPicker } from "react-day-picker";

interface Trip {
  id: string
  destination: string
  is_confirmed: boolean
  starts_at: string
  ends_at: string
}

export function DestinationAndDateHeader(){
  const [isUpdateDestinationAndDate, setIsUpdateDestinationAndDate] = useState(false)
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false)
  const [eventStartAndEndDates, setEventStartAndEndDates] = useState<DateRange | undefined>()

  const [destination, setDestination] = useState('')

  const [trip, setTrip] = useState<Trip | undefined>()
  const { tripId } = useParams()

  function openUpdateDestinationAndDate(){
    setIsUpdateDestinationAndDate(true)
  }

  function closeUpdateDestinationAndDate(){
    setIsUpdateDestinationAndDate(false)
  }

  function openDatePicker(){
    setIsDatePickerOpen(true)
  }

  function closeDatePicker(){
    setIsDatePickerOpen(false)
  }

  async function updateDestinationAndDate(event: FormEvent<HTMLButtonElement>){
    event.preventDefault

    console.log(destination)
    console.log(eventStartAndEndDates)

    await api.put(`trips/${tripId}`, {
      destination, 
      starts_at: eventStartAndEndDates?.from, 
      ends_at: eventStartAndEndDates?.to 
    })

    window.document.location.reload()

    closeUpdateDestinationAndDate()
  }

  useEffect(() => {
    api.get(`/trips/${tripId}`).then(response => setTrip(response.data.trip))
  }, [tripId])

  const displayedDate = trip ? format(trip.starts_at, "d' de 'LLL").concat(' até ').concat(format(trip.ends_at, "d' de 'LLL")) : null
  const editedDisplayedDate = eventStartAndEndDates && eventStartAndEndDates.from && eventStartAndEndDates.to
    ? format(eventStartAndEndDates.from, "d' de 'LLL").concat(' até ').concat(format(eventStartAndEndDates.to, "d' de 'LLL"))
    : null

  return (
    <header className="px-4 h-16 rounded-xl bg-zinc-50 shadow-shape flex items-center justify-between">
      {
        isUpdateDestinationAndDate ? (
          <div className="flex flex-1 items-center gap-2">
            <MapPin className='size-5 text-zinc-600'/>
            <input 
              className="bg-transparent text-lg placeholder-zinc-600 outline-none flex-1 disabled:cursor-not-allowed" 
              type="text" 
              placeholder="Para onde você vai?" 
              onChange={event => setDestination(event.target.value)}
            />
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <MapPin className='size-5 text-zinc-600' />
            <span className="text-zinc-900">{trip?.destination}</span>
          </div>
        )
      }

      <div className="flex items-center gap-5">
        {
          isUpdateDestinationAndDate ? (
            <button onClick={openDatePicker} className="flex items-center gap-2 text-left w-[240px]">
              <Calendar className='size-5 text-zinc-600'/>
              <span className="flex-1 text-lg text-zinc-600 w-40 disabled:cursor-not-allowed" >
                {editedDisplayedDate || 'Quando?'}
              </span>
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <Calendar className='size-5 text-zinc-600' />
              <span className="text-zinc-900">{displayedDate}</span>
            </div>
          )
        }

        {isDatePickerOpen && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
            <div className="rounded-xl py-5 px-6 shadow-shape bg-zinc-100 space-y-5">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold">Selecione a data</h2>
                  <button type='button' onClick={closeDatePicker} className=''>
                    <X className='size-5 text-zinc-600' />
                  </button>
                </div>
              </div>

              <DayPicker mode="range" selected={eventStartAndEndDates} onSelect={setEventStartAndEndDates} />
            </div>
          </div>
        )}

        <div className="w-px h-6 bg-zinc-200" />

        {
          isUpdateDestinationAndDate ? (
            <Button type='submit' onClick={updateDestinationAndDate} variant="primary">
              Editar viagem
              <ArrowRight className='size-5' />
            </Button>
          ) : (
            <Button onClick={openUpdateDestinationAndDate} variant="secondary">
              Alterar local/data
              <Settings2 className='size-5' />
            </Button>
          )
        }
      </div>
    </header>
  )
}
