import React from "react";
import { Card, CardBody } from "reactstrap";
function Header({name , title}){
    return(
        <div>
            <Card className="text-center my-2" color="dark" inverse>
                <CardBody>
            <h1 className="text center my-2">welcome to Smart Phone Supply chain</h1>
            </CardBody>
            </Card>
           
        </div>
    );
}
export default Header;