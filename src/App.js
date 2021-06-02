import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'lightgrey'
    }}>
      <div style={{
        textAlign: 'left',
        borderRadius: '10px',
        backgroundColor: 'white',
        overflow: 'hidden'
      }}>        
        <form style={{
          padding: '50px 50px 0 50px',
          display: 'flex',
          flexDirection: 'column'
        }}> 
          <h2>Login to your account</h2>
          <br></br>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="abc@gmail.com"></input>
          <br></br>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" placeholder="******"></input>

          <Button style={{marginTop:'20px'}} type="ubmit">Login</Button>
        </form>
        <div style={{
            marginTop: '40px',
            padding: '10px 0',
            backgroundColor:'skyblue',
            textAlign: 'center'
          }}>
            Don't have account?<a href="localhost:3000" style={{textDecoration:'none'}}> Sign Up</a>
        </div>
      </div>
    </div>
  );
}

export default App;
