import React from 'react';
import { Button, Col, Form, FormGroup, Label, Input } from 'reactstrap';
export const Filter = () => {
  return (
    <Form inline>
        <Col md={3}>
          <FormGroup >
            <Label className="mr-sm-2" for="environment">Select</Label>
            <Input type="select" name="environment" id="environment">
              <option>local</option>
              <option>Dev</option>
              <option>QA</option>
              <option>Pre-Prod</option>
              <option>Prod</option>
            </Input>
          </FormGroup>
        </Col>  
        <Col md={3}>
          <FormGroup>
            <Label className="mr-sm-2" for="attribute">Attribute</Label>
            <Input type="select" name="attribute" id="attribute">
              <option>Username</option>
              <option>Email</option>
            </Input>
          </FormGroup>
        </Col>  
        <Col md={6} className="pr-0 my-2">
          <FormGroup className="float-left">
            <Label className="mr-sm-2" for="search" >Filter</Label>
            <Input type="text" name="query" id="search" placeholder="Enter your query" />
          </FormGroup>
        
          <FormGroup className="float-right">
            <Button>Submit</Button>
          </FormGroup>
        </Col>
    </Form>
  );
}