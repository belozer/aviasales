import { withCondition, matchProps } from '../../../../packages/conditional-component';

import { IButtonProps } from '..';

import './index.css';

export const ButtonAction = withCondition<IButtonProps>(matchProps<IButtonProps>({ action: true }));
