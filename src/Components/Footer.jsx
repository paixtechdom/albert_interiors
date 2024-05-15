import { NavInfo } from "../assets/Constants"

const QuickLinks = [
    {
        title: 'Contact Us',
        link: ''
    },
    {
        title: 'FAQs',
        link: ''
    },
    {
        title: 'Newsletter',
        link: ''
    },
    {
        title: 'Terms and Conditions',
        link: ''
    },

]
const contact = [
    {
        icon: 'envelope-fill',
        link: 'mailto:hello@albertinteriors.com',
        text: 'hello@albertinteriors.com',
    },
    {
        icon: 'telephone-fill',
        link: 'tel:+123456789',
        text: '+123 456 789',
    },
]
const icons = [
    {
        icon: 'whatsapp',
        link: ''
    },
    {
        icon: 'instagram',
        link: ''
    },
    {
        icon: 'pinterest',
        link: ''
    },
    {
        icon: 'facebook',
        link: ''
    },
]



const Footer = () => {
    return(
        <footer className='w-full h-fit center flex-col relative overflow-hidden '>
        <div className='w-full min-h-[60vh] pt-[10vh] pb-[20vh] center relative bg-orange-100 z-10 text-black'>

            <div className="flex flex-col lg:flex-row w-[85%] gap-[15%] gap-y-[9vh]">
                <div className="flex flex-col gap-5 lg:w-[40%]">
                    <h2 className='text-2xl text-orange-500'>Albert Interiors</h2>

                    <p className="leading-relaxed tracking-wide text-sm">Albert Interiors: Crafting Exquisite Spaces. Our passion for innovation and commitment to excellence drive us to create timeless designs that redefine luxury living. Welcome to a world where imagination meets elegance, and every detail is meticulously crafted to exceed your expectations.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-9">
                    <LinksContainer header={'Navigation'} data={NavInfo}/>

                    <div id='Contact' className="flex flex-col ">
                        <div className="text-2xl mb-5 lg:mb-8 text-orange-500">Contact Us</div>

                        <div className="flex flex-col gap-4 lg:gap-5 text-sm">
                            {
                                contact.map((c, i) => (
                                    <div key={i} className="flex gap-5">
                                        <i className={`bi bi-${c.icon} text-orange-500`}></i>
                                        <a href={c.link}>{c.text}</a>
                                    </div>
                                    
                                ))
                            }
                        </div>
                        <div className="flex gap-5 lg:justify-between mt-5">
                            {
                                icons.map((icon, i) => (
                                   <i key={i} className={`bi bi-${icon.icon}  text-orange-500`}></i>
                                ))
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div className="p-3 py-9 flex justify-center items-center text-orange-500 text-center border-t border-orange-500 bg-white w-full flex-col gap-4">
                <p>&copy; Copyright <strong className='text-2xl'> Albert Interiors</strong> {new Date().getFullYear()} </p>

                <p className="text-black">Designed by <strong><a href="https://paixtechdom.netlify.app" className="text-orange-500 ">Paix Techdom</a></strong></p>
        </div>
    </footer>
    )
}


const LinksContainer = ({data, header}) => {
    return(
        <div className="flex flex-col gap-5 lg:gap-8 ">
            <div className="text-2xl text-orange-500">{header}</div>

            <div className="flex flex-col gap-4 lg:gap-5 text-sm">
                {
                    data.map((d, i) => (
                        header == 'Navigation' ? 
                        <div key={i} className='cursor-pointer' 
                        onClick={() => {
                            document.querySelector(`#${d.link}`).scrollIntoView({
                                behavior: 'smooth'
                            })
                        }}
                        >{d.title}</div> 
                        
                        : 
                        <a key={i} href="">{d.title}</a>
                    ))
                }
            </div>
        </div>
    )
}



export default Footer