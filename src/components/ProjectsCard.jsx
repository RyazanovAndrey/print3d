const ProjectsCard = ({ img, title, desc }) => {

  return (
    <div className="border-bd-item border rounded-2xl overflow-hidden bg-bg">
      <div className="w-full h-[200px] overflow-hidden">
        <img src={img} alt="" />
      </div>
      <div className="space-y-5 p-5">
        <div className="font-title text-2xl">{title}</div>
        <div className="text-[14px] text-bd-item">{desc}</div>
        <button className="btn-border">Read more</button>
      </div>
    </div>
  )
}

export default ProjectsCard