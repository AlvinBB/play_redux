import React from 'react';
import { connect } from 'react-redux';
import TopComponent from '../components/TopComponent';

import { addTodo } from '../actions/testaction';

const RootContainer = props =>
<div>
    hello world!!!
    <TopComponent {...props}/>
</div>;

const mapStateToProps = state => {
    const { todoApp } = state;
    const { todoLists } = todoApp;
    return {
        todoLists
    }
}

export default connect(mapStateToProps, {
    addTodo
})(RootContainer);
