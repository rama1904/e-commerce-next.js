"use client"
import {useRouter} from ""
import { useEffect } from "react"
import Boton from "./componets/button"


export default function error ({error, reset})

useEffect(() => {
    console.error(error)
}) [error]

return (
    <div className="container m-auto mt-6">
        <h2 className="text-xl">Algo salio mal!</h2>
        <hr className="my-6"/>
        <Boton onClick={reset}>Intentar nuevamente</Boton>
    </div>
)