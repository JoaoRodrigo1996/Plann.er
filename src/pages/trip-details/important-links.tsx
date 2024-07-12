import { Link2, Plus } from "lucide-react";

export function ImportantLinks(){
  return (
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
  )
}