import { withCondition, matchProps } from '../../../../packages/conditional-component';

import { IRadioButtonProps } from '..';

import './index.css';

export const RadioButtonThemeDefault = withCondition<IRadioButtonProps>(matchProps<IRadioButtonProps>({ theme: 'default' }));
