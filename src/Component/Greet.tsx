type  nameemp = {
    name:string
}

export const Greet = (props:nameemp)=> {
  return (
    <div>
        <h2>Welcome to new prohect typescript and learing from {props.name}</h2>
    </div>
  )
}

