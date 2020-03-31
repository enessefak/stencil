import { newE2EPage } from '@stencil/core/testing';

describe('jsfi-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<jsfi-button></jsfi-button>');

    const element = await page.find('jsfi-button');
    expect(element).toHaveClass('hydrated');
  });
});
