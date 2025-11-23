import{test,expect} from '@playwright/test'

test("Palindrome Check", async()=>{

    let str="amadama";
    let start=0;
    let end=str.length-1;
    let isPlaindrome=0;
    while(end>start){

        if(str.charAt(start)!=str.charAt(end)){
            
            isPlaindrome++;
        }
        start++;
        end--;
       
    }
    if(isPlaindrome>0){
       console.log(`${str} is not Palindrome`);
    }else{
        console.log(`${str} is Palindrome`);
    }
    
})
test("Reverse Sentence 2", async()=>{

    let str="m3ada3m";
    let revstr=str.split('').reverse().join('');

    // if(str===revstr){
    //     console.log("This is Palindrome")
    // }else{
    //     console.log("This is Not Palindrome")
    // }

    let result= str===str.split('').reverse().join('') ? "yes":"no";
    console.log(result)
    

})