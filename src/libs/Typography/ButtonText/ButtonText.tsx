import classNames from 'classnames';
import { Size } from './types';

export interface ButtonTextProps {
  value: string;
  size?: Size;
  className?: string;
  color?: string;
}

export default function ButtonText({
  value,
  size,
  className,
  color = 'white',
}: ButtonTextProps) {
  return (
    <span
      className={classNames(
        `text-${color} extra-tight`,
        {
          'text-xs leading-tight': size === 'xsmall',
          'text-sm': size === 'small',
          'text-lg': !size,
          'text-1.25xl': size === 'large',
          'text-2xl': size === 'xlarge',
        },
        className
      )}
    >
      {value}
    </span>
  );
}
