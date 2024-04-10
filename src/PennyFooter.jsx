//----------------------------------------------------------------------
// PennyFooter.jsx
// Author: Lucas Manning 
//----------------------------------------------------------------------

import React from 'react';

class PennyFooter extends React.Component 
{
   constructor(props) 
   {
      super(props);
      this.state = {datetime: new Date()};
   }
   
   componentDidMount() 
   {
      let self = this;
      this.timerId = setInterval(function() {self.tick()}, 1000);
   }
   
   componentWillUnmount() 
   {
      clearInterval(this.timerId);
   }
   
   tick() 
   {
      this.setState({datetime: new Date()});
   }
   
   render() 
   {
      return (
         <div>
            <hr />
            {'Date and time: ' + this.state.datetime.toLocaleString()}
            <br />
            {'Created by '}
            <a href="http://www.github.com/manninglucas">
            Lucas Manning</a>
            {' and '}
            <a href="https://www.cs.princeton.edu/~rdondero">
            Bob Dondero</a> 
         </div>
      );
   }
}

export default PennyFooter;
