type PersonLists = {
    names: {
        firsttName:string,
          lastName: string
      }[]
    
}


export const PersonList = (props:PersonLists) =>{
    return(
        <div>
            {props.names.map((name)=>{
                return(
                    <h2 key={name.firsttName}>{name.firsttName} {name.lastName}</h2>
                )
            })}
        </div>
    )
}