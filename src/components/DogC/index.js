import React from 'react'
// import './Quote.css'

export default (props) => {
    const { breed } = props.breed
    return (
        <ul className={'DogC'} >
            <li className={'Dog_Breed'}>{breed}</li>
            
        </ul>
    )
}