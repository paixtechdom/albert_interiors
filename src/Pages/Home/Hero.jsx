import { useEffect, useState } from 'react'
import { Button } from '../../Components/Button'
import { Parallax } from '../../Components/Parallax'

export const Hero = () => {
    const [ currentSlide, setCurrentSlide ] = useState(0)

    const HeroImages = [
        'img1',
       'img2',
        'img3',
        'img4'
    ]

    useEffect(() => {

        const int = setInterval(() => {
            slide()
        }, 5000);
        return () => clearInterval(int)
    }, [currentSlide])
    
    const slide = () => {
        setCurrentSlide(currentSlide === HeroImages.length - 1 ? 0 : prev => prev + 1 )
    }

    return(
        <section id='Home' className={`parent center mt-[20vh] lg:mt-0 min-h-[100vh] lg:h-[100vh] w-full relative bg-white bg-cover bg-center `}>

            <div className="h-[90%] flex flex-col lg:flex-row justify-between items-center w-11/12 lg:w-10/12 xl:w-9/12 gap-[50px] lg:gap-0">
                
                <div className="flex flex-col z-10 text-black gap-4 lg:w-9/12">
                    <Parallax id={'heroh1'}>
                        <h1 className='font-bold text-5xl text-orange-500 leading-[55px]'>Transforming Spaces, Elevating Lifestyles</h1>
                    </Parallax>
                    <Parallax id={'herop'}>
                        <p className='text-sm tracking-wide leading-relaxed'>Welcome to Albert Interiors, where every space is a canvas and every design a masterpiece. Discover a world where innovation meets elegance, where your dreams take shape, and where luxury becomes a way of life. Let us redefine your living experience, one exquisite detail at a time.</p>
                    </Parallax>
                    <Parallax id={'herobtn'} clas={'w-fit'}>
                        <Button type={'primary'} text={'Get Started'} />
                    </Parallax>
                </div>

                <div className={`w-[550px] h-[550px] lg:w-full lg:h-full  rounded-l-full rounded-b-full translate-x-[25%] border border-red-400 center outline outline-orange-100 center relative overflow-hidden bg-center bg-cover ${HeroImages[currentSlide]}`} style={{
                    outlineWidth: 50+'px'
                }}>
                </div>
            </div>

        </section>
    )
}


