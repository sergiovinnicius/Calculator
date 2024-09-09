import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #c2d6d6;

    display: flex;
    align-items: center;
    justify-content: center;

`

export const Content = styled.div`
    background-color: #009999;
    width: 40%;
    border: 1px solid gray;
    box-shadow: 3px 3px 3px gray;

`


export const Row = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
`
export const Column = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;
`