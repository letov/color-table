import React, { FC } from 'react';
import {MAX_VALUE_COLOR, MIN_VALUE_COLOR, ZERO_VALUE_COLOR} from '../../config';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import {allVisible, negativeVisible, positiveVisible} from '../Table/tableSlice';


interface FilterProps {}

const Filter: FC<FilterProps> = () => {
    const dispatch = useDispatch()

    return (
        <div className="filter__wrapper">
            <Button title="filter &#62; 0" color={MAX_VALUE_COLOR} onClick={() => dispatch(positiveVisible())} />
            <Button title="All" color={ZERO_VALUE_COLOR} onClick={() => dispatch(allVisible())} />
            <Button title="filter &#60; 0" color={MIN_VALUE_COLOR} onClick={() => dispatch(negativeVisible())} />
        </div>
    )
};

export default Filter;
