import { newE2EPage } from '@stencil/core/testing';

describe('jsfi-layout', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<jsfi-layout></jsfi-layout>');

    const element = await page.find('jsfi-layout');
    expect(element).toHaveClass('hydrated');
  });
});
