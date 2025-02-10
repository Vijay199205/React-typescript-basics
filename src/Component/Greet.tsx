type  nameemp = {
    name:string;
    messageCount?:number;
    isLoggin:boolean;
}

export const Greet = (props:nameemp)=> {
  const {messageCount = 0} = props
  return (
    <div>
        {props.isLoggin ? `Wlcome to Gesut`: `Welcome to new prohect typescript and learing from ${props.name} and unread meassage is ${props.messageCount}`}
        <h2>Welcome to new prohect typescript and learing from {props.name} and unread meassage is {messageCount}</h2>
    </div>
  )
}

