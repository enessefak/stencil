import { newE2EPage } from '@stencil/core/testing';

describe('jsfi-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<jsfi-header></jsfi-header>');

    const element = await page.find('jsfi-header');
    expect(element).toHaveClass('hydrated');
  });
});
