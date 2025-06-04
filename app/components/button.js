"use client"

const Boton = ({children, className="", ...args}) => {
    return (
        <button type="button" className={`py-2.5 px-5 me-2 mb-2 text-sm text-gray-700 font-black focus:outline-none border-2 border-yellow-600 hover:bg-yellow-600 hover:text-gray-900 my-5 ${className}`} {...args}>{children}</button>
    )
}

export default Boton