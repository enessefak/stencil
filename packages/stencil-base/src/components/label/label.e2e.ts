import { newE2EPage } from '@stencil/core/testing';

describe('jsfi-label', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<jsfi-label></jsfi-label>');

    const element = await page.find('jsfi-label');
    expect(element).toHaveClass('hydrated');
  });
});
