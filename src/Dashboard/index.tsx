import React, { FormEvent, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Api from '../Services/api';
import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repository, Error } from './style';
import logo from '../assets/logo.svg';
import { Repo } from '../Models/Repo';

const Dashboard: React.FC = () => {
  
  const [newRepo, setNewRepo] = useState('');
  const [ inputError, setInputError] = useState('');

  const [repositores, setRepositores] = useState<Repo[]>(() => {
    const storegeRepository = localStorage.getItem('@GitHubExplore:repository');

    if(storegeRepository) {
      return JSON.parse(storegeRepository)
    } else {
      return [];
    }
  });

 

  useEffect(() => {
    localStorage.setItem('@GitHubExplore:repository', JSON.stringify(repositores));
  }, [repositores]);

 async function handleAddRespository(event: FormEvent<HTMLFormElement>): Promise<void> {
   event.preventDefault();

   if(!newRepo) {
     setInputError('Digite o outor/nome do repositório')
     return;
   }
   try {
      const response = await Api.get<Repo>(`repos/${newRepo}`);
      const res = response.data;
      setRepositores([...repositores, res]);
      setNewRepo('');
      setInputError('');
      
   } catch (error) {
    setInputError('Erro na busca por esse repositório .')
   }
   
 }

  return (
    <>
      <img src={logo} alt="Github Explore"/>
      <Title>Explore repositórios no Github</Title>

      <Form hasError={!!inputError} onSubmit={handleAddRespository}>
        <input 
        value={newRepo}
        onChange={(e) => setNewRepo(e.target.value)}
        placeholder="Digite o nome do repositório "/>
        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}
      <Repository>

        {repositores.map( repositore => (
           <Link to={`/repository/${repositore.full_name}`} key={repositore.full_name}>
           <img src={repositore.owner.avatar_url} alt={repositore.owner.login}/>
         
           <div>
             <strong>{repositore.full_name}</strong>
             <p>{repositore.description}</p>
           </div>
 
           <FiChevronRight  size={20}/>
         </Link>
        ))}
       
      </Repository>
    </>
  )
}

export default Dashboard;