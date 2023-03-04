import styled from "styled-components";
import Spot from "./Spot";

export default function ParkingSpots(){

    function reloadSpots(){
        console.log("carregando")
    }
    return(
        <Container>
            <p>Vagas de estacionamento</p>
            <div>
                <Spot name="1" ocupied={true} reserved={false}/>
                <Spot name="2" ocupied={false} reserved={false}/>
                <Spot name="3" ocupied={false} reserved={true}/>
                <Spot name="4" ocupied={true} reserved={false}/>
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
        background-color: #0CB669;
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