import AccordionItem from "./AccordionItem"
import { accordionList } from "../data"
import { useState } from "react"

const AccordionList = () => {

  const [isOpenId, setIsOpen] = useState(null)

  const toggleBox = (accordId) => {
    accordId == isOpenId ? setIsOpen(null) : setIsOpen(accordId)
  }

  return (
    <div className="">
      {accordionList.map(item => (
        <AccordionItem {...item} isOpenId={item.id == isOpenId} toggleBox={toggleBox} />
      ))}
    </div>
  )
}

export default AccordionList