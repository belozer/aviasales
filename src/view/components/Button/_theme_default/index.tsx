import { withCondition, matchProps } from '../../../../packages/conditional-component';

import { IButtonProps } from '..';

import './index.css';

export const ButtonThemeDefault = withCondition<IButtonProps>(matchProps<IButtonProps>({ theme: 'default' }));
