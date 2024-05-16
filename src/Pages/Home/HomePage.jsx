import { Hero } from "./Hero"
import img4 from '../../assets/images/1.jpg'
import img1 from '../../assets/images/2.jpg'
import img2 from '../../assets/images/5.jpg'
import img3 from '../../assets/images/7.jpg'
import { Button } from "../../Components/Button"
import { Services } from "../Services/Services"
import { Get } from "./Get"
import { Process } from "../../assets/Constants"
import { Gallery } from "../Gallery/Gallery"
import { Testimonies } from "../Testimonies/Testimonies"
import { Parallax } from "../../Components/Parallax"
import './Home.css'

const HomePage = () => {
    return(
        <main className="center flex-col w-full bg-white">
            <Hero />
            <Services />
            <section id="About" className="parent w-11/12 lg:w-10/12 xl:w-9/12 flex flex-col lg:flex-row justify-between items-center py-[10vh] pt-[30vh] gap-12">

                <Parallax id={'about'} clas="w-full relative">
                    <div className="absolute rounded-full border border-orange-500 overflow-hidden center w-[200px] h-[200px] -top-[25%] left-15 outline outline-orange-50 img1 bg-center bg-cover" style={{
                    outlineWidth: 30+'px'
                    }}>
                    </div>



                    <img src={img1} alt="" className="w-/12 rounded-2xl border-2 border-orange-50"/>
                </Parallax>


                <Parallax id={'abouttext'} clas="w-full lg:w-6/12 flex flex-col gap-5">
                    <h1 className=" text-4xl text-orange-500">About Albert Interiors</h1>
                    <p className="text-sm tracking-wide leading-relaxed">Albert Interiors: Crafting Exquisite Spaces. Our passion for innovation and commitment to excellence drive us to create timeless designs that redefine luxury living. Welcome to a world where imagination meets elegance, and every detail is meticulously crafted to exceed your expectations.</p>
                    <Button text={'Learn More'} type={'primary'}/>
                </Parallax>

            </section>


            <Get data={Process} title={['Simple', 'Solutions']} />

            <section className="w-11/12 lg:w-10/12 xl:w-9/12 flex flex-col-reverse lg:flex-row justify-between items-center py-[10vh] gap-12">

                <Parallax id={'perfect'} clas="w-full lg:w-6/12 flex flex-col gap-5">
                    <h1 className=" text-4xl text-orange-500">Perfect Designs for your Home</h1>
                    <p className="text-sm tracking-wide leading-relaxed">Discover the perfect harmony of style and functionality with Albert Interiors. Our curated designs are tailored to elevate your living spaces, blending luxury with comfort to create a home that reflects your unique personality and taste.</p>
                    <Button text={'Learn More'} type={'primary'}/>
                </Parallax>


                <Parallax id={'perfectimage'} clas="w-full relative">
                    <div className="absolute rounded-full border border-orange-500 overflow-hidden center w-[200px] h-[200px] -top-[25%] right-15 img2 bg-center bg-cover outline outline-orange-50" style={{
                    outlineWidth: 30+'px'
                    }}>
                    </div>

                    <img src={img2} alt="" className="w-/12 rounded-2xl border-2 border-orange-50"/>
                </Parallax>

            </section>
            

            <Testimonies />
            <Gallery />

            <section className="my-[20vh] w-full center">
                <Parallax id={'nowto'} clas="bg-orange-100 py-[20vh] rounded-2xl p-9 w-11/12 lg:w-10/12 xl:w-9/12 flex flex-col lg:flex-row justify-center gap-6 lg:gap-9">

                    <h2 className="text-orange-500  text-4xl">
                        Contact Us to get started now
                    </h2>
                    <Button text={'Contact Us'}/>

                </Parallax>
            </section>


        </main>
    )
}


export default HomePage