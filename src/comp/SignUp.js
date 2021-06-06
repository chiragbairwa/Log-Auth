import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function SignUp() {
   return (
      <div style={{
         height: '100vh',
         display: 'flex',
         alignItems: 'center',
         justifyContent: 'center',
         backgroundColor: '#eee'
      }}>
         <Card>
            <Form className="m-5">
               <h2 className="mb-4">Create a new account</h2>
               <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>

                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                     We'll never share your email with anyone else.
                  </Form.Text>
               </Form.Group>

               <Form.Group controlId="formBasicPassword" className="mt-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
               </Form.Group>

               <Form.Group controlId="formBasicPassword" className="mt-3">
                  <Form.Label>Password confirm</Form.Label>
                  <Form.Control type="passwordConfirm" placeholder="Password confirm" />
               </Form.Group>
               
               <Button variant="primary" type="submit" className="mt-3 w-100">Sign Up</Button>
            </Form>
            <div style={{
               backgroundColor: 'skyblue',textAlign: 'center'
            }} className="mt-3 p-2">
               Already have an account? <a href="localhost:3000" style={{ textDecoration: 'none' }}>Log In</a>
            </div>
         </Card>
      </div>
   );
}