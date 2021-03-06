import { useRef, useState } from 'react';
import { useAuth } from '../contexts/AuthContexts';
import { Link, useHistory } from 'react-router-dom';
import {Card, Form, Button, Alert } from 'react-bootstrap';


export default function SignIn() {
   const emailRef = useRef()
   const passwordRef = useRef()

   const {signin} = useAuth()
   const history = useHistory()

   const [error, setError] = useState('')
   const [loading, setLoading] = useState(false)

   async function handleSubmit(e) {
      e.preventDefault()
      
      try{
         setLoading(true)

         await signin(emailRef.current.value, passwordRef.current.value)
         history.push("/")
      } catch(err){
         setError(err)
         setLoading(false)
      }
   }
   return (
      <div style={{
         height: '100vh',
         display: 'flex',
         alignItems: 'center',
         justifyContent: 'center',
         backgroundColor: 'lightgrey'
      }}>
         <Card>
            {error && <Alert variant="danger">{error}</Alert>}

            <Form className="m-5" onSubmit={handleSubmit}>
               <h2 className="mb-4">Login to your account</h2>
               <Form.Group>
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" ref={emailRef} placeholder="Enter email" />
               </Form.Group>

               <Form.Group className="mt-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" ref={passwordRef} placeholder="Password" />
               </Form.Group>
               <Button disabled={loading} variant="primary" type="submit" className="mt-3 w-100">Login</Button>
            </Form>

            <div style={{
               backgroundColor: 'skyblue',textAlign: 'center'
            }} className="mt-3 p-2">
               Don't have account?<Link to="/signup" style={{ textDecoration: 'none' }}> Sign Up</Link>
            </div>
         </Card>
      </div>
   );
}