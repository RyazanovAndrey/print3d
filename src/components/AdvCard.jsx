const AdvCard = ({ icon, title, desc }) => {
  return (
    <div className="border border-bd-item flex gap-x-5 p-5 rounded-2xl">
      <div className="">
        <img src={icon} alt="" width={200} height={200} />
      </div>
      <div className="">
        <div className="font-title text-2xl">{title}</div>
        <div className="text-[14px] text-[#a0a0a0] mt-3">{desc}</div>
      </div>
    </div>
  )
}

export default AdvCard