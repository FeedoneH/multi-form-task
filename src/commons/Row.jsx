import React from "react";
import styled from "styled-components";
export const Row = ({ children, extended }) => {
  return (
    <>
      {extended ? (
        <ExtendedContainer>{children}</ExtendedContainer>
      ) : (
        <Container >{children}</Container>
      )}
    </>
  );
};

const Container = styled.div`
 
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const ExtendedContainer = styled(Container)`
  position: absolute;
  width: 100%;
  top: 640px;
`;
