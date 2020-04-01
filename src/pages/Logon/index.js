import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';

import api from '../../services/api';

import logoImg from '../../assets/logo.png';

import '../../bootstrap.min.css';

import './styles.css';

export default function Logon(e) {
  const [email, setemail] = useState('');
  const [senha, setsenha] = useState('');
  const history = useHistory();

  async function handleLogin(e) {
   // e.preventDefault();
    try {
      const response = await api.post('login/'+email+'/'+senha, {});
      console.log(response.data);
      if(response.data.success){
        localStorage.setItem('id', response.data.id);
          history.push('/profile');
      }else{
          alert(response.data.err);
      };

      
    } catch (err) {
      alert('Falha ao realizar login. err: ',err);
    }

  }

  return (
    <div className="text-center">
    <div className="formsignin">
      <img className="mb-4" src={logoImg} alt=""  height="72"/><br/>
      <h1 className="h3 mb-3 font-weight-normal">Bem vindo</h1>
      <label htmlFor="inputEmail" className="sr-only">E-mail </label>
      <input onChange={e => setemail(e.target.value)} value={email} type="email" id="inputEmail" class="form-control" placeholder="E-mail" required autofocus/>
      <label htmlFor="inputPassword" className="sr-only">Senha</label>
      <input onChange={e => setsenha(e.target.value)} value={senha} type="password" id="inputPassword" className="form-control" placeholder="Senha" required/>
      <div className="checkbox mb-3">
        
        
      </div>
      <button onClick={e => {handleLogin(e)}} className="btn btn-lg btn-primary btn-block" type="submit">Entrar</button>
      <p class="mt-5 mb-3 text-muted"><Link to="/register">Criar conta</Link></p>
      <p class="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
    </div>
   </div>
  )
}
