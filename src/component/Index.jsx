import { useState } from "react";
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { FaPlus, FaTrash } from 'react-icons/fa';



const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

const Main = styled.main`
  width: 100%;
  height:105vh;
  align-items:center;
  display: flex;
  justify-content: center;
  flex-direction:column;
  background-color:#0D0D0D;
`;

const Container = styled.div`
  background-color: #1A1A1A;
  width: 60%;
  height: 85vh;
  border-radius:8px;
  display: flex;
  align-items: center;
  flex-direction: column;
 

  @media(min-width:320px) and (max-width: 500px){
    width: 95%;
    height: 85vh;
  
  }
`;

const H1 = styled.h1`
 font-family: 'Inter', sans-serif;
  font-size: 2.4rem;
  font-weight: 900;
  background: -webkit-linear-gradient(#303297, #4EA8DE);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom:15px;
`;

const DivInputButton = styled.div`

width:95%;
height:15vh;
display:flex;
align-items:center;

`

const Input = styled.input`
    width: 90%;
    height: 8vh;
    display:flex;
    align-items:center;
    padding:20px;
    -webkit-border-top-left-radius: 8px;
    -webkit-border-bottom-left-radius: 8px;
    -moz-border-radius-topleft: 8px;
    -moz-border-radius-bottomleft: 8px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    background-color:#262626;
    border:none;
    color:#ffffff;
    font-family: 'Inter',sans-serif; 
    font-weight:400;
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
    font-size:1.1rem;
  &::placeholder{
    color:#808080;
    font-size:1.1rem;
  }

  @media(min-width:320px) and (max-width: 500px){
    width: 95%;
    height: 50px;
  }

`;

const Button = styled.button`
  width: 7vw;
  height: 8vh;
  background-color:#1E6F9F;
  border:none;
  -webkit-border-top-right-radius: 8px;
-webkit-border-bottom-right-radius: 8px;
-moz-border-radius-topright: 8px;
-moz-border-radius-bottomright: 8px;
border-top-right-radius: 8px;
border-bottom-right-radius: 8px;
  color:#F2F2F2;
  font-family: 'Inter',sans-serif; 
  display: flex;
  align-items: center;
  justify-content:center;
  gap:5px;
  font-weight:700;
  cursor: pointer;

  @media(min-width:320px) and (max-width: 500px){
    width: 36vw;
    height: 50px;
    gap:2px;
  }

  @media(min-width:901px) and (max-width: 1500px)
{
  width: 25vw;
  font-size:1.3rem;
}
`

const Button2 = styled.button`
  width: 7vw;
  height: 8vh;
  background-color:#2d345a;
  border:none;
  border-radius:8px;
  cursor:pointer;

  @media(min-width:320px) and (max-width: 500px){
    width: 26vw;
    height: 10vh;
    -webkit-border-top-right-radius: 8px;
-webkit-border-bottom-right-radius: 8px;
-moz-border-radius-topright: 8px;
-moz-border-radius-bottomright: 8px;
border-top-right-radius: 8px;
border-bottom-right-radius: 8px;
    
  }
`

const Ul = styled.ul`

  width: 95%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top:30px;

  @media(min-width:320px) and (max-width: 500px){
   
   
  }

`;

const Li = styled.li`
  border: #333 solid;
  background-color:#262626;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.06);
  border-radius:8px;
  margin-bottom:15px;
  list-style: none;
  height: 8vh;
 padding-left:20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content:space-between;
  font-size: 1.7rem;
  color: #ffffff;
  font-family: 'Inter',sans-serif; 
  font-weight:700;

  @media(min-width:320px) and (max-width: 500px){
   
   height: 10vh;
 }

`;

export const Index = () => {
  const [valorInput, setValorInput] = useState('');
  const [adicionar, setAdicionar] = useState([]);

  const AdicionarTarefa = () => {
    if (valorInput.trim() !== '') {
      setAdicionar(adicionar.concat(valorInput));
      setValorInput('');
    }
  };

  const RemoverTarefa = (index) => {
    const novaLista = adicionar.slice(); 
    novaLista.splice(index, 1); 
    setAdicionar(novaLista);
  };

  return (
    <>
      <GlobalStyle />
      <Main>
      <H1>ToDoList</H1>
        <Container>
        <DivInputButton>
        <Input type="text" value={valorInput} onChange={(event) => setValorInput(event.target.value)} placeholder="Digite sua tarefa" />
          <Button onClick={AdicionarTarefa}>Adicionar<FaPlus /></Button>
        </DivInputButton>
         

          <Ul>
            {adicionar.map((item, index) => (
              <Li key={index}>
                {item}
                <Button2 onClick={() => RemoverTarefa(index)}><FaTrash
                 size={20}
                 style={{ color: '#d4d4d4', cursor: 'pointer' }}
                /></Button2>
              </Li>
            ))}
          </Ul>
        </Container>
      </Main>
    </>
  );
};
