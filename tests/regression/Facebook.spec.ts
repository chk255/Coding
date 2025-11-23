import{test,expect} from '@playwright/test'

test("Facebook Check",{tag:"@smoke"}, async({page})=>{

   await page.goto("https://www.Facebook.com/")
   expect(page.url()).toContain("facebook");
    
    
})
