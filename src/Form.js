import React from 'react'

const Form = () => {
    const handleSubmit = () => {
        console.log('Form submitted')
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                onChange={e => {
                    console.log(e.target.value)
                }}
            />
        </form>
    )
}
export default Form