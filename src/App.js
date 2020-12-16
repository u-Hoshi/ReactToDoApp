import React from 'react'
import Form from './Form'
import List from './List'

const App = () => {
     const todos = [
        {
            content: '課題をする'
        },
        {
            content: '洗濯をする'
        },
        {
            content: '電話をする'
         },
        {
            content: '料理をする'
        }
     ]
    return (
        <React.Fragment>
            <h1>todo App</h1>
            <Form />
            <List todos={todos} />
        </React.Fragment>
    )
}

export default App