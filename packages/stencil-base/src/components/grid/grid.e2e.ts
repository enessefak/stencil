import { newE2EPage } from '@stencil/core/testing';

describe('jsfi-grid', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<jsfi-grid></jsfi-grid>');

    const element = await page.find('jsfi-grid');
    expect(element).toHaveClass('hydrated');
  });
});
