import { newE2EPage } from '@stencil/core/testing';

describe('jsfi-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<jsfi-input></jsfi-input>');

    const element = await page.find('jsfi-input');
    expect(element).toHaveClass('hydrated');
  });
});
