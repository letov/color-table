import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import {MAX_VALUE_COLOR, MIN_VALUE_COLOR, RGB, ZERO_VALUE_COLOR} from '../../config';

interface BoxProps {
    index: number
}

const Box: FC<BoxProps> = ({ index }: BoxProps) => {
    const boxState = useSelector((state: RootState) => state.table[index]);

    if (!boxState.visible) {
        return null;
    }

    const valueToColor = (value: number): RGB => {
        const from = ZERO_VALUE_COLOR;
        const to: RGB = value > 0 ? MAX_VALUE_COLOR : MIN_VALUE_COLOR;
        const power = Math.abs(value) / 100;
        const delta: RGB = { R: to.R - from.R, G: to.G - from.G, B: to.B - from.B };
        return {
            R: Math.floor(from.R + delta.R * power),
            G: Math.floor(from.G + delta.G * power),
            B: Math.floor(from.B + delta.B * power)
        }
    }

    const color = valueToColor(boxState.value)

    return (
        <div
            className="box"
            style={{ backgroundColor: `rgb(${color.R} ${color.G} ${color.B})` }}
        >{boxState.value}</div>
    );
}

export default Box;
