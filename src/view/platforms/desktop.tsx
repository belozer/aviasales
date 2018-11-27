import { render } from '../';
import { desktop } from '@b/Page/Page.registry/desktop';
import { Page } from '@b/Page';

render(Page, desktop);

module.hot && module.hot.accept(
    '../components/Page',
    () => render(require('@b/Page').Page, desktop)
);
