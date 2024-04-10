//----------------------------------------------------------------------
// main.js
// Author: Lucas Manning
//----------------------------------------------------------------------

import React from 'react';
import ReactDOM from 'react-dom';
import PennyHeader from './PennyHeader.jsx';
import PennySearch from './PennySearch.jsx';
import PennyFooter from './PennyFooter.jsx';

function checkAuthentication(data)
{
   // let response = JSON.parse(data);     
      
   // if (response.username === '')
   //    window.location.replace(response.redirect);
   // else
   // {
      ReactDOM.render
      (
         <div>
           <PennyHeader username={'TEST'} />
           {/* <PennyHeader username={response.username} /> */}
           <PennySearch />
           <PennyFooter />
         </div>,
         document.getElementById('root')
      );
   // }
}

// fetch('/authenticate')
//    .then((resp) => {return resp.text();})
//    .then((data) => {checkAuthentication(data);})
//    .catch((error) => {return console.log(error);}); 
checkAuthentication()
