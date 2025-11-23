import{test,expect} from '@playwright/test'

test("reverse words in sentence", async()=>{

    let sen="My Name is Chandan"
    let revwordinsent="";

    let senarr=sen.split(' ')
    console.log(senarr.join(' '))

    for(const word of senarr){
        let revword=word.split('').reverse().join('');
        revwordinsent += revword + ' ';

    }
    console.log(revwordinsent)
    

})
test("reverse words in sentence 2", async()=>{

    let sen="My Name is Chandan"
    let revwordinsent="";
    let left=0;
    let right=sen.length-1;

   while(true){

    if(left==right){
        break;
    }
    while(sen.charAt(left)==' ' && left<right){
        left++;
    }

    let start=left;
    while(sen.charAt(left)!=' ' && left<right){
        left++;
    }
     let revword ='';
    for(let i=left-1;i>=start;i--){
        revword += sen.charAt(i);
    }

    revwordinsent += revword + " ";

   }
   console.log(revwordinsent)
    

})