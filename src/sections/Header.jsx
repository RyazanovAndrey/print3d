import { RiCloseLargeLine, RiFacebookLine, RiInstagramLine, RiMenu3Line, RiTwitterLine, RiYoutubeLine } from "@remixicon/react"
import { navLinks } from "../data"
import { useEffect, useState } from "react"
const Header = () => {

  const [isShowMenu, setisShowMenu] = useState(false)
  const [activeLink, setActiveLink] = useState(null)
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false)

  useEffect(() => {
    const activeLink = () => {
      document.querySelectorAll('section').forEach(item => {
        if (window.scrollY >= item.offsetTop - 300) {
          setActiveLink(`#${item.id}`)
        }
      })
    }
    window.addEventListener('scroll', activeLink)
  }, [])

  useEffect(() => {
    const showMenu = () => setisShowMenu(window.scrollY > 400)
    window.addEventListener('scroll', showMenu)

    return () => {
      window.removeEventListener('scroll', showMenu)
    }
  }, [])

  return (
    <header className={`py-4 absolute w-full top-0 left-0 z-50 ${isShowMenu ? 'fixed border border-gray-700 backdrop-blur-2xl anim-header' : ''}`}>
      <div className="container flex justify-between items-center">
        <a href="#" className="font-title text-3xl"><span className="text-primary">Art</span>Print<span className="text-primary">3D</span></a>
        <div className="justify-between items-center gap-x-10 hidden lg:flex">
          {navLinks.map(item => {
            const isActiveLink = item.href == activeLink
            return <a href={item.href} className={isActiveLink ? 'link-active' : 'link'}>{item.title}</a>
          })}
        </div>
        <div className="flex gap-x-2">
          <div className="border border-secondary p-1 rounded-full cursor-pointer">
            <RiFacebookLine />
          </div>
          <div className="border border-secondary p-1 rounded-full cursor-pointer">
            <RiInstagramLine />
          </div>
          <div className="border border-secondary p-1 rounded-full cursor-pointer">
            <RiYoutubeLine />
          </div>
          <div className="border border-secondary p-1 rounded-full cursor-pointer">
            <RiTwitterLine />
          </div>
        </div>
        <div className="flex items-center">
          {isOpenMobileMenu && (
            <div className="absolute top-full left-0 bg-[#1a2642] w-full">
              {navLinks.map(item => {
                return <a href={item.href} onClick={() => setIsOpenMobileMenu(false)} className="block text-white p-4 border border-[#1f2c49]">{item.title}</a>
              })}
            </div>
          )}
          {isOpenMobileMenu
            ? <RiCloseLargeLine onClick={() => setIsOpenMobileMenu(false)} className="cursor-pointer lg:hidden" size={36} />
            : <RiMenu3Line className="cursor-pointer lg:hidden" size={36} onClick={() => setIsOpenMobileMenu(true)} />}
        </div>
      </div>
    </header>
  )
}

export default Header