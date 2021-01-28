import React, { FormEvent, useState } from 'react';
import Api from '../Services/api';
import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repository } from './style';
import logo from '../assets/logo.svg';
import { Repo } from '../Models/Repo';

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [respositores, setRespositores] = useState<Repo[]>([]);

 async function handleAddRespository(event: FormEvent<HTMLFormElement>): Promise<void> {
   event.preventDefault();
   const response = await Api.get<Repo>(`repos/${newRepo}`);

   const res = response.data;
   setRespositores([...respositores, res]);
   setNewRepo('');
   console.log(res);
 }

  return (
    <>
      <img src={logo} alt="Github Explore"/>
      <Title>Explore repositórios no Github</Title>

      <Form onSubmit={handleAddRespository}>
        <input 
        value={newRepo}
        onChange={(e) => setNewRepo(e.target.value)}
        placeholder="Digite o nome do repositório "/>
        <button type="submit">Pesquisar</button>
      </Form>
      <Repository>

        {respositores.map( respositore => (
           <a href="teste" key={respositore.full_name}>
           <img src={respositore.owner.avatar_url} alt={respositore.owner.login}/>
         
           <div>
             <strong>{respositore.full_name}</strong>
             <p>{respositore.description}</p>
           </div>
 
           <FiChevronRight  size={20}/>
         </a>
        ))}
       
      </Repository>
    </>
  )
}

export default Dashboard;