//----------------------------------------------------------------------
// PennyHeader.jsx
// Author: Lucas Manning
//----------------------------------------------------------------------

import React from 'react';

class PennyHeader extends React.Component 
{
   constructor(props) 
   {
      super(props);
      this.state = 
         {
            datetime: new Date(),
            username: 'Unknown',
            redirect: 'Unknown'
         };
   }
   
   componentDidMount() 
   {
      let self = this;
      this.timerId = setInterval(function() {self.tick()}, 1000);
      
      //async function fetchAuthData() 
      //{
      //   const data = 
      //      await fetch('/authenticate').then(res => res.json());
      //   this.state.username = data.username.trim();
      //   this.state.redirect = data.redirect;
      //}
      //fetchAuthData();
   }
   
   componentWillUnmount() 
   {
      clearInterval(this.timerId);
   }
   
   tick() 
   {
      this.setState({datetime: new Date()})
   }
   
   greeting() 
   {
      let hours = this.state.datetime.getHours();
      let ampm = 'morning';
      if (hours >= 12)
         ampm = 'afternoon';         
      return ampm;
   }
   
   render() 
   {
      return (
         <div>
            <hr />
            {'Good ' + this.greeting() + ' ' + this.props.username +
            ' and welcome to Penny.com'}
            <hr />
         </div>
      );
   }
}

export default PennyHeader;
