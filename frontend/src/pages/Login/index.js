import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg'
import heroesImg from '../../assets/heroes.png'

function Login(){
  const [id, setId] = useState('');
  const history = useHistory();

  async function handleLogin(e){
    e.preventDefault();

    try{
      const response = await api.post('login', { id });

      localStorage.setItem('ong_id', id);
      localStorage.setItem('ong_name', response.data.name);

      history.push('/profile');
    }catch(err){
      alert('Falha no login, tente novamente.');
    }
  }

  return(
    <div className="login-container">
      <section className="form">
        <img alt="Be The Hero" src={logoImg} />

        <form onSubmit={handleLogin}>
          <h1>Faça seu login</h1>
          <input 
            placeholder="Sua ID"
            value={id}
            onChange={e => setId(e.target.value)} />

          <button type="submit" className="button">Entrar</button>

          <Link to="/register" className="back-link">
            <FiLogIn color="#E02041" size={16}/>
            Não tenho cadastro
          </Link>
        </form>
      </section>

      <img alt="Heroes" src={heroesImg} />
    </div>
  );
}

export default Login;