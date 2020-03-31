import { newE2EPage } from '@stencil/core/testing';

describe('jsfi-toggle-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<jsfi-toggle-button></jsfi-toggle-button>');

    const element = await page.find('jsfi-toggle-button');
    expect(element).toHaveClass('hydrated');
  });
});
