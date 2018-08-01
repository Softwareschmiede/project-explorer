import React from "react";
import { connect } from 'react-redux';  
import { bindActionCreators } from 'redux';
import { showNewProjectModal } from '../actions/utils';
import { Navbar, NavbarBrand, Button } from 'reactstrap';

class CustomNavbar extends React.Component {
  render() {
    return (
      <Navbar color="dark" dark>
        <NavbarBrand href="/">Project Explorer</NavbarBrand>
        <Button outline color="success" onClick={this.props.showNewProjectModal}>Neues Projekt</Button>
      </Navbar>
    );
  }
}

function mapStateToProps(state) {  
  return { isNewProjectModalOpen: state.isNewProjectModalOpen }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ showNewProjectModal }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomNavbar);