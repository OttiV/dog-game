import React, { Component } from "react";
import { Link } from "react-router-dom";
import LoadingModal from "../LoadingModal";
import { connect } from "react-redux";
import { getDogImages } from "../../actions/DogsImages";
import { getDogList } from "../../actions/Dogslist";
import { setNumbers } from "../../actions/game2Action";

class gameTwo extends Component {
    componentDidMount() {
        this.props.getDogList();
        this.numbersToArray()
    }



    numbersToArray() {
        const numbers = []
        for (let i = 0; i < 3; i++) {
            console.log(this.props)
            // numbers.push(Math.floor(Math.random()* this.props.dogs.breeds.length))
          
        }
        this.props.setNumbers(numbers)

        const answer = numbers[Math.floor(Math.random()* numbers.length)];
    }
    

    render() {
        return(
            <div>hello</div>
        )
    }
    

}

const mapStateToProps = state => {
    return {
        images: state.dogs.selectedDogImages,
        dogNames: state.dogs.dogsList,
        loading: state.appStatus.loading,
        breeds: state.dogs.breeds
    }
}

export default connect(
    mapStateToProps,
    { getDogImages, getDogList, setNumbers }
)(gameTwo)