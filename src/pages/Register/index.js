import React, { useState } from 'react';
import {  useHistory } from 'react-router-dom';
//import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api'
import imgApi from '../../services/imgApi'

import '../../bootstrap.min.css';
import select from '../../assets/cam.png';
import './styles.css';

export default function Register() {
  if(document.location.href !== "?#/register") document.location.href = "?#/register";
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cell, setcell] = useState('');
  const [city, setCity] = useState('');
  const [area_fav, setarea_fav] = useState('Exatas');
  const [area_mal, setarea_mal] = useState('Exatas');
  const [password, setpassword] = useState('');
  const [bio, setbio] = useState('');
  const [school, setschool] = useState('');
  const [img, setimg] = useState('');


  const history = useHistory();

  async function submit(e) {
    const data = {
      name,
      email,
      cell,
      city,
      area_fav,
      area_mal,
      password,
      bio,
      school
    };

    try {
      const response = await api.post('user', data);
      localStorage.setItem('id', response.data.id);

      const formData = new FormData();
      formData.append('fileToUpload',img)
      const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }


      await imgApi.post('upload.php?id='+response.data.id, formData, config);
      history.push('/home');
    } catch (err) {
      alert('Erro ao realizar cadastro.');
    }
  }
  function handle(t){
    document.getElementById('img').src = window.URL.createObjectURL(t.target.files[0])
  }

  return (
    <div className="formsignin">
      <center>
        <label htmlFor="file"><img alt="" src={select} id="img"></img></label>
        <input accept="image/*" id="file" name="fileToUpload" type="file" onChange={e => {handle(e); setimg(e.target.files[0])}}/>
      </center>
      
    <form>

    <div className="form-group">
          <input onChange={e => setName(e.target.value)} type="text" className="form-control" id="name" placeholder="Nome" required/>
    </div>
    <div className="form-group">
          <input onChange={e => setEmail(e.target.value)} type="text" className="form-control" id="email" value={email} placeholder="email" required/>
    </div>
    <div className="form-group">
          <input onChange={e => setschool(e.target.value)} type="text" className="form-control" id="school"  placeholder="Escola" required/>
    </div>
    <div className="form-group">
          <input onChange={e => setCity(e.target.value)} type="text" className="form-control" id="city"  placeholder="Cidade" required/>
    </div>
        <div className="form-group">
            <label htmlFor="area_fav">Area com mais afinidade</label>
            <select onChange={e => setarea_fav(e.target.value)} className="form-control" id="area_fav" required>
              <option>Exatas</option>
              <option>Humanas</option>
              <option>Linguagem</option>
              <option>Biologicas</option>
            </select>
          </div>
        <div className="form-group">
            <label htmlFor="area_mal">Area com menos afinidade</label>
            <select onChange={e => setarea_mal(e.target.value)} className="form-control" id="area_mal" required>
              <option>Exatas</option>
              <option>Humanas</option>
              <option>Linguagem</option>
              <option>Biologicas</option>
            </select>
          </div>
          <div className="form-group">
          <input onChange={e => setcell(e.target.value)} type="number" className="form-control" id="cell"  placeholder="whatsapp/telegram" required/>
          </div>
          <div className="form-group">
          <textarea onChange={e => setbio(e.target.value)} className="form-control" id="bio"  placeholder="Biografia" required/>
           </div>
           <div className="form-group">
          <input onChange={e => setpassword(e.target.value)} type="password" className="form-control" id="password"  placeholder="Senha" required/>
    </div>
           <p id="err"></p>
           <button onClick={() => submit()} className="btn btn-lg btn-primary btn-block" >Criar</button>
           </form>
</div>
  )
}