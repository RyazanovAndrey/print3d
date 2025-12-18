const ServicesCard = ({ title, desc, icon }) => {
  return (
    <div className="border border-bd-item rounded-2xl p-5 flex flex-col">
      <img src={icon} alt="" width={70} height={70} />
      <div className="font-title text-2xl py-3">{title}</div>
      <p className="text-[14px] text-bd-item mb-5">{desc}</p>
      <button className="text-secondary cursor-pointer hover:underline text-left mt-auto">Read more...</button>
    </div>
  )
}

export default ServicesCard