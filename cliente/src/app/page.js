'use client'
import { useState } from "react";
import handlerAcessUser from "./functions/handlerAcess"
import { useRouter } from "next/navigation";
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './page.css'

export default function Login() {
  const [user, setUser] = useState({
    nome: '',
    senha: '',
  });
  const { push, refresh } = useRouter();

  const handlerLogin = async (e) => {
    e.preventDefault();
    try {
      const userAuth = await handlerAcessUser(user);
      if(userAuth.token === undefined){
        toast.error("erro no e-mail ou senha!");
      }
      push('/pages/dashboard');
    } catch {
      toast.error("erro na aplicação");
    }
  }
  return (
    <div>
      <h1>Login</h1>
      <div className="container">
      <div className='card'>
      <form onSubmit={handlerLogin}>
        <input
          placeholder='E-mail'
          type="text"
          name="nome"
          onChange={(e) => { setUser({ ...user, nome: e.target.value }) }}>
        </input><br/>
        <input
          placeholder='Senha'
          type='password'
          name="senha"
          onChange={(e) => { setUser({ ...user, senha: e.target.value }) }}>
        </input><br/>
        <button>Login</button>
      </form>
      </div></div>
      <ToastContainer/>
    </div>
  )
}
