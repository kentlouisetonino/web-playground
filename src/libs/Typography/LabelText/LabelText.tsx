import classNames from 'classnames';
import { Size } from './types';

export interface LabelTextProps {
  size?: Size;
  value: string;
  className?: string;
}

export default function LabelText({
  value,
  size,
  className = 'text-label',
}: LabelTextProps) {
  return (
    <span
      className={classNames(
        'leading-tight',
        {
          'text-xxs': size === 'xsmall',
          'text-xs': size === 'small',
          'text-sm': !size,
          'text-base': size === 'large',
          'text-lg': size === 'xlarge',
        },
        className
      )}
    >
      {value}
    </span>
  );
}
