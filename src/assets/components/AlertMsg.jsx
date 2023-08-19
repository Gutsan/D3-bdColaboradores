import Alert from 'react-bootstrap/Alert';

export function AlertMsg({type,message, visible}){
const FORMAT=visible?"msgAlert AlertON":"msgAlert AlertOFF"

    return(
        <div className={FORMAT}>
            <Alert variant={type}>{message}</Alert>
        </div>
    )
}
