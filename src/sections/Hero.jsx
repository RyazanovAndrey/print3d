import { RiPlayMiniFill } from "@remixicon/react"

const Hero = () => {

  // <RiPlayMiniFill />

  return (
    <section className="bg-hero py-40">
      <div className="container grid grid-cols-1 lg:grid-cols-2 space-y-10">
        <div className="space-y-10">
          <p className="text-primary">FROM CONCEPT TO CREATION</p>
          <h1 className="text-5xl lg:text-7xl font-title">Precision 3D <br /> Printing <br /> Solutions</h1>
          <div className="flex flex-col lg:flex-row gap-2 mb-2">
            <button className="btn-fill">Explore more</button>
            <button className="btn-border flex gap-x-2">
              <RiPlayMiniFill />Video production
            </button>
          </div>
        </div>
        <div className="flex items-center flex-col justify-center">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis deserunt voluptas recusandae amet iusto impedit sint cupiditate error repudiandae? Quidem.</p>
          <img src="Hero-Image.png" alt="" />
        </div>
      </div>
    </section>
  )
}

export default Hero