import React, { useState, useEffect } from 'react';
import Toolbox from '../toolbox'
import { FaHeart, FaHeartBroken, FaEllipsisV  } from 'react-icons/fa'
import apiSrc from '../../services/ApiSource';


import api from '../../services/api';

import './styles.css';


export default function Profile() {
  const [matchs, setmatchs] = useState([]);
  





    useEffect(() => {
      if(localStorage.getItem("match-data") === null){
     
        api.get('match/'+localStorage.getItem('id')).then((response) => {
        localStorage.setItem("match-data", JSON.stringify(response.data))
        setmatchs(response.data);
      }).catch(() => {
        console.warn('dev.warn\n API ofline, acesse a rota '+document.location.href.substr(0,document.location.href.length - document.location.hash.length+1)+'/dev para definir artificialmente as variaveis user-data e match-data ');
      });

    }else{

      setmatchs(JSON.parse(localStorage.getItem("match-data")));
    }
    }, []);

    






  return (
    <>
    <header>
        <h1>Matchs</h1><div id="dots"><FaEllipsisV/></div>
      </header>
      <br/><br/>
      <div className="container">
      <div >
        {matchs.map(match => (
          <div className="MatchContainer" key={match.id}><br/>
          
           <div className="inlineBlock"> <img id="home" src={apiSrc.imgApi+'img/'+match.id} alt="avatar"></img></div>
           <div className="inlineBlock text">
           <span className="name"> <b>{match.name} - {match.por}</b></span><br/>
            {match.school} - {match.city}<br/>
            <FaHeart size={12}/>  {match.area_fav}  |  <FaHeartBroken size={12}/>   {match.area_mal}
            </div>

           
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
