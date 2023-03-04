import { useState, useContext, useEffect } from "react";
import axios from "axios";
import UserContext from "../contexts/UserContext";
import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";


export default function UserInfo(){
    const [userInfo, setUserInfo]= useState({})
    const {userToken} = useContext(UserContext);

    useEffect(()=>{
        const config = {
            headers:{
                Authorization:`Bearer ${userToken.token}`
        }}
        axios.get(`${process.env.REACT_APP_API_URL}/userInfo`,config).then((res)=>{
            setUserInfo(res.data)
        }).catch((err) => {
            console.log(err)
        }); 
    },[])

    function reloadUserInfo(){
        const config = {
            headers:{
                Authorization:`Bearer ${userToken.token}`
        }}
        axios.get(`${process.env.REACT_APP_API_URL}/userInfo`,config).then((res)=>{
            setUserInfo(res.data)
        }).catch((err) => {
            console.log(err)
        }); 
    }
    if(!userInfo.name){
        return (
            <Loading>
                <ThreeDots
                    height="40" 
                    width="40" 
                    radius="9"
                    color="#FFFFFF" 
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                />
            </Loading>
        )
    }
    return(
        <Container>
            <div>
                <p><span>Nome: </span>{userInfo.name}</p>
                <p><span>Email: </span>{userInfo.email}</p>
                <p><span>Modelo do veículo: </span>{userInfo.car}</p>
                <p><span>Placa do veículo: </span>{userInfo.licensePlate}</p>
                <p><span>Créditos: </span>R$ {userInfo.credits.toFixed(2)}</p>
                <p><span>ID do cartão: </span>{userInfo.tagId || <span className="error">Registre um cartão</span>}</p>
                <button className="button" onClick={()=>reloadUserInfo()}>Buscar Informações</button>
            </div>
        </Container>
    );
}

const Container = styled.section`
    width: fit-content;
    height: fit-content;
    background-color: #8CEABC;
    display: flex;
    align-items: center;
    border-radius: 10px;
    padding:10px;
    div{
        display: flex;
        flex-direction: column;
        gap:8px;
        p{
            color:#767679;
            font-size: 18px;
            span{
                color: #2E5741;
                font-size: 15px;
                margin-right: 5px;
            }
        }
    }
    .error{
        color:red;
        font-size: 18px;
    }
    @media (max-width: 600px) {
        width: 100%;
    }
    .button{
        margin-top: 10px;
        width:150px;
        height: 30px;
        border-radius: 5px;
        background-color: #0CB669;
    }
`;

const Loading = styled.section`
    width: fit-content;
    height: fit-content;
    background-color: #8CEABC;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    padding:10px;
`