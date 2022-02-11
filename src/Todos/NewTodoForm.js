import React,{useState} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import{addTodoRequest} from './thunk';
import { getTodos } from './selectors';
const  FormMain = styled.div`
border-radius:8px
padding:16px;
text-align:center;
box-shadow: 0 4px 8px grey
`;
const Input = styled.input`
font-size:16px;
padding:8px;
border:none;
border-bottom: 2px solid #ddd;
border-radius:8px;
width:70%;
outline:none; 
`;
const NewTodoButton = styled.button`
font-size:16px;
padding:8px;
border:none;
border-radius:8px;
width:20%;
outline:none; 
cursor:pointer;
margin-left:8px;
background-color:#22ee22;
`;
const NewTodoForm = ({todos, onCreatePressed}) => {
const[ inputValue, setInputValue] =useState("");
return(
    <FormMain>
        <Input className="new-todo-input" type="text"
         placeholder= "Type your new Todo"
         value ={inputValue}
         onChange={e => setInputValue(e.target.value)}/>
        
        
        <NewTodoButton
        className="new-todo-button"
        onClick={()=> { 
        const isDuplicateText = 
        todos.some(todo => todo.text === inputValue);
        if(!isDuplicateText){
            onCreatePressed(inputValue); 
            setInputValue('');
        }
         }}>
        Create Todo</NewTodoButton>
        </FormMain>
);
};
const mapStateToProps = state => ({
    todos: getTodos(state),

});
const mapDispatchToProps = dispatch => ({
onCreatePressed:text =>  dispatch (addTodoRequest(text)),
});
export default connect(mapStateToProps,mapDispatchToProps)(NewTodoForm);