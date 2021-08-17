import React, { Component } from "react";
import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';
import { fetchSmurfs, SMURF_START, SMURF_SUCCESS, SMURF_FAIL, SMURF_ADD, SMURF_ERROR } from '../src/actions';
// import axios from 'axios';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

class App extends Component {
  componentDidMount() {
      this.props.fetchSmurfs();
    // axios.get('http://localhost:3333/smurfs')
    // .then(res => console.log(res))
    // .catch(err => console.log('Axios Error', err));
  }

  render() {
    return (
      <div className="App">
        <Header />

        <main>
          <SmurfList/>
          <AddForm/>
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      smurfs: state.smurfs,
      isLoading: state.isLoading,
      error: state.error,
  }
};

export default connect(mapStateToProps, { fetchSmurfs, SMURF_START, SMURF_SUCCESS, SMURF_FAIL, SMURF_ADD, SMURF_ERROR })(App);

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component first loads.