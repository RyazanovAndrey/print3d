import { RiArrowDownSLine, RiArrowUpSLine } from "@remixicon/react"
import { useRef } from "react"

const AccordionItem = ({ id, title, desc, isOpenId, toggleBox }) => {

  const refLink = useRef()

  return (
    <div className="space-y-5">
      <div onClick={() => toggleBox(id)} className="bg-secondary py-3 px-6 rounded-full cursor-pointer flex justify-between items-center">{title}{isOpenId ? < RiArrowUpSLine /> : < RiArrowDownSLine />}</div>
      <div ref={refLink} className="overflow-hidden max-h-0 transition-all" style={isOpenId ? { maxHeight: refLink.current.scrollHeight } : { maxHeight: '0px' }} >
        <p className="p-3 text-[#a0a0a0] text-[14px]">{desc}</p>
      </div>
    </div>
  )
}

export default AccordionItem