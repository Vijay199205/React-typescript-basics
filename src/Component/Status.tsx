type StatusProps = {
    status:string
}




export const Status = (props:StatusProps) =>{

    let message;

    if(props.status ===  'Loading'){
        message = 'Data loading';
    }else if(props.status === 'success'){
        message = 'Data loaded sucessfully';
    }else{
        message = 'Error while Loading Data'; 
    }
    return(
        <div>
            <h2>Status - {message}</h2>
            
        </div>
    )
} 