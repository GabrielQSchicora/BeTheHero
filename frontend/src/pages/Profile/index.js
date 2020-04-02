import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';

function Profile(){
  const ongName = localStorage.getItem('ong_name');
  const ongId = localStorage.getItem('ong_id');
  const [incidents, setIncidents] = useState([]);
  const history = useHistory();

  useEffect(() => {
    api.get('profile', {
      headers: {
        Authorization: ongId
      }
    }).then(response => {
      setIncidents(response.data);
    });
  }, [ongId]);

  async function handleDeleteIncident(id){
    try{
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ongId
        }
      });

      setIncidents(incidents.filter(incident => incident.id !== id))
    }catch(err){
      alert('Erro ao deletar caso.');
    }
  }

  function handleLogout(){
    localStorage.clear();
    history.push('/');
  }

  return(
    <div className="profile-container">
      <header>
        <img alt="Be The Hero" src={logoImg} />
        <span>Bem vinda {ongName}</span>

        <Link className="button" to="/incidents/new">
          Cadastrar novo caso
        </Link>
        <button type="button" onClick={handleLogout}>
          <FiPower color="#e02041" size={18} />
        </button>
      </header>

      <h1>Casos cadastrados</h1>

      <ul>
      {incidents.map(incident => (
        <li key={incident.id}>
          <strong>Caso:</strong>
          <p>{incident.title}</p>

          <strong>Descrição:</strong>
          <p>{incident.description}</p>

          <strong>Valor:</strong>
          <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</p>

          <button type="button" onClick={() => handleDeleteIncident(incident.id)}>
            <FiTrash2 color="#A8A8B3" size={20} />
          </button>
        </li>
      ))}
      </ul>
    </div>
  )
}

export default Profile;