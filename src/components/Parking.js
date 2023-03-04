import styled from "styled-components";
import ParkingSpots from "./ParkingSpots";
import UserInfo from "./UserInfo";

export default function Parking(){

    return(
        <Container>
            <UserInfo/>
            <ParkingSpots/>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    padding-top: 150px;
    background-color: #767679;
    display: flex;
    padding-left: 20px;
    padding-right: 20px;
    gap:10px;
    @media (max-width: 600px) {
        flex-direction: column;
    }
`;