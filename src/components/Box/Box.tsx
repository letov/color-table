import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

interface BoxProps {
    index: number
}

const Box: FC<BoxProps> = ({ index }: BoxProps) => {
    const value = useSelector((state: RootState) => state.table[index]);

    return (
        <div className="box">
            {value}
        </div>
    );
}

export default Box;
