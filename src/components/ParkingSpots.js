import styled from "styled-components";

export default function ParkingSpots(){

    return(
        <Container>
            <p>parkingspots</p>
        </Container>
    );
}

const Container = styled.section`
    width: 300px;
    height: 300px;
    background-color: red;
    display: flex;
`;