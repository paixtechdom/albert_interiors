import { Parallax } from "../../Components/Parallax"

export const Services = () => {
    const ServiceList = [
        {
            icon: 'tools',
            title: 'Custom Furniture Design',
            desc: "Tailored guidance to realize your dream space, from inception to execution."
        },
        {
            icon: 'grid-3x3-gap',
            title: 'Space Planning and Layout Design',
            desc: "Unique, handcrafted furniture pieces designed to elevate your interiors and express your individuality.",
        },
        {
            icon: 'house-door',
            title: "Home Styling and Décor",
            desc: "Strategic optimization of your space for maximum functionality and aesthetic appeal, customized to suit your lifestyle."
        },
        {
            icon: 'brush',
            title: 'Interior Design Consultation',
            desc: "Impeccable attention to detail in selecting accessories and curating elements that enhance your home's ambiance and reflect your personal style."
        },
    ]
    return(
        <section className="center parent bg-orange-100 w-full py-[20vh]">
            <div id="Services" className="w-11/12 lg:w-10/12 xl:w-9/12 center flex-col gap-[10vh]">
                <Parallax id={'serivicesheading'}>
                    <h2 className="text-orange-500 text-3xl text-center w-full" >We Provide the Best Services</h2>
                </Parallax>

                <div className="grid md:grid-cols-2 lg-grid-cols-3 xl:grid-cols-4  gap-y-9 gap-x-5">
                    {
                        ServiceList.map((s, i) => (
                            <Parallax key={i} id={s.title} clas={'flex'}>
                                <div  className="flex flex-col p-5 gap-3 shadow-xl w-full transition-all duration-1000 cursor-pointer bg-white hover:bg-white border-b-4 border-orange-500 rounded-2xl">
                                    <div className="bg-orange-100 rounded-full center w-[50px] h-[50px]">    
                                        <i className={`bi bi-${s.icon} text-xl text-orange-500`}></i>
                                    </div>

                                    <h3 className="text-orange-500  text-xl">{s.title}</h3>
                                    <p className="tracking-wide leading-relaxed text-sm">
                                        {s.desc}
                                    </p>
                                </div>
                            </Parallax>
                        ))
                    }
                </div>

            </div>
        </section>
    )
}