import { useState } from 'react'
import { Parallax } from '../../Components/Parallax'


export const Get = ({data, title}) => {
    const [ currentGet, setCurrentGet ] = useState(0)

   
    return(
        <section id={title[1]} className="w-full center py-[15vh]">
            <div className="flex flex-col lg:flex-row justify-between w-11/12 lg:w-10/12 h-full gap-[9vh] lg:gap-0  bg-orange-100 p-6 py-[15vh] rounded-3xl">
                <Parallax id={'theprocess'} clas="flex flex-col w-full lg:w-6/12 justify-center items-end text-4xl lg:text-5xl pr-3 text-orange-500  border-r border-orange-500 gap-3">
                    {
                        title.map((t, i) => (
                            <div id={t} key={i}>
                                <h2 className=''>{t}</h2>
                            </div>

                        ))
                    }
                </Parallax>

                <div className="w-full lg:w-6/12 text-orange-500  flex flex-col justify-center lg:items-center h-full gap-3">
                    {
                        data.map((g, i) => (
                            <Parallax id={g.title} className={'lg:w-11/12'}>
                                <div key={i} className="flex flex-col gap-1 overflow-hidden">
                                    <div className="flex justify-start items-start text-xl gap-4 md:gap-8 hover:bg-white hover:bg-opacity-10 transition-all duration-500 p-3 rounded-xl cursor-pointer w-full" onClick={() => {
                                            setCurrentGet(g.desc && currentGet == i ? 0 : i)
                                        }}>
                                        <h3 className='w-full'>{g.title}</h3>
                                        {
                                            g.desc && data.length > 1 ?
                                            <i className={`bi bi-${currentGet == i ? 'eye-slash-fill' : 'eye-fill'}`} ></i> : ''
                                        }
                                    </div>
                                    {
                                        g.desc &&
                                        <p className={`px-3 text-black transition-all duration-500 tracking-wide leading-relaxed text-sm ${currentGet == i ? `h-[vh] bg-white py-3 rounded-xl` : 'h-0'}`}>{g.desc}</p>
                                    }
                                </div>
                            </Parallax>
                        ))
                    }
                </div>
                 
            </div>
        </section>
    )
}