import React from 'react';
import { HistoryContainer } from './styles';

const History = ({ history }) => {
    return (
     
      
      <HistoryContainer>
    <div>
       <h3>Histórico</h3>
        <ul>
          {history.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        </div>
      </HistoryContainer>
    );
  };

  export default History;
