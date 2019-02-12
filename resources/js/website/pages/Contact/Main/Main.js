import React, { Component } from 'react';
import axios from 'axios';
import { FormErrors } from './FormErrors';
// Styles
import '../styles/main.scss';

import {
  Container,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Alert
} from 'reactstrap';

class Main extends Component {

  constructor() {
    super();
    this.state = {
      email: '',
      fullname: '',
      subject: '',
      message: '',
      formErrors: {email: '', fullname: '', subject: '', message: '', submit:''},
      emailValid: false,
      fullnameValid: false,
      subjectValid: false,
      messageValid: false,
      formValid: false,
      sendMessage: false
    }
    this.valider = this.valider.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.validateField = this.validateField.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.createMessage = this.createMessage.bind(this);
  }
  handleChange(e) {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    this.setState(
      {[name]: value},
      () => { this.validateField(name, value) }
          )
  }
  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let fullnameValid = this.state.fullnameValid;
    let subjectValid = this.state.subjectValid;
    let messageValid = this.state.messageValid;

    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        emailValid == null ? emailValid = false : emailValid = true;
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'fullname':
        fullnameValid = value.length >= 6;
        fieldValidationErrors.fullname = fullnameValid ? '': ' is too short';
        break;
      case 'subject':
        subjectValid = value.length >= 6;
        fieldValidationErrors.subject = subjectValid ? '': ' is too short';
        break;
      case 'message':
        messageValid = value.length >= 6;
        fieldValidationErrors.message = messageValid ? '': ' is too short';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    emailValid: emailValid,
                    fullnameValid: fullnameValid,
                    subjectValid: subjectValid,
                    messageValid: messageValid
                  }, this.validateForm);
  }
  validateForm() {
    this.setState({
      formValid:
        this.state.emailValid && this.state.fullnameValid &&
        this.state.subjectValid && this.state.messageValid
    });
  }
  valider(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('email', this.state.email);
    formData.append('fullname', this.state.fullname);
    formData.append('subject', this.state.subject);
    formData.append('message', this.state.message);
    this.createMessage(formData);
  }
  async createMessage(formData) {
    try {
        const create = await axios.post('/contact', formData);
        if(create.data == "SUCCESS")
            this.setState({ sendMessage : true })
        else
            this.setState({ formErrors : {email: '', fullname: '', subject: '', message: '', submit:'Erreur'} })
    } catch (error) {
        console.log(error);
        this.setState({ formErrors : {email: '', fullname: '', subject: '', message: '', submit:'Erreur'} })
    }
  }
  render() {
    return (
      <main>
        <Container>
          <section style={{padding: '40px 5px'}}>
              <h1>Contact us</h1>
              <div className="panel panel-default">
                <FormErrors formErrors={this.state.formErrors} />
                { this.state.sendMessage ?
                  <Alert color="info" >
                    Message Recieved!
                  </Alert>
                : null }


              </div>
              <Form>
                <FormGroup>
                  <Label htmlFor="email">Email</Label>
                  <Input type="email" name="email" onChange={(e) => this.handleChange(e)}/>
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="fullname">Full Name</Label>
                  <Input type="text" name="fullname" onChange={(e) => this.handleChange(e)}/>
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="subject">Subject</Label>
                  <Input type="text" name="subject" onChange={(e) => this.handleChange(e)} />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="message">Message</Label>
                  <Input type="textarea" name="message" onChange={(e) => this.handleChange(e)} />
                </FormGroup>
                <Button disabled={!this.state.formValid} onClick={(e) => this.valider(e)} color="success">Submit</Button>
              </Form>
          </section>
        </Container>
      </main>
    );
  }
}

export default Main;
