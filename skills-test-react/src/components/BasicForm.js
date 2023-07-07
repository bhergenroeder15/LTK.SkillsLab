import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux'
import * as actions from '../redux/actions'

 
const mapStateToProps = state => ({
    list: state.toDo.toDoList,
})
const mapDispatchToProps = dispatch => ({
    addToDo: (todo) => {
        dispatch(actions.addToDoActionCreator(todo))
    }
})
const BasicForm = (props) => {
  const navigate = useNavigate()
  return (
    <div>
      <h1>TODO</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
        }}
        onSubmit={(values) => {
          props.addToDo(values.addToDo)
          navigate('/')
        }}
      >
        <Form>
          <label htmlFor="todo">Add ToDo </label>
          <Field id="todo" name="addToDo" placeholder="TextHere" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(BasicForm)
