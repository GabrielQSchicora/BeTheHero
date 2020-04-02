import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';

function NewIncident(){
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const history = useHistory();
  const ongId = localStorage.getItem('ong_id');

  async function handleNewIncident(e){
    e.preventDefault();

    const data = {
      title,
      description,
      value
    };

    try{
      await api.post('incidents', data, {
        headers: {
          Authorization: ongId
        }
      });

      alert('Cadastro realizado com sucesso');

      history.push('/profile');
    }catch(err){
      alert('Erro ao cadastrar caso');
    }
  }

  return(
    <div className="newIncident-container">
      <div className="content">
        <section>
          <img alt="Be The Hero" src={logoImg} />
          <h1>Cadastrar novo caso</h1>
          <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

          <Link to="/profile" className="back-link">
            <FiArrowLeft color="#E02041" size={16}/>
            Voltar para a home
          </Link>
        </section>
        <form onSubmit={handleNewIncident}>
          <input 
            placeholder="Título do caso"
            value={title}
            onChange={e => setTitle(e.target.value)} />

          <textarea 
            placeholder="Descrição"
            value={description}
            onChange={e => setDescription(e.target.value)} />

          <input 
            placeholder="Valor em reais"
            value={value}
            onChange={e => setValue(e.target.value)} />


          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  )
}

export default NewIncident;