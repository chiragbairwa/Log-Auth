import {Link, useHistory} from 'react-router-dom';
import { useRef, useState } from 'react';
import { useAuth } from '../contexts/AuthContexts';
import {Card, Form, Button, Alert} from 'react-bootstrap';


export default function SignUp() {
   
   const emailRef = useRef()
   const passwordRef = useRef()
   const passwordConfirmRef = useRef()
   const {signup} = useAuth();
   const [error, setError] = useState('')
   const [loading, setLoading] = useState(false)
   const history = useHistory();

   async function handleSubmit(e){
      e.preventDefault()

      if(passwordRef.current.value !== passwordConfirmRef.current.value){
         return setError("Passwords do not match")
      }
      try{
         setError('')
         setLoading(true)
         await signup(emailRef.current.value, passwordRef.current.value)
         history.push("/signin")
      } catch {
         setError("Failed to create an account")
      }
   }
   return (
      <div style={{
         height: '100vh',
         display: 'flex',
         alignItems: 'center',
         justifyContent: 'center',
         backgroundColor: '#eee'
      }}>
         <Card>
            {error && <Alert variant="danger">Error</Alert>}
            <Form className="m-5" onSubmit={handleSubmit}>
               <h2 className="mb-4">Create a new account</h2>
               <Form.Group >
                  <Form.Label>Email address</Form.Label>

                  <Form.Control type="email" ref={emailRef} placeholder="Enter email" />
                  <Form.Text className="text-muted">
                     We'll never share your email with anyone else.
                  </Form.Text>
               </Form.Group>

               <Form.Group className="mt-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" ref={passwordRef}placeholder="Password" />
               </Form.Group>

               <Form.Group  className="mt-3">
                  <Form.Label>Password confirm</Form.Label>
                  <Form.Control type="password" ref={passwordConfirmRef} placeholder="Password confirm"  />
               </Form.Group>
               
               <Button disabled={loading} variant="primary" type="submit" className="mt-3 w-100">Sign Up</Button>
            </Form>
            <div style={{
               backgroundColor: 'skyblue',textAlign: 'center'
            }} className="mt-3 p-2">
               Already have an account? <Link to="/signin" style={{ textDecoration: 'none' }}>Log In</Link>
            </div>
         </Card>
      </div>
   );
}