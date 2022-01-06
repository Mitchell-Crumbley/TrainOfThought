import styled from "styled-components";

export const StyledH1 = styled.h1`
font-family: ${props => props.fontFamily};
font-size: 3em;
margin-top: 40px;
`;

export const StyledH2 = styled.h1`
font-family: ${props => props.fontFamily};
font-size: 1.5em;
margin-top: 20px
`;

export const BasicBtn = styled.button`
width: 7rem;
height: 2rem;
border-radius: 5px;
background-color: ${props => props.color};
border: none;
color: white;
cursor: pointer;
margin: 10px;
`;

export const LongBtn = styled.button`
width: 10rem;
height: 2rem;
border-radius: 5px;
background-color: ${props => props.color};
border: none;
color: white;
cursor: pointer;
margin: 10px;
`;

export const GradBtn = styled.button`
width: 7rem;
height: 3rem;
border-radius: 10px;
background-color: #ef7255;
border: none;
color: white;
cursor: pointer;
margin: 10px;
`;

export const FlexyDiv = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
margin: 20px;
justify-content: center;
`;

export const CardDiv = styled.div`
width: 25rem;
height: 15rem;
margin: 20px;
`;

export const OuterDiv = styled.div`
border: 1px solid white;
border-radius: 25px;
margin-top: 40px;
width: 30rem;
background: rgb(24,119,131);
background: linear-gradient(83deg, rgba(24,119,131,1) 0%, rgba(169,188,188,1) 50%, rgba(239,114,85,1) 100%);
`;

export const InnerDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: 100%;
`;
