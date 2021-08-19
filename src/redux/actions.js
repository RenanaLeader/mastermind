function convertActionToType(actionName){
    return actionName.replace(/([A-Z])/g, "_$1").toUpperCase();
}
export const actions=new Proxy(
    {},
    {    
        get:function(target,prop){
            if(target[prop]===undefined)
            return function(args,args2,args3){
                return{
                    type:convertActionToType(prop),
                    payload:args,
                    value:args2
                };
            };
            else return target[prop];
        }
    }
);

