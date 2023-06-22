import React from "react";
import axios from "axios";
import base_url from "../api/Bootapi";
import {toast} from "react-toastify";
import {
Card,
CardBody,
CardTitle,
CardSubtitle,
CardText,
CardFooter,
Button,
Container,
} from "reactstrap";
const MobileParts=({mobilepart, update})=>{
    const deletepart=(id)=>
    {


    }
return(
    <Card className="text-center">
        <CardBody>
            <CardSubtitle tag="h5">{mobilepart.title}</CardSubtitle>
            <cardText>{mobilepart.description}</cardText>
            <Container className="text-center">

                <Button color="danger "
                onClick={()=>
                {
                    deletepart(mobilepart.id)
                }}
                >Delete</Button>
                {"  "}
                
                <Button color="warning ml-1233">Update</Button>
            </Container>
        </CardBody>
    </Card>
)
}
export default MobileParts;