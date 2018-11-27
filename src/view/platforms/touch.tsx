import { render } from '../';
import { touch } from '@b/Page/Page.registry/touch';
import { Page } from '@b/Page';

render(Page, touch);

module.hot && module.hot.accept(
    '../components/Page',
    () => render(require('@b/Page').Page, touch)
);
