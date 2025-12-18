import { whyItems } from "../data"  

const WhyItems = () => {
  return (
    <section className="pt-10 pb-30">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {whyItems.map(item => (
              <div className="flex flex-col items-center md:items-start">
                <div className="border-text-color">{item.title}</div>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
    </section>
  )
}

export default WhyItems