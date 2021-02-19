import React from 'react';
import { useMachine } from '@xstate/react';
import { selectMachine } from 'components/select-machine';

type Record = {[key:string]:any}

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

  action?: (key:number|string) => any;

  value: Record;

}

/**
 * Primary UI component for user interaction
 * 
 * Hoverable, selectable, actionable.
 */
export const Tile: React.FC<TileProps> = ({
  backgroundColor,
  value,
  action
}) => {
  const [selectedState, toSelect] = useMachine(selectMachine);

  const selectedStyle = selectedState.matches('selected') ? 'relate-tile--selected' : '';

  const key = value.id ?? value.key;

  const title = value.name ?? value.title ?? value.id;

  return (
    <div
      key={key}
      onClick={() => {toSelect('TOGGLE'); if (action !== undefined) action(); }}
      className={['relate-tile', selectedStyle].join(' ')}
      style={{ backgroundColor }}
    >
      <div className="flex-grow">
        {title}
      </div>
      <div className="flex-none my-auto h-6 w-6">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
      </svg>
      </div>
    </div>
  );
};
