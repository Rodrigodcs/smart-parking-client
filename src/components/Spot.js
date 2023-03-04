import styled from "styled-components";
import { FaCar } from 'react-icons/fa';

export default function Spot({name,ocupied,reserved}){

    return(
        <Container ocupied={ocupied} reserved={reserved}>
            <p>{name}</p>
            <div>
                {ocupied?
                    <FaCar className="icon"/>:""
                }
            </div>
        </Container>
    );
}

const Container = styled.section`
    width: 60px;
    height: 100px;
    background-color: ${props => props.ocupied?"#E84258":props.reserved?"#FEE191":"#B0D8A4"};
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px;
    p{
        font-size: 18px;
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