import{test,expect} from '@playwright/test'

test("Anagram Check", async({page})=>{

   await page.goto("https://www.google.com/")
   expect(page.url()).toContain("google");
    
    
})
