import { Calendar, CircleCheck, CircleDashed, Link2, MapPin, Plus, Settings2, UserCog } from "lucide-react";

export function TripDetailsPage(){
  return (
    <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
      <header className="px-4 h-16 rounded-xl bg-zinc-50 shadow-shape flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MapPin className='size-5 text-zinc-600' />
          <span className="text-zinc-900">Rio de Janeiro</span>
        </div>

        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <Calendar className='size-5 text-zinc-600' />
            <span className="text-zinc-900">17 a 23 de Agosto</span>
          </div>

          <div className="w-px h-6 bg-zinc-200" />

          <button className='flex items-center gap-2 bg-zinc-200 text-zinc-700 rounded-lg px-5 py-2 font-medium hover:bg-zinc-300 transition-colors'>
            Alterar local/data
            <Settings2 className='size-5' />
          </button>
        </div>
      </header>

      <main className="flex gap-16 px-4">
        <div className="flex-1 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold">Atividades</h2>
            <button className='flex items-center gap-2 bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium hover:bg-lime-400 transition-colors'>
              <Plus className='size-5' />
              Cadastrar atividade
            </button>
          </div>

          <div className="space-y-8">
            <div className="space-y-2.5">
              <div className="flex gap-2 items-baseline">
                <span className="text-xl text-zinc-700 font-semibold">Dia 17</span>
                <span className="text-xs text-zinc-600">Sábado</span>
              </div>
              <p className='text-zinc-600 text-sm'>Nenhuma atividade cadastrada nessa data.</p>
            </div>

            <div className="space-y-2.5">
              <div className="flex gap-2 items-baseline">
                <span className="text-xl text-zinc-700 font-semibold">Dia 18</span>
                <span className="text-xs text-zinc-600">Domingo</span>
              </div>
              <div className='space-y-2.5'>
                <div className="flex items-center gap-3 px-4 py-2.5 bg-zinc-50 rounded-xl shadow-shape">
                  <CircleCheck className="size-5 text-lime-700" /> 
                  <span className="text-zinc-900">Academia em grupo</span>
                  <span className="text-zinc-600 text-sm ml-auto">08:00h</span>
                </div>
              </div>
              <div className='space-y-2.5'>
                <div className="flex items-center gap-3 px-4 py-2.5 bg-zinc-50 rounded-xl shadow-shape">
                  <CircleCheck className="size-5 text-lime-700" /> 
                  <span className="text-zinc-900">Academia em grupo</span>
                  <span className="text-zinc-600 text-sm ml-auto">08:00h</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-80 space-y-6">
          <div className="space-y-6">
            <h2 className="font-semibold text-xl">Links importantes</h2>
            <div className="space-y-5">
              <div className="flex items-center justify-between gap-4">
                <div className="space-y-1.5 flex-1">
                  <span className="block font-medium text-zinc-900">Reserva do AirBnB</span>
                  <a href='#' className="block text-xs text-zinc-600 truncate hover:text-zinc-400 transition-colors">
                    https://www.airbnb.com.br/rooms/104700011654654564645454
                  </a>
                </div>
                <Link2 className="text-zinc-600 size-5" />
              </div>
              <div className="flex items-center justify-between gap-4">
                <div className="space-y-1.5 flex-1">
                  <span className="block font-medium text-zinc-900">Regras da casa</span>
                  <a href='#' className="block text-xs text-zinc-600 truncate hover:text-zinc-400 transition-colors">
                    https://www.notion.com/pages/1047000112354648336?adults=13&children=0&infants=0&pets=0&wishlist_item_id=11003621872995&check_in=2024-08-17&check_out=2024-08-26&source_impression_id=p3_1717600906_P3DL0E-bJZzguEci&previous_page_section_name=1000
                  </a>
                </div>
                <Link2 className="text-zinc-600 size-5" />
              </div>
              <div className=""></div>
            </div>
            <button className='w-full flex items-center justify-center gap-2 bg-zinc-200 text-zinc-700 rounded-lg px-5 h-11 font-medium hover:bg-zinc-300 transition-colors'>
              <Plus className='size-5' />
              Cadastrar novo link
            </button>
          </div>
          
          <div className="w-full h-px bg-zinc-200" />

          <div className="">
            <div className="space-y-6">
              <h2 className="font-semibold text-xl">Convidados</h2>
              <div className="space-y-5">
                <div className="flex items-center justify-between gap-4">
                  <div className="space-y-1.5 flex-1">
                    <span className="block font-medium text-zinc-900">Rodrigo Mesquita</span>
                    <span className="block text-sm text-zinc-600 truncate">
                      dev.rodrigomesquita@gmail.com
                    </span>
                  </div>
                  <CircleDashed className="text-lime-700 size-5" />
                </div>
                <div className="flex items-center justify-between gap-4">
                  <div className="space-y-1.5 flex-1">
                    <span className="block font-medium text-zinc-900">Dr. Rita Pacocha</span>
                    <span className="block text-sm text-zinc-600 truncate">
                      lacy.stiedemann@gmail.com
                    </span>
                  </div>
                  <CircleDashed className="text-lime-700 size-5" />
                </div>
                <div className=""></div>
              </div>
              <button className='w-full flex items-center justify-center gap-2 bg-zinc-200 text-zinc-700 rounded-lg px-5 h-11 font-medium hover:bg-zinc-300 transition-colors'>
                <UserCog className='size-5' />
                Gerenciar convidados
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
