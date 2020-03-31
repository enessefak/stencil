import { newE2EPage } from '@stencil/core/testing';

describe('jsfi-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<jsfi-card></jsfi-card>');

    const element = await page.find('jsfi-card');
    expect(element).toHaveClass('hydrated');
  });
});
