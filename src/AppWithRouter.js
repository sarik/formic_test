import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import Hook from './Hook'
import About from './About'
import React from 'react'
import ProtectedRoute from './ProtectedRoute'
import Landing from './Landing'


const AppWithRouter = () => {

    return (
        <div>
            <BrowserRouter>
                <Switch>
              {/*   <Route path='/' exact render  = {(props) =>{console.log(props,'from def') ;return <div>...Loading</div>}} />
               */}
               <ProtectedRoute path='/about' exact component={About} >
                
                 {/*  <div>abcdef</div> */}
                  {  (abc) => (<div>{abc}</div>)}
               </ProtectedRoute>
                <Route path='/' exact component={Landing} />
 

                    <Route path='/hook' component={Hook} />


                </Switch>
            </BrowserRouter>

           
            
        </div>

    )
}

export default AppWithRouter