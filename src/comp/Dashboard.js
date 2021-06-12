import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link, useHistory} from 'react-router-dom'
import { useAuth } from '../contexts/AuthContexts'


export default function Dashboard() {
    const { currentUser } = useAuth() 
    
    const { signout } = useAuth()

    const history = useHistory()
    
    async function handle(){
        try{
            await signout()
            history.push("/signin")
        }
        catch{
            alert('Failed to log out')
        }
    }

    const checkId = currentUser ? true : false ;

    return (
        <Card style={{width: "fit-content", padding: "20px"}}>
            <h2 align="center">Profile</h2>
            <h5>Email: {checkId ? currentUser.email: "LoginPls"}</h5>

            <Button onClick={handle} disabled={!checkId}>Log Out</Button>
            <Link to="/signin">Login</Link>
            <Link to="/signup">SignUp</Link>
        </Card>
    )
}