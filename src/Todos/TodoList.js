import React, { useEffect } from "react";
import {connect} from 'react-redux';
import styled from 'styled-components';
import NewTodoForm  from './NewTodoForm';
import TodoListItem from './TodoListItem';
import {loadTodos, removeTodoRequest, markTodosAsCompletedRequest} from './thunk'
import { getTodosLoading,getIncompleteTodos,getCompleteTodos } from "./selectors";
// import {completeTodo} from './action';
import {displayAlert} from './thunk';

const Wrapper = styled.div`
max-width: 760px;
margin:auto;
`;


const TodoList = ({completedTodos,incompletedTodos, onRemovePressed,onCompletePressed,onDisplayAlertClicked,isLoading, startLoadingTodos }) => {
    useEffect(() => {
    startLoadingTodos();
    }, []);
   
    const loadingMessage =<div>Loading todos again.....</div>;
    const content =(
    <Wrapper>
        <NewTodoForm/>
        <h3>Incomplete:</h3>
        {incompletedTodos.map(todo => <TodoListItem todo={todo} onRemovePressed={onRemovePressed}  onCompletePressed={onCompletePressed} />)}
        <h3>Completed:</h3> 
        {completedTodos.map(todo => <TodoListItem todo={todo} onRemovePressed={onRemovePressed}  onCompletePressed={onCompletePressed} />)}
        </Wrapper>

);

return isLoading ? loadingMessage:content;
};

const mapStateToProps = state => ({
    isLoading: getTodosLoading(state),
    completedTodos:getCompleteTodos(state),
    incompletedTodos:getIncompleteTodos(state),


});
const mapDispatchToProps = dispatch => ({
startLoadingTodos: () => dispatch(loadTodos()),
onRemovePressed: id =>  dispatch (removeTodoRequest(id)),
onCompletePressed: id =>  dispatch (markTodosAsCompletedRequest(id)),
});
export default connect( mapStateToProps, mapDispatchToProps) (TodoList);