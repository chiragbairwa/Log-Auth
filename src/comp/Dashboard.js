import { Card } from 'react-bootstrap'
import { Link, useHistory} from 'react-router-dom'
import { useAuth } from '../contexts/AuthContexts'
// import {useState} from 'react'


export default function Dashboard() {
    // const [error, setError] = useState("")
    const {currentUser } = useAuth() 
    const {signout } = useAuth()

    const history = useHistory()
    
    async function logout(){
        try{
            await signout()
            history.push("/signin")
        }
        catch{
            alert('error')
        }
    }
    return (
        <Card>
            <h5>Email:</h5> {currentUser.email}

            <button onClick={logout} >Log OUt</button>
            <Link to="/signin">Login</Link>
            <Link to="/signup">SignUp</Link>
        </Card>
    )
}