import * as React from 'react';
import { cn } from '@bem-react/classname';

import { stopsPluralMask } from '@b/Stops'

import './index.css';

const cnTicket = cn('Ticket');

export interface ITicketStopsProps {
    count: number;
}

export const TicketStops: React.SFC<ITicketStopsProps> = props => (
    <div className={cnTicket('Stops')}>
        <span className={cnTicket('StopsInner')}>{stopsPluralMask[props.count]}</span>
    </div>
);
