import styled from 'styled-components';

export const InputContainer = styled.div`
   width: 100%;
   height: 75px;
   background-color: #AAFFAA;

   display: flex;
   align-items: center;
   justify-content: flex-start; /* Alinha o conteúdo à esquerda */
   border: 1px solid gray;

   font-size: 24px;
   font-family: 'Roboto';
   
   input {
       width: 100%;
       height: 75px;
       background-color: #008080;
       color: white;
       font-size: 24px;
       border: 0;
       display: flex;
       flex-direction: column;
       align-items: flex-start; /* Alinha o texto à esquerda */
       padding: 0 10px;
       font-family: 'Roboto';
       text-align: left; 
   }
`
