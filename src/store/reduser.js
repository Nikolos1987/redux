const states=1
export const test=(state=states,action)=>{
    switch (action.type) {      
        case "add":
            console.log('qw');
              console.log(action);
            return state+=1
            case "second":
                console.log('second');
                  console.log(action);
                return state-=1 
        default:
            return state;
    }
}

export const test1=(state=states,action)=>{
    switch (action.type) {      
        case "second":
            console.log('second');
              console.log(action);
            return state-=1
        default:
            return state;
    }
}