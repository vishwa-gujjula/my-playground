import {test,expect} from '@playwright/test';

test('Handle Inner Frames', async({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/');
    
    const frame3 = await page.frame({url : 'https://ui.vision/demo/webtest/frames/frame_3.html'});
    await frame3.getByRole('textbox').fill('Welcome');

    const childFrames = await frame3.childFrames();
    await childFrames[0].getByLabel('I am a human').click();

    await page.waitForTimeout(5000);
});