import * as React from 'react';
import { cn } from '@bem-react/classname';

import './index.css';

const cnLogo = cn('Logo');

export const Logo = () => <div className={cnLogo()} />;
