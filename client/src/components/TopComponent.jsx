import React from 'react';

const TopComponent = ({
    todoLists,
    addTodo
}) =>
    <div>
        <ul>
            {todoLists.map((text, index) => <li key={'show' + index}>{text}</li>)}
        </ul>
        <div onClick={addTodo.bind(this, Math.floor(100 * Math.random(0, 1)))}>点击添加</div>
    </div>

export default TopComponent;