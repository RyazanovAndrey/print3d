import { RiCalendarLine, RiEye2Line } from "@remixicon/react"

const BlogCard = ({ image, title, date, views, desc }) => {
  return (
    <div className="border border-bd-item rounded-2xl overflow-hidden bg-bg">
      <div className="h-[200px] overflow-hidden">
        <img src={image} alt="" />
      </div>
      <div className="p-5 space-y-5">
        <div className="font-title text-2xl min-h-[100px]">{title}</div>
        <div className="flex justify-between">
          <span className="flex items-center gap-x-2 text-bd-item text-[14px]"><RiCalendarLine className="text-primary" />{date}</span>
          <span className="flex items-center gap-x-2 text-bd-item text-[14px]"><RiEye2Line color="#2680a3" />{views}</span>
        </div>
        <p className="text-bd-item text-[14px]">{desc.slice(0, 100) + '...'}</p>
        <button className="text-secondary hover:underline cursor-pointer">Read more...</button>
      </div>
    </div>
  )
}

export default BlogCard