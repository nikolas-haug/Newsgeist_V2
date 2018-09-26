import React from "react";
import { Col, Button, Form, FormGroup, Label, Input, InputGroup, InputGroupAddon } from 'reactstrap';

const MainInput = (props) => {
    return (
        <div className="container">
            <Form>
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

{/* <div className="input-group">
                <input
                type="text" 
                className="form-control" 
                placeholder="Search for..."
                id="searchTerm"
                value={props.searchTerm}
                onChange={props.handleChange}
                required 
                />
            </div>  */}

// export default class Example extends React.Component {
//   render() {
//     return (
        
//         <div className="container">
//             <Form>
//                 <InputGroup>
//                     <InputGroupAddon addonType="prepend"><Button>I'm a button</Button></InputGroupAddon>
//                     <Input />
//                 </InputGroup>
//             </Form>
//         </div>

//     );
//   }
// }

export default MainInput;