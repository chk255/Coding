import{test,expect} from '@playwright/test'

test("Amazon Check",{tag:"@smoke"} ,async({page})=>{

   await page.goto("https://www.amazon.com/")
   expect(page.url()).toContain("amazon");
    
    
})
