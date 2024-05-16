export const Button = ({text, type, }) => {
    return(
        <button className={`min-w-[150px] p-3 px-8 w-fit text-sm rounded-xl 
        ${type == 'primary' ? 'bg-white text-orange-500 px-5 border border-orange-500' : 
        type= 'transparent' ? 'bg-white text-orange-500 px-5' : 
        'bg-white text-orange-900' }`} onClick={() => {
            document.querySelector('#Contact').scrollIntoView({
                behavior: 'smooth'
            })
            setShowNav(setShowNav && false)
        }}>
            {text.toUpperCase()}
        </button>
    )
}