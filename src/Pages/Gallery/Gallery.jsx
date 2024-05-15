import img1 from '../../assets/images/16.jpg'
import img2 from '../../assets/images/18.jpg'
import img3 from '../../assets/images/19.jpg'
import img4 from '../../assets/images/23.jpg'
import img5 from '../../assets/images/27.jpg'
import img6 from '../../assets/images/31.jpg'
import { Parallax } from '../../Components/Parallax'

const GalleryImages = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
]

export const Gallery = () => {
    return(
        <section id='Gallery' className="parent w-11/12 lg:w-10/12 xl:w-9/12 center flex-col gap-[10vh] py-[15vh] ">
            <div className="text-orange-500 font-bold text-3xl text-center w-full">Our Works</div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                {
                    GalleryImages.map((g, i) => (
                        <div id={g} key={i} className="center w-full overflow-hidden rounded-2xl">
                        <Parallax id={g} key={i} className="center w-full">
                            <img src={g} alt="" className='w-full'/>
                        </Parallax>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}