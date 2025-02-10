type personProps = {
    name:{
        firsttName:string
        lastName:string
    }
}


export const Person = (props:personProps) => {
    return(
        <div>{props.name.firsttName} {props.name.lastName}</div>
    )
}