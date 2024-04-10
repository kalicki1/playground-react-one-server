//----------------------------------------------------------------------
// PennySearch.jsx
// Author: Lucas Manning 
//----------------------------------------------------------------------

import React from 'react';

class PennySearch extends React.Component 
{
   constructor(props) 
   {
      super(props);
      this.state = {books: [], inputValue: ''};
      
      this.handleChange = this.handleChange.bind(this);
   }
   
   handleChange(event) 
   {
      this.setState({inputValue: event.target.value});     
      this.fetchResults(event.target.value);
   }

   fetchResults(querystring) 
   {
      let self = this;
      fetch('/searchresults?author=' + querystring)
         .then(function(resp) {return resp.text();})
         .then(function(data) {self.setState({books: data});})
         .catch((error) => console.log(error));                    
   }
   
   render() 
   {
      return (
         <div>
             <h1>Author Search</h1>
             {'Please enter an author name: '} 
             <input type='text' value={this.state.inputValue} 
                 onChange={this.handleChange} />
             <hr />
             <pre>{this.state.books}</pre>
         </div>
      );
   }
}

export default PennySearch;
