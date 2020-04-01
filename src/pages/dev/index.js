import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Profile() {
    useEffect(() => {
        localStorage.setItem('user-data', '[{"id":"300f6d65","name":"Pedro Afonso","email":"pedroaf1233@gmail.com","cell":"999671421","school":"IFRS campus Sertão","city":"Ibiraiaras","area_fav":"Exatas","area_mal":"Biologicas","bio":"Vivendo e aprendendo","password":"33551047p"}]')
        localStorage.setItem('match-data', '[{"area_fav":"Biologicas","area_mal":"Exatas","city":"Ibiraiaras","id":"5211320b","name":"Rafa","school":"IFRS campus Sertão","por":"100%"},{"area_fav":"Biologicas","area_mal":"Exatas","city":"Passo Fundo","id":"9268747a","name":"Lucas","school":"IFRS","por":"50%"},{"area_fav":"Biologicas","area_mal":"Exatas","city":"Passo Fundo","id":"p5980565","name":"Davi","school":"IFRS","por":"50%"}]')
    }, []);

    
  return (
    <>
    <h1>dev mode</h1><br/>
    pages:<br/>
 <Link to='/logon'>logon</Link><br/>
 <Link to='/register'>register</Link><br/>
 <Link to='/home'>home</Link><br/>
 <Link to='/profile'>profile</Link><br/>
 <Link to='/messagens'>messagens</Link><br/><br/>
 <p>variaveis user-data e match-data adicionadas ao localStorage</p>
    </>
  );
}
