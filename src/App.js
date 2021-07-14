import React,{useEffect,useState} from 'react';
export default function App(){
    const [data , setData]=useState(null)
    useEffect(()=>{
        async function get(){
            await fetch("public/data.json").then(res=>{
                return res.json()
            }).then(data=>{
                setData(data)
                console.log(data);
            })
        }
        get();
    },[])
    return(
        <div>
            {
                data ? data.heartRate:null
            }
        </div>
    )
}