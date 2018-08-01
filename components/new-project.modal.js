import React from "react";
import { connect } from 'react-redux';  
import { bindActionCreators } from 'redux';
import { hideNewProjectModal } from '../actions/utils';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Col, Label, Input, FormText } from 'reactstrap';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

class NewProjectModal extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = { description: '' };
    
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.onStateChange = this.onStateChange.bind(this);
  }
  
  onStateChange(e) {
    console.log(e);
    //this.setState({description: e.target.value});
  }
  
  onDescriptionChange(text) {
    console.log(text);
    this.setState({description: text });
  }

  render() {
    return (
      <Modal isOpen={this.props.isNewProjectModalOpen} size="lg">
        <ModalHeader toggle={this.toggle}>Neues Projekt anlegen</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup row>
              <Label for="inputProjectName" sm={2}>Projektname</Label>
              <Col sm={10}>
                <Input type="text" name="emaiinputProjectNamel" id="inputProjectName" placeholder="with a placeholder" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="inputAuthor" sm={2}>Ersteller</Label>
              <Col sm={4}>
                <Input type="text" name="inputAuthor" id="inputAuthor" placeholder="Ersteller" />
              </Col>
              <Label for="inputState" sm={2}>Status</Label>
              <Col sm={4}>
                <Input type="select" name="inputState" id="inputState" onChange={(e) => this.onStateChange(e.target.value)}>
                  <option value="0">Offen</option>
                  <option value="1">In Prüfung</option>
                  <option value="2">Umsetzung</option>
                  <option value="3">Zurückgestellt</option>
                  <option value="4">Keine Umsetzung</option>
                  <option value="5">Fertig</option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="inputDescription" sm={12}>Beschreibung</Label>
              <Col sm={12}>
                <CKEditor editor={ ClassicEditor } onChange={(event, editor) => this.onDescriptionChange(editor.getData())} />
              </Col>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.toggle}>Speichern</Button>
          <Button color="secondary" onClick={this.props.hideNewProjectModal}>Abbrechen</Button>
        </ModalFooter>
      </Modal>
    );
  }
}

function mapStateToProps(state) {  
  return { isNewProjectModalOpen: state.isNewProjectModalOpen }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ hideNewProjectModal }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NewProjectModal);