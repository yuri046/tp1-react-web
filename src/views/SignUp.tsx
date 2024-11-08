import React from "react";
import { useState } from "react";
import Botao from '../components/botao.jsx';

const SignUp: React.FC = ()=>{
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')


    return(
        <div>
            <h1>Cadastro</h1>
            <form action="">
            
                <div>
                    <label htmlFor="">E-mail</label>
                    <input type="text" 
                    placeholder="Insira o email"
                    value={email}
                    onChange={(e)=>{setEmail(e.target.value)}}
                    required/>
                </div>

                <div>
                    <label htmlFor="">Senha</label>
                    <input type="password"
                    placeholder='Insira uma senha'
                    value={senha}
                    onChange={(e)=>(setSenha(e.target.value))} />
                </div>

                <Botao />
            </form>
        </div>
    )
}

export default SignUp