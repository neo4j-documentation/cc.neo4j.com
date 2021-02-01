import React from 'react';
import { useMachine } from '@xstate/react';
import { selectMachine } from 'machines/select-machine';

export interface TileProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
}

/**
 * Primary UI component for user interaction
 */
export const Tile: React.FC<TileProps> = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}) => {
  const [selectedState, toSelect] = useMachine(selectMachine);

  const mode = primary ? 'relate-button--primary' : 'relate-button--secondary';

  const selectedStyle = selectedState.matches('selected') ? 'relate-tile--selected' : '';

  return (
    <div
      onClick={() => toSelect('TOGGLE')}
      className={['relate-tile', `relate-button--${size}`, mode, selectedStyle].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </div>
  );
};
