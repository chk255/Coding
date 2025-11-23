import{test,expect} from '@playwright/test'

test("Google Check",{tag:"@regression"}, async({page})=>{

   await page.goto("https://www.google.com/")
   expect(page.url()).toContain("google");
    
    
})
