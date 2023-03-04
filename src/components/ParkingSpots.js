import styled from "styled-components";
import Spot from "./Spot";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import UserContext from "../contexts/UserContext";

export default function ParkingSpots(){
    const [spots,setSpots] = useState([])
    const {userContextInfo} = useContext(UserContext);
    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_API_URL}/parkingSpots`).then((res)=>{
            console.log(res.data)
            setSpots(res.data)
        }).catch((err) => {
            console.log(err)
        });
    },[])

    function reloadSpots(){
        axios.get(`${process.env.REACT_APP_API_URL}/parkingSpots`).then((res)=>{
            console.log(res.data)
            setSpots(res.data)
        }).catch((err) => {
            console.log(err)
        });
    }

    function handleSpotClick(spotId){
        const config = {
            headers:{
                Authorization:`Bearer ${userContextInfo.token}`
        }}
        axios.post(`${process.env.REACT_APP_API_URL}/user/reservation/${spotId}`, {}, config).then((res)=>{
            console.log(res.data)
            reloadSpots()
        }).catch((err) => {
            console.log(err)
        }); 
        
    }
    
    return(
        <Container>
            <p>Vagas de estacionamento</p>
            <div>
                {spots.map((spot)=><Spot key={spot.id} id={spot.id} handleSpotClick={handleSpotClick} number={spot.number} ocupied={spot.ocupied} reserved={spot.reserved}/>)}
            </div>
            <div className="captions">
                <div>
                    <div className="caption avaliable-caption"></div><span>Disponível</span>
                </div>
                <div>
                    <div className="caption ocupied-caption"></div><span>Ocupado</span> 
                </div>
                <div>
                    <div className="caption reserved-caption"></div><span>Reservado</span>  
                </div>
            </div>
            <button className="button" onClick={()=>reloadSpots()}>Buscar vagas de estacionamento</button>
        </Container>
    );
}

const Container = styled.section`
    width: fit-content;
    height: fit-content;
    background-color: #b7b7bc;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 10px;
    border-radius: 10px;
    p{
        font-size: 25px;
    }
    div{
        display: flex;
        gap: 20px;
    }
    .button{
        margin-top: 10px;
        width:150px;
        height: 40px;
        border-radius: 5px;
        background-color: #1BCF6C;
        cursor: pointer;
    }
    .captions{
        span{
            margin-left: -15px;
        }
    }
    .caption{
        width: 15px;
        height: 15px;
        border-radius: 5px;
    }
    .avaliable-caption{
        background-color: #B0D8A4;
    }
    .ocupied-caption{
        background-color: #E84258;
    }
    .reserved-caption{
        background-color: #FEE191;
    }
`;