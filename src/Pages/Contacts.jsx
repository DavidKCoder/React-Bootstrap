import React, { Component } from "react";
import { Container, Form, FormLabel, FormText, FormCheck, Button } from "react-bootstrap";
import { FormGroup } from "react-bootstrap";
import { FormControl } from "react-bootstrap";

export default class Contacts extends Component {
  render() {
    return (
      <Container style={{width: "500px"}} >
        <h1 className="text-center" >Contact us</h1>
        <Form>
          <FormGroup controlId="formBasicEmail">
            <FormLabel>Email address</FormLabel>
            <FormControl type="email" placeholder="Enter email" />
            <FormText>We'll never share your email with anyone else</FormText>
          </FormGroup>

          <FormGroup controlId="formBasicPassword">
            <FormLabel>Example textarea</FormLabel>
            <FormControl as="textarea" rows="3" />
          </FormGroup>

          <FormGroup controlId="checkBox">
            <FormCheck type="checkbox" label="Check me out"  />
          </FormGroup>
          <Button variant="primary" type="submit">Submit</Button>
        </Form>
      </Container>
    );
  }
}