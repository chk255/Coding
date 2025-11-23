import{test,expect} from '@playwright/test'

test("Find Repeated Character in String Using SET", async()=>{

    let str1="Automation";

    let newstr=str1.toLowerCase().split('');
    let myset=new Set();
    let dublicatechar=new Set();

    for(const c of newstr){
        if(myset.has(c)){
            dublicatechar.add(c);
        }else{
            myset.add(c);
        }
    }
    console.log(Array.from(dublicatechar).toString())

})

test("Find Repeated Character in String Using MAP", async()=>{

    let str1="Automation";

    let newstr=str1.toLowerCase().split('');
    let myMap=new Map<string,number>();
    let dublicatechar:string[]=[];

    for(let c of newstr){
        myMap.set(c, (myMap.get(c) ?? 0) + 1)
    }

    // for(let c of newstr){
    //     if((myMap.get(c) >1){
    //         dublicatechar.push(c);
    //     }
    // }
    console.log(myMap.entries())

})
