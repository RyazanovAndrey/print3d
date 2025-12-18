import AccordionList from "../components/AccordionList"

const Who = () => {
  return (
    <section className="my-35" id="about">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="space-y-3">
            <p className="desc">Who we are</p>
            <h2 className="title">Shaping the Future of Manafacturing</h2>
            <p className="text-[14px] text-bd-item">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat voluptatum eaque eveniet nihil quae voluptatibus recusandae qui. Recusandae, nobis vero.</p>
            <button className="btn-fill">More about us</button>
          </div>
          <div className="">
            <AccordionList />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Who