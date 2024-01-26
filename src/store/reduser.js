export const test=(state=10,action)=>{
    switch (action.type) {      
        case "add":
            console.log('qw');
              console.log(action);
            return state+=1
        default:
            return state;
    }
}