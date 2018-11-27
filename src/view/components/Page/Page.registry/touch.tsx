import { Registry } from '@bem-react/di';

import { Serp, cnSerp } from '@b/Serp/@touch';
import { Ticket, cnTicket } from '@b/Ticket/@touch';

export const touch = new Registry({ id: 'platform' });

touch.set(cnSerp(), Serp);
touch.set(cnTicket(), Ticket);
