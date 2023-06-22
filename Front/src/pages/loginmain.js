import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import admin from'./images/admin.png'
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { CardGroup } from 'reactstrap';
import manufacturer from './images/manufacturer.jpg'
import logome  from './images/logome.jpg'
import abcd from './images/abcd.png'
const Loginmain = () => {

    const navigate=useNavigate()
    function handleClick()
    {
     navigate("/login")
    }
   
    function handleClickmufacturer()
    {
     navigate("/manufacturerlogin")
    }
    
    function handleClickdistributer()
    {
     navigate("/Distributerlogin")
    }
   
    function handleClickretailer()
    {
     navigate("/Retailerlogin")
    }
  return (
   
    <div>
   <CardGroup>
    <Card style={{ width: '18rem' }} color="primary">
      <Card.Img variant="top" src={admin} />
      <div class="d-flex justify-content-center">
      <Card.Body>
        <Card.Title><div class="d-flex justify-content-center">Admin</div></Card.Title>
        <Card.Text>
          Keep your password Private. Don't Share it to anyone

        </Card.Text> {'   '}
        <Button variant="primary" onClick={handleClick}>Sign in</Button>
      </Card.Body>
      </div>
    </Card>


    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={manufacturer} />
      <div class="d-flex justify-content-center">
      <Card.Body>
        <Card.Title><div class="d-flex justify-content-center">Manufacturer</div></Card.Title>
        <Card.Text>
          Keep your password Private. Don't Share it to anyone

        </Card.Text> {'   '}
        <Button variant="primary" onClick={handleClickmufacturer}>Sign in</Button>
      </Card.Body>
      </div>
    </Card>

    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={logome} />
      <div class="d-flex justify-content-center">
      <Card.Body>
        <Card.Title><div class="d-flex justify-content-center">Distributer</div></Card.Title>
        <Card.Text>
          Keep your password Private. Don't Share it to anyone

        </Card.Text> {'   '}
        <Button variant="primary" onClick={handleClickdistributer}>Sign in</Button>
      </Card.Body>
      </div>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={abcd} />
      <div class="d-flex justify-content-center">
      <Card.Body>
        <Card.Title><div class="d-flex justify-content-center">Retailer</div></Card.Title>
        <Card.Text>
          Keep your password Private. Don't Share it to anyone

        </Card.Text> {'   '}
        <Button variant="primary" onClick={handleClickretailer}>Sign in</Button>
      </Card.Body>
      </div>
    </Card>
    </CardGroup>


    </div>
  );
}

export default Loginmain;
// function handleClick()
// {
//   navigate("/nav")
// }
//   return (
//     <div className="app">
//       <div className="login-form">
//         <div className="title">Sign In</div>
//         {isSubmitted ? <div>Login is Successful <br/>
//         <Button type="button" class="btn btn-success" onClick={handleClick}> Click here toContinue</Button>
//            </div>
//                          : renderForm
//                          }