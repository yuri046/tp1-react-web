import React from "react";

const Signin: React.FC = () =>{
    return(
        <div>
            <h1>Login</h1>
            <form action="">
            
            <div>
                <label htmlFor="">E-mail</label>
                <input type="text" 
                placeholder="Insira o email"
                required/>
            </div>

            <div>
                <label htmlFor="">Senha</label>
                <input type="password"
                placeholder='Insira uma senha'
                 />
            </div>
        </form>
        </div>
    )
}

export default Signin