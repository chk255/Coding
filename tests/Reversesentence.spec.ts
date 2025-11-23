import{test,expect} from '@playwright/test'

test("Reverse Sentence", async()=>{

    let sent="My Name is Chandan" // "Chandan is Name My"
    let revsent="";

    let senarr=sent.split(' ')
    console.log(senarr.join(' '))

    for(let i=senarr.length-1;i>=0;i--){
        revsent+=senarr[i] + " "
    }
    console.log(revsent)
    expect(revsent.trim()).toBe("Chandan is Name My")
    

})
test("Reverse Sentence 2", async()=>{

    let sent="My Name is Chandan" // "Chandan is Name My"
    let revsent="";
    let left=0;
    let right=sent.length-1;

   while(right>=left){

    while(sent.charAt(right)==' ' && left<=right){
        right--;
    }

    let end=right;
    while(sent.charAt(right)!=' ' && left<=right){
       right--;
    }
     if(end>=right){
        revsent+=sent.substring(right+1,end+1)+" ";
     }
    
   }
   console.log(revsent)
    

})