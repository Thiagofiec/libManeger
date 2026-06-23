import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom"

export default function Cadastro() {
    const[nome,setNome] = useState("")
    const[email,setEmail] = useState("")
    const[telefone,setTelefone] = useState("")
    const[cpf,setCpf] = useState("")
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
            <label htmlFor="nome">Nome</label>
            <input  name="nome" type="nome" value={nome} onChange={(e) => setNome(e.target.value)} />
            <label htmlFor="email">EMAIL</label>
            <input  name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="telefone">Telefone</label>
            <input  name="telefone" type="number" value={telefone} onChange={(e) => setTelefone(e.target.value)} max={14} />
            <label htmlFor="senha">senha</label>
            <label htmlFor="cpf">CPF</label>
            <input  name="cpf" type="cpf" value={cpf} onChange={(e) => setCpf(e.target.value)} max={11}/>
            <input  name="senha" type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
            <button type="submit">Logar</button>
        </form>
    
    )

}