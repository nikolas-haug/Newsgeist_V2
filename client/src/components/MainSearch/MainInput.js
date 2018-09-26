import React from "react";
import { Col, Button, Form, FormGroup, Label, Input, InputGroup, InputGroupAddon } from 'reactstrap';

const MainInput = (props) => {
    return (
        <div className="container">
            <Form onSubmit={props.handleSubmit}>
                <InputGroup>
                    <InputGroupAddon addonType="prepend"><Button>I'm a button</Button></InputGroupAddon>
                    <Input 
                        type="text"
                        placeholder="search term"
                        id="searchTerm"
                        value={props.searchTerm}
                        onChange={props.handleChange}
                    />
                </InputGroup>
            </Form>
        </div>
    )
}

export default MainInput;