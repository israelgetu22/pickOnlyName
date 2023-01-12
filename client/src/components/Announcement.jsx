import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #87ceeb;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>Free Shipping Only for Devmountain Grad.</Container>;
};

export default Announcement;
