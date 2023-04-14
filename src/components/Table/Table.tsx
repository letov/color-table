import React, {FC} from 'react';
import {COLUMNS_NUMBER, ROW_NUMBER} from '../../config';
import Box from '../Box/Box';

interface TableProps {}

const Table: FC<TableProps> = () => {
  const range = Array.from(Array(ROW_NUMBER * COLUMNS_NUMBER).keys());

  return (
      <div
          className="table__wrapper"
          style={{
            gridTemplateRows: `repeat(${ROW_NUMBER}, 1fr)`,
            gridTemplateColumns: `repeat(${COLUMNS_NUMBER}, 1fr)`
          }}
      >
          {
              range.map((index) => (
                <Box index={index}/>
              ))
          }
      </div>
  );
};

export default Table;
