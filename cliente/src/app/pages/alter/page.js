'use client'
import './page.css'
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Menu from "@/app/componentes/Menu";

export default function Alter() {

    const AlterUser = (e) => {
        e.preventDefault();
          toast.success("Usuario alterado com sucesso");
      }

    return (
        <div>
            <Menu/>
      <h1>Alter</h1>
      <div className='container'>
      <div className='card'>
      <form onSubmit={AlterUser}>
      <input placeholder='Name' type='nome'></input><br/>
        <input placeholder='E-mail' type='email'></input><br/>
        <input placeholder='Password' type='password'></input><br/>
        <button>Alter</button>
      </form>
      </div></div>
      <ToastContainer/>
    </div>
    );
};
