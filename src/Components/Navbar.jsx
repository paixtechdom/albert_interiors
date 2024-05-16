import { Link } from "react-router-dom"
import { NavInfo } from "../assets/Constants"
import { useContext, useEffect, useState } from "react"
import { Button } from "./Button"
import { AppContext } from '../App'

const Navbar = () => {
    const [ showNav, setShowNav ] = useState(false)
    const [ scrolledDown, setScrolledDown ] = useState(false)
    const { currentNav, setCurrentNav } = useContext(AppContext)

    useEffect(() => {
        document.addEventListener('scroll', () => {
            setScrolledDown(document.documentElement.scrollTop > 10 ? true : false)
            handleScroll()
        })
        document.removeEventListener('scroll', () => null)
    }, [])

    const handleScroll = () => {
        document.querySelectorAll('.parent').forEach((parent, i) =>{
            const pos = parent.getBoundingClientRect()
            if( pos.top > -10 && pos.top < 100) {
                setCurrentNav(i)
            } else{
                // setCurrentNav(99)
            }
        })
    
      
    }
    
    useEffect(() =>{
        
    }, [])


    return(
        <header className={`center fixed h-[8vh] md:h-[10vh] lg:h-[13vh] w-full z-50 ${scrolledDown ? 'bg-orange-100 bg-opacity-90 shadow-xl' : 'bg-transparent'} transition-all duration-1000`}>

            <nav className="w-11/12 xl:w-9/12 lg:w-10/12 flex items-center justify-between transition-all duration-1000 z-[60]">
                <div className="flex items-center justify-start logo w-3/12">
                    <span className={`text-3xl md:text-4xl text-orange-500 font-bold `}>
                        A.I
                    </span>
                </div>

                <i className={`bi bi-${showNav ? 'x-lg' : 'list'} text-black lg:hidden text-3xl cursor-pointer`} onClick={()=>setShowNav(!showNav) }></i>


                <div className={`flex flex-col items-center justify-start w-[100vw] gap-5 fixed top-[8vh] md:top-[10vh]  bg-orange-100 bg-opacity-90 lg:bg-transparent z-50 h-screen transition-all duration-1000 border-b border-secondary  ${showNav ? 'left-0' : 'left-[100vw] lg:left-0'} lg:flex-row lg:justify-center lg:gap-0 lg:h-fit lg:top-0 lg:relative w-10/12 lg:border-0`}>
                    <div className={`flex flex-col items-center 
                    w-10/12 mt-[10vh] gap-9 lg:justify-end xl:justify-center lg:top-0 lg:flex-row lg:gap-9 xl:gap-14 lg:w-full text-black text-2xl lg:text-sm lg:mt-0`}>
                        {
                            NavInfo.map((n, i) => (
                                <div key={i} className={`w-fit cursor-pointer ${currentNav === i ? 'border-b border-orange-500 font-bold text-orange-500' :  'text-black'}`}  
                                onClick={() => {
                                    document.querySelector(`#${n.link}`).scrollIntoView({
                                        behavior: 'smooth'
                                    })
                                    setShowNav(false)
                                }}>{n.title}</div>
                            ))
                        }
                    </div>

                    <div className="flex justify-center lg:justify-end mt-9 w-10/12 lg:mt-0 lg:w-6/12
                    xl:w-3/12 lg:flex-row">

                        <Button text={'Contact Us'} type={'transparent'} setShowNav={setShowNav}/>
                    </div>
                </div>
            </nav>
        </header>
    )
}


export default Navbar