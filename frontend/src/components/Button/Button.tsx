import { MouseEventHandler } from 'react';
import './Button.scss';

interface ButtonProps {
  content: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({ content, onClick }) => {
  return <button onClick={onClick}>{content}</button>;
};

export default Button;
