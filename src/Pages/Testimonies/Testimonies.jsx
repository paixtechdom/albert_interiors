import { useEffect, useRef, useState } from "react"
const TestimonyList = [
    {
        name: 'Emma Smith',
        org: 'Homeowner',
        testimony: "Albert Interiors transformed my house into a home! Their attention to detail and ability to capture my style surpassed all expectations. I couldn't be happier with the results."
    },
    {
        name: 'David Chen',
        org: 'CEO, ModernTech Inc.',
        testimony: "Working with Albert Interiors was a game-changer for our office space. Their innovative designs not only boosted productivity but also left a lasting impression on clients and employees alike."
    },
    {
        name: 'Sophie Johnson',
        org: 'Restaurant Owner',
        testimony: "Albert Interiors helped us create a dining experience that wows our guests every time. Their expertise in both aesthetics and functionality made all the difference in setting us apart in a competitive industry."
    },
    {
        name: 'Michael Rodriguez',
        org: 'Real Estate Developer',
        testimony: "I've collaborated with many design firms, but Albert Interiors stands out for their professionalism and creativity. Their designs have added significant value to our properties, making them highly desirable in the market."
    },
]

export const Testimonies = () => {
    const [ currentSlide, setCurrentSlide ] = useState(0)

    const [startX, setStartX ] = useState(0)
    const sliderRef = useRef(null)
    
    useEffect(() => {
        const int = setInterval(() => {
            slide()
        }, 10000);
        return () => clearInterval(int)
    }, [currentSlide])
    
    const slide = () => {
        setCurrentSlide(currentSlide === TestimonyList.length - 1 ? 0 : prev => prev + 1 )
    }

    const handleTouchStart = (e) => {
        setStartX(e.touches[0].clientX)
    }
    const handleTouchEnd = (e) => {
        const deltaX = e.changedTouches[0].clientX - startX
        const threshold = 100;
        if(Math.abs(deltaX) > threshold){
            slide()
        }else if(deltaX< 0 && currentSlide < TestimonyList.length - 1){
            setCurrentSlide(currentSlide === TestimonyList.length - 1 ? 0 : prev => prev + 1 )
        }
    }

    return(
        <div id="Testimonies" className="center parent flex-col bg-orange-100 my-[15vh] py-[15vh] w-full relative"   
        ref={sliderRef} onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}>
            <div className="w-11/12 lg:w-10/12 xl:9/12">
                <h2 className="text-orange-500  text-3xl text-center">What Client Say</h2>
            </div>
              <div className="center w-full absolute bottom-[8vh]  z-40">
                    <div className={`center gap-3 bg-orange-100 border border-orange-500 p-4 rounded-full px-9`}>
                        {
                            TestimonyList.map((i, j) => (
                                <p key={j} className={`${currentSlide == j ? `h-4 lg:h-5 w-4 lg:w-5 bg-orange-500` : 'w-3 h-3 bg-white'} border border-orange-500 rounded-full transition-all duration-500 cursor-pointer`} onClick={() => setCurrentSlide(j)}></p>
                            ))
                        }
                    </div>
                </div>

            <div className="w-full">
                <div className="flex py-[5vh] transition-all duration-1000" style={{
                    width: TestimonyList.length*100+`vw`,
                    transform: `translatex(-${currentSlide*100}vw)`
                }} >
                    {
                        TestimonyList.map((t, i) => (
                            <div key={i} className="w-[100vw] relative center">

                                <div className="w-10/12 lg:w-6/12 xl:w-5/12 mt-[5vh] flex flex-col gap-1 relative rounded-2xl shadow-2xl p-9 bg-white border-b-4 border-orange-500">
                                    {/* <i className="bi bi-star-fill text-orange-500 text-4xl absolute -top-[9vh] left-0"></i> */}

                                    
                                    <p className="text-sm tracking-wide leading-relaxed w-full mb-3">
                                        {t.testimony}
                                    </p>
                                    <h3 className=" w-full text-orange-500 text-xl">{t.name}</h3>
                                    <p className="text-orange-700">{t.org}</p>

                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}