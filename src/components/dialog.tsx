import { useState } from "react"

interface cardProps {
  cards: Array<object>
}

const DialogStart: React.FC<cardProps> = ({ cards }) => {
  const [isOpen, setIsOpen] = useState(true)

  const handleClose = () => {
    setIsOpen(false)
  }
  return (
    <>
      {cards}
      {isOpen && (
        <dialog className='backdrop-opacity-50  w-full h-full flex flex-col justify-center items-center ' datatype="dialog">
          <p className='text-xl text-center font-bold'>Starting Hand</p>
          <p className='text-center mb-10'>Select Card(s) to switch</p>
          <div id='choose-card-list'>
            <div className=' relative flex gap-2 justify-center items-center border bg-white aspect-[3/5] mb-5 w-40 border-black'>
              <div className="w-12 h-12 border absolute -left-2 text-2xl -top-1 bg-white rounded-full flex justify-center items-center border-black ">1</div>
              card 1
            </div>
          </div>
          <button id='choose-card-btn' className='w-fit border border-black p-2 rounded-md active:ring-2 active:ring-blue-500 active:bg-blue-200' onClick={handleClose} >Choose</button>
        </dialog>
      )}
    </>
  )
}

export { DialogStart }