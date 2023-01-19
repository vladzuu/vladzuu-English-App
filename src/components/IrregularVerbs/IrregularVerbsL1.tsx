import React from 'react';
import Draggable from 'react-draggable';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';


const IrregularVerbsL1 = () => {
  const dataWorld = useSelector((state: RootState) => state.persistedReducer.irregularVerbs.verbs)

  return (
    <div>
      <Draggable>
        <div style={{ backgroundColor: 'green', minWidth: 600, minHeight: 600 }}></div>
      </Draggable>
    </div>
  );
};

export default IrregularVerbsL1;
