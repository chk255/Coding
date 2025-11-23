import{test,expect} from '@playwright/test'

test("Anagram Check", async()=>{

    let str1="Listen";
    let str2="Silent";

    let newstr1=str1.toLowerCase().split('').sort().join('');
    let newstr2=str2.toLowerCase().split('').sort().join('');

    if(newstr1===newstr2){
        console.log(`${str1} and ${str2} are Anagram`);
    }else{
        console.log(`${str1} and ${str2} are Not Anagram`);
    }
    
    
})
