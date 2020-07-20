import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logo from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styled';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input type="text" placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="">
          <img
            src="https://avatars2.githubusercontent.com/u/22802518?s=460&u=97c0a4c661136c11258102ff62c30b7bfe3186b1&v=4"
            alt=""
          />
          <div>
            <strong>bons-front-enders</strong>
            <p>Forked from felipefialho/bons-front-enders</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="">
          <img
            src="https://avatars2.githubusercontent.com/u/22802518?s=460&u=97c0a4c661136c11258102ff62c30b7bfe3186b1&v=4"
            alt=""
          />
          <div>
            <strong>bons-front-enders</strong>
            <p>Forked from felipefialho/bons-front-enders</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="">
          <img
            src="https://avatars2.githubusercontent.com/u/22802518?s=460&u=97c0a4c661136c11258102ff62c30b7bfe3186b1&v=4"
            alt=""
          />
          <div>
            <strong>bons-front-enders</strong>
            <p>Forked from felipefialho/bons-front-enders</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
