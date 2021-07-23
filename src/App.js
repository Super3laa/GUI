import React,{useEffect,useState} from 'react';
import Home from './components/Home/Home.js';
import Settings from './components/Settings/Index';
import Login from './components/Login/Login';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router , Route,Switch} from "react-router-dom"

const routesAuth = [
    {path:"/",component:Home},
    {path:"/settings",component:Settings}
]
const routesUnAuthenticated = [
    {path:"/",component:Login},
]
export default function App(){
    const [routes , setRoutes]=useState(routesUnAuthenticated)
    useEffect(()=>{
        async function get(){
            await fetch("http://localhost:3000/data.json", {
                headers : { 
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
                 }
          
              }).then(res=>{
                return res.json()
            }).then(data=>{
                setRoutes(data.is_user_auth ?routesAuth:routesUnAuthenticated );
            })
        }
        get();
    },[])
    return(
        <Router>
            <Switch>
                {
                    routes.map((route,i)=>{
                        return <Route exact key={i} path={route.path} component={route.component}/>
                    })
                }
            </Switch>
        </Router>
    )
}