import { useState } from "react";
import { DateRange, DayPicker } from "react-day-picker";
import { MapPin, Calendar, Settings2, ArrowRight, X } from "lucide-react";
import { format } from 'date-fns'
import { Button } from "../../../components/button";

import "react-day-picker/dist/style.css";

interface DestinationAndDateStepProps {
  isGuestsInputOpen: boolean
  closeGuestsInput: () => void
  openGuestsInput: () => void
  setDestination: (destination: string) => void
  setEventStartAndEndDates: (dates: DateRange | undefined) => void
  eventStartAndEndDates: DateRange | undefined
}

export function DestinationAndDateStep({ closeGuestsInput, isGuestsInputOpen, openGuestsInput, setDestination, setEventStartAndEndDates, eventStartAndEndDates }: DestinationAndDateStepProps){
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false)

  function openDatePicker(){
    setIsDatePickerOpen(true)
  }

  function closeDatePicker(){
    setIsDatePickerOpen(false)
  }

  const displayedDate = eventStartAndEndDates && eventStartAndEndDates.from && eventStartAndEndDates.to
    ? format(eventStartAndEndDates.from, "d' de 'LLL").concat(' até ').concat(format(eventStartAndEndDates.to, "d' de 'LLL"))
    : null

  return (
    <div className="bg-zinc-50 px-4 h-16 rounded-xl flex items-center shadow-shape gap-3">
      <div className="flex flex-1 items-center gap-2">
        <MapPin className='size-5 text-zinc-600'/>
        <input 
          className="bg-transparent text-lg placeholder-zinc-600 outline-none flex-1 disabled:cursor-not-allowed" 
          disabled={isGuestsInputOpen} 
          type="text" 
          placeholder="Para onde você vai?" 
          onChange={event => setDestination(event.target.value)}
        />
      </div>

      <button onClick={openDatePicker} disabled={isGuestsInputOpen} className="flex items-center gap-2 text-left w-[240px]">
        <Calendar className='size-5 text-zinc-600'/>
        <span className="flex-1 text-lg text-zinc-600 w-40 disabled:cursor-not-allowed" >
          {displayedDate || 'Quando?'}
        </span>
      </button>

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
        isGuestsInputOpen ? (
          <Button onClick={closeGuestsInput} variant="secondary" size='default'>
            Alterar local/data
            <Settings2 className='size-5' />
          </Button>
        ) : (
          <Button onClick={openGuestsInput} variant="primary" size='default'>
            Continuar
            <ArrowRight className='size-5' />
          </Button>
        )
      }
    </div>
  )
}
