import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repository } from './style';
import logo from '../assets/logo.svg';



const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="Github Explore"/>
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório "/>
        <button type="submit">Pesquisar</button>
      </Form>
      <Repository>
        <a href="teste">
          <img src="https://avatars.githubusercontent.com/u/15702902?s=460&u=793e602a6df4065af5b99a48074e2f6fdcb0fec4&v=4" alt="User"/>
        
          <div>
            <strong>mult-bank</strong>
            <p>teste teste teste teste teste teste </p>
          </div>

          <FiChevronRight  size={20}/>
        </a>
      </Repository>
      <Repository>
        <a href="teste">
          <img src="https://avatars.githubusercontent.com/u/15702902?s=460&u=793e602a6df4065af5b99a48074e2f6fdcb0fec4&v=4" alt="User"/>
        
          <div>
            <strong>mult-bank</strong>
            <p>teste teste teste teste teste teste </p>
          </div>

          <FiChevronRight  size={20}/>
        </a>
      </Repository>
      <Repository>
        <a href="teste">
          <img src="https://avatars.githubusercontent.com/u/15702902?s=460&u=793e602a6df4065af5b99a48074e2f6fdcb0fec4&v=4" alt="User"/>
        
          <div>
            <strong>mult-bank</strong>
            <p>teste teste teste teste teste teste </p>
          </div>

          <FiChevronRight  size={20}/>
        </a>
      </Repository>
    </>
  )
}

export default Dashboard;