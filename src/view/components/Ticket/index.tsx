import * as React from 'react';
import { cn } from '@bem-react/classname';
import { compose } from 'really-typed-compose';

import { IExtendedTicket } from '../../../typings';
import { Box } from '@b/Box';
import { Carrier } from '@b/Carrier';
import { Button } from '@b/Button';
import { ButtonAction } from '@b/Button/_action';
import { TicketPoint } from './Point';
import { TicketPointModeOrigin } from './Point/_mode_origin';
import { TicketPointModeDestination } from './Point/_mode_destination';
import { TicketStops } from './Stops';
import { currencies } from '@b/Currency';

import './index.css';

export const cnTicket = cn('Ticket');
const ButtonWithMods = compose(ButtonAction)(Button);
const TicketPointWithMods = compose(TicketPointModeOrigin, TicketPointModeDestination)(TicketPoint);

export interface ITicketProps extends IExtendedTicket {
    currency: currencies;
    [key: string]: string | number | undefined;
}

export const Ticket: React.SFC<ITicketProps> = props => (
    <Box className={cnTicket()}>
        <div className={cnTicket('Controls')}>
            <Carrier className={cnTicket('Carrier')} name={'TK' || props.carrier} />
            <ButtonWithMods className={cnTicket('Button')} action>
                Купить за{'\u00A0'}{props[`price_${props.currency.toLowerCase()}`]}
            </ButtonWithMods>
        </div>
        <div className={cnTicket('Info')}>
            <TicketPointWithMods
                mode="origin"
                iata={props.origin}
                name={props.origin_name}
                time={props.departure_time}
                date={props.departure_date} />

            <TicketPointWithMods
                mode="destination"
                iata={props.destination}
                name={props.destination_name}
                time={props.arrival_time}
                date={props.arrival_date} />

            <TicketStops count={props.stops} />
        </div>
    </Box>
);
