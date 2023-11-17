import './page.css'
import { getUsers } from "@/app/functions/handlerAcessAPI";
import { Suspense } from "react";
import ListUsers from "@/app/componentes/ListUsers";
import Menu from "@/app/componentes/Menu";

export default async function Dashboard() {
   const users = await getUsers();
    return (
        <div>
            <Menu/>
            <h1> All Users </h1>
            <div className='container'>
            <Suspense fallback={<p>Carregando...</p>}>
            <div className='card'>
                 <ListUsers users={users}/>
                 </div>
            </Suspense>
            </div>
        </div>
    );
};