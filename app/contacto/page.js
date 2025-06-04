"use client"

import { useState } from "react"
import Boton from "../components/button"

const Contacto = () => {
    const [NOMBRE, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [consulta, setConsulta] = useState("");
    const [dataForm, setDataForm] = useState("");

    const vaciarCampos = () => {
        setNombre ("");
        setEmail ("");
        setConsulta ("");
        setDataForm ("");
    }

    const handleSubmit = async (e) => {
        e.prventDefault();
        console.log(NOMBRE, email, consulta)
    }

    
}