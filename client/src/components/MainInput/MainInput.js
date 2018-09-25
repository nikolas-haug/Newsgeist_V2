import React from "react";
import { Col, Button, Form, FormGroup, Label, Input, InputGroup, InputGroupAddon } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
        
        <div className="container">
            <InputGroup>
                <InputGroupAddon addonType="prepend"><Button>I'm a button</Button></InputGroupAddon>
                <Input />
            </InputGroup>
        </div>
        
    );
  }
}