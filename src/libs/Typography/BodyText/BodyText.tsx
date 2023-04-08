import classNames from 'classnames';
import { Size } from './types';

export interface BodyTextProps {
  value: string;
  size?: Size;
  color?: string;
  /**
   * Supply the color of the text
   */
  className?: string;
}

export default function BodyText({
  value,
  size,
  className = 'text',
}: BodyTextProps) {
  return (
    <span
      className={classNames(
        'leading-normal',
        {
          'text-xs': size === 'xsmall',
          'text-sm': size === 'small',
          'text-base': !size,
          'text-lg': size === 'large',
          'text-xl': size === 'xlarge',
        },
        className
      )}
    >
      {value}
    </span>
  );
}
