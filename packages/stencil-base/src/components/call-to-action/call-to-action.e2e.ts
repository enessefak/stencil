import { newE2EPage } from '@stencil/core/testing';

describe('jsfi-call-to-action', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<jsfi-call-to-action></jsfi-call-to-action>');

    const element = await page.find('jsfi-call-to-action');
    expect(element).toHaveClass('hydrated');
  });
});
