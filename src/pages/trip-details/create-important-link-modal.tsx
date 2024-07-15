import { Link2, Tag, X } from "lucide-react";
import { Button } from "../../components/button";

interface CreateImportantLinkModalProps {
  closeCreateLinkModal: () => void
}

export function CreateImportantLinkModal({ closeCreateLinkModal }: CreateImportantLinkModalProps){
  return (
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
