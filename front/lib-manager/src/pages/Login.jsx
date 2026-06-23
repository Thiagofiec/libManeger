import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom"

export default function Login() {
    const[email,setEmail] = useState("")
    const[senha,setSenha] = useState("")
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault()

    const response = await api.post("/usuarios/login", {
      email,
      senha,
    });

    localStorage.setItem("token", response.data.token)
    navigate("/", { replace: true });

    } 

    return (
        <form onSubmit={handleLogin}>
            <h1>Login</h1>
            <label htmlFor="email">EMAIL</label>
            <input  name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="senha">senha</label>
            <input  name="senha" type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
            <button type="submit">Logar</button>
        </form>
    
    )

}
