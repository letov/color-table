import React, { FC } from 'react';
import { RGB } from '../../config';


interface ButtonProps {
    title: string,
    color: RGB,
    onClick: () => void,
}

const Button: FC<ButtonProps> = ({ title, color, onClick }: ButtonProps) => (
    <button
        className="button"
        style={{ backgroundColor: `rgb(${color.R} ${color.G} ${color.B})` }}
        onClick={onClick}
    >{title}</button>
);

export default Button;
