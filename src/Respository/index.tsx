import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { Header, RepositoryInfo, Issues } from './style';
import logo from '../assets/logo.svg';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Api from '../Services/api';

interface Repo {
  full_name: string,
  description: string,
  stargazers_count: number,
  forks_count: number,
  open_issues_count: number,
  owner: {
    login: string,
    avatar_url: string
  }
}
interface Issues {
  id: number,
  title: string,
  html_url: string,
  user: {
    login: string
  }
}
interface RepositoryParams {
  id: string;
}

const Repository: React.FC = () => {

  const { params } = useRouteMatch<RepositoryParams>();
  const [repository, setRepository] = useState<Repo | null>(null);
  const [issues, setIssues] = useState<Issues[]>([]);

  useEffect(() => {
    Api.get(`repos/${params.id}`).then((response) => {
     setRepository(response.data)
    });

    Api.get(`repos/${params.id}/issues`).then((response) => {
      setIssues(response.data);
    });
  }, [params.id]);

  return (
    <>
      <Header>
        <img src={logo} alt="logo" />
        <Link to="/">
          <FiChevronLeft size={20} />
          Voltar
        </Link>
      </Header>

      { repository && (
        <RepositoryInfo>
        <header>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <div>
            <strong>{repository.full_name}</strong>
            <p>{repository.description}</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>{repository.stargazers_count}</strong>
            <span>Starts</span>
          </li>
          <li>
            <strong>{repository.forks_count}</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>{repository.open_issues_count}</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>
      
      )}
      <Issues>
        {
          issues.map( issue => (
            <Link to={issue.html_url} key={issue.id}>
            <div>
              <strong>{issue.title}</strong>
              <p> {issue.user.login} </p>
            </div>
  
            <FiChevronRight size={20} />
          </Link>
          ))
        }
      </Issues>
    </>
  )
}

export default Repository;