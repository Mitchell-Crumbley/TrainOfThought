import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import CustomizedCloud from '../../Components/WordCloud';
import Home from '../../Views/Home';


// const PrivateRoute = ({ component: Component, user, ...rest }) => {
//   const routeChecker = (taco) => (user
//     ? (<Component {...taco} user={user}/>)
//     : (<Navigate to={{ pathname: '/', state: { from: taco.location } }} />));

//   return <Route {...rest} render={(props) => routeChecker(props)}/>;
// };

export default function MyRoutes({ user }) {
  return (
    <div>
      <Routes>
      <Route exact path='/' user={user} element={<Home firebaseUser={user}/>} />
      <Route exact path='/myrequests' user={user} element={CustomizedCloud}/>
      </Routes>
    </div>
  )
}
