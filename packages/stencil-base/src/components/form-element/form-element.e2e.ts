import { newE2EPage } from '@stencil/core/testing';

describe('jsfi-form-element', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<jsfi-form-element></jsfi-form-element>');

    const element = await page.find('jsfi-form-element');
    expect(element).toHaveClass('hydrated');
  });
});
