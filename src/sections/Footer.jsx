const Footer = () => {

  const dateToday = new Date()

  return (
    <footer className="border border-t-gray-500 py-2">
        <div className="container">
          <span className="text-white mr-2">&copy;</span>
          <span>{dateToday.getFullYear()}</span>
          <span className="ml-3">ArtPrint3D</span>
        </div>
    </footer>
  )
}

export default Footer