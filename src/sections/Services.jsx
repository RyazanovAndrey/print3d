import ServicesCard from "../components/ServicesCard"

const Services = () => {

  const servicesCardList = [
    { title: 'Rapid & Precise Prototyping', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, consequuntur.', icon: 'Services-1.png' },
    { title: 'Additive Manufacturing', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, consequuntur.', icon: 'Services-2.png' },
    { title: 'Custom Product Design', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, consequuntur.', icon: 'Services-3.png' },
    { title: '3D Modeling & CAD Services', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, consequuntur.', icon: 'Services-4.png' },
    { title: 'Small-Batch Production', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, consequuntur.', icon: 'Services-5.png' },
    { title: 'Material Consultation evaluating', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, consequuntur.', icon: 'Services-6.png' },
  ]

  return (
    <section className="py-10 bg-hero" id="services">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5">
          <div className="flex flex-col md:flex-row gap-5">
            {servicesCardList.slice(0, 2).map(item => (
              <ServicesCard {...item} />
            ))}
          </div>
          <div className="space-y-5 mt-5">
            <p className="desc">OUR SERVICES</p>
            <h2 className="title">3D Printing Solutions for Your Business</h2>
            <p className="text-bd-item">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores illo porro maxime incidunt sed assumenda modi deleniti qui doloremque ipsum.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mt-5">
          {servicesCardList.slice(2, 6).map(item => (
            <ServicesCard {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services