import{test,expect} from '@playwright/test'

test("reverse Vowel in string", async()=>{

    let str="selenium";
    let strarr=str.split('');
    let start=0;
    let end=strarr.length-1;
    let vowel=new Set(['a','e','i','o','u','A','E','I','O','U',])

    while(end>start){
        while(!vowel.has(strarr[start])){
            start++;
        }
        while(!vowel.has(strarr[end])){
            end--;
        }
        [strarr[start],strarr[end]]=[strarr[end],strarr[start]];
        start++;
        end--;
    }
    console.log(strarr.join(''))
})
test("reverse Vowel in string 2", async()=>{

    let str="selenium";
    let strarr=str.split('');
    let start=0;
    let end=strarr.length-1;
    let vowel=['a','e','i','o','u','A','E','I','O','U',]

    while(end>start){
        while(!vowel.includes(strarr[start])){
            start++;
        }
        while(!vowel.includes(strarr[end])){
            end--;
        }
        [strarr[start],strarr[end]]=[strarr[end],strarr[start]];
        start++;
        end--;
    }
    console.log(strarr.join(''))
})
test("reverse Vowel in string 3", async()=>{

    let str="selenium";
    let strarr=str.split('');
    let start=0;
    let end=strarr.length-1;
    let vowel="aeiouAEIOU"

    while(end>start){
        while(!vowel.includes(strarr[start])){
            start++;
        }
        while(!vowel.includes(strarr[end])){
            end--;
        }
        [strarr[start],strarr[end]]=[strarr[end],strarr[start]];
        start++;
        end--;
    }
    console.log(strarr.join(''))
})