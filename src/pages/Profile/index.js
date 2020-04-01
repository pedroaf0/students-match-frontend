import React, { useState, useEffect } from 'react';
import Toolbox from '../toolbox'
import {  FaPencilAlt,FaCopy } from 'react-icons/fa'


import api from '../../services/api';

import './styles.css';
import avatar from '../../assets/avatar-1.png'

export default function Profile() {
  const [profile, setprofile] = useState([]);
  

  useEffect(() => {
    
    if(localStorage.getItem("user-data") === null){
      
    api.get('profile/'+localStorage.getItem('id')).then(response => {
      localStorage.setItem("user-data", JSON.stringify(response.data))
      setprofile(response.data);
    }).catch(() => {
      console.warn('dev.warn\n API ofline, acesse a rota '+document.location.href.substr(0,document.location.href.length - document.location.hash.length+1)+'/dev para definir artificialmente as variaveis user-data e match-data ');
    })
  }else{
    
      setprofile(JSON.parse(localStorage.getItem("user-data")));
  }
  }, []);





  return (
    <>
    <header>
        <h1>Profile</h1> <div id="edit"><FaPencilAlt/></div>
      </header><br/><br/>
      <div className="conteiner">
      <div >
        {profile.map(profile => (
          <div className="profile" key={profile.id}>
          <img src={avatar} alt="avatar"></img><br/>
        <b>{profile.name}</b><br/>
          {profile.city} - {profile.school}<br/>
          <div>{profile.bio}</div>
        <div>{profile.cell} <FaCopy/></div>
          {profile.area_fav} | {profile.area_mal}<br/>
           
          </div>

        ))}
<br/><br/>
      </div></div>

      <footer>
      <Toolbox/>
      </footer>
    
    </>
  );
}
