import styled from "styled-components";
import { FaCar } from 'react-icons/fa';

export default function Spot({id,userId,number,ocupied,reserved,reservedUserId,handleSpotClick}){

    return(
        <>
            {ocupied?
                <Container color={"#E84258"}><p>{number}</p><div><FaCar className="icon"/></div></Container>:
                reserved?
                    reservedUserId==userId?
                        <Container color={"#64A1F4"}><p>{number}</p><div></div></Container>:
                        <Container color={"#FEE191"}><p>{number}</p><div></div></Container>
                    :
                    <Container onClick={()=>handleSpotClick(id)} color={"#B0D8A4"}><p>{number}</p><div></div></Container>
            }
            
        </>
    );
}

const Container = styled.section`
    width: 60px;
    height: 100px;
    background-color: ${props => props.color};
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px;
    cursor: pointer;
    button{
        width:100%;
        height: 100%;
        border-radius: 5px;
        background-color: #0CB669;
        cursor: pointer;
    }
    p{
        font-size: 18px;
        background-color: #767679;
        color: white;
        width: 30px;
        text-align: center;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        margin-top: -5px;
    }
    div{
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 50px;
        color: #767679;
    }
`;