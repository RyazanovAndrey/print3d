import AdvCard from "../components/AdvCard"

const Advantages = () => {

  const advList = [
    { icon: 'Feature-1.png', title: 'Accurate Prototyping', desc: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, odio! Voluptates saepe nulla qui, esse repudiandae eaque fugiat aut? Aut.' },
    { icon: 'Feature-2.png', title: 'Custom Manufacturing', desc: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, odio! Voluptates saepe nulla qui, esse repudiandae eaque fugiat aut? Aut.' },
    { icon: 'Feature-3.png', title: 'Complex Geometries', desc: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, odio! Voluptates saepe nulla qui, esse repudiandae eaque fugiat aut? Aut.' },
  ]

  return (
    <section className="mb-35" id="futures">
      <div className="container grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
        {advList.map(item => (
          <AdvCard {...item} />
        ))}
      </div>
    </section>
  )
}

export default Advantages