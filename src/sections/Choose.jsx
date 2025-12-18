import { RiCheckboxLine } from "@remixicon/react"
import { chooseList } from "../data"

const Choose = () => {

  return (
    <section className="bg-hero py-30" id="why-us">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="">
            <div className="desc">WHY CHOOSE US</div>
            <h2 className="title">Leading the Way in 3D Printing</h2>
            <p className="text-bd-item mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea laborum neque temporibus placeat ipsa ab fuga enim, qui modi ipsam.</p>
            <div className="text-bd-item mt-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet saepe at ipsum neque ullam voluptatum eius iusto. Natus, laboriosam modi?</div>
            <div className="flex gap-x-5">
              <div className="space-y-2 mt-10">
                {chooseList.slice(0, 4).map(item => {
                  return <span className="flex items-center gap-x-2"><RiCheckboxLine color="#2680a3" />{item}</span>
                })}
              </div>
              <div className="space-y-2 mt-10">
                {chooseList.slice(4, 8).map(item => {
                  return <span className="flex items-center gap-x-2"><RiCheckboxLine color="#2680a3" />{item}</span>
                })}
              </div>
            </div>
          </div>
          <div>
                <div className="flex justify-between mb-2">
                  <p>Client Statisfacion Rate</p>
                  <div className="text-secondary">95%</div>
                </div>
                <div className="relative">
                  <div className="w-[95%] bg-secondary h-3 rounded-full"></div>
                  <div className="absolute top-0 left-0 w-full bg-secondary/20 h-3 rounded-full"></div>
                </div>
                <div className="flex justify-between mb-2">
                  <p>Innovafive Technology Adaption</p>
                  <div className="text-secondary">76%</div>
                </div>
                <div className="relative">
                  <div className="w-[76%] bg-secondary h-3 rounded-full"></div>
                  <div className="absolute top-0 left-0 w-full bg-secondary/20 h-3 rounded-full"></div>
                </div>
                <img src="/public/Why-Choose-Us-Image.jpg" alt="" className="mt-5 rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Choose