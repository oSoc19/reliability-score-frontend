import React, { Component } from 'react'
import NewDirectionItem from './NewDirectionItem'

class DirectionCollection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isReady: false,
            predictions: []
        };
    }

    componentDidMount() {

        for(let i=0; i < 5; i++) {
            fetch("https://stunning-voyageurs-87289.herokuapp.com/delay/station")
            .then( response => response.json())
            .then(
                // Handle the result
                (result) => {
                    this.setState(prevState => ({
                        isReady : true,
                        predictions: [...prevState.predictions, result]
                    }));
                },

                    // Handle error 
                    (error) => {
                        this.setState({
                            isReady: true,
                            error: 'Error occurred while fetching the data!'
                        })
                    },
                )
        }
    }

    render() {
        const { error, isReady, predictions } = this.state;
        if (error) {
            console.log("Error loading");
            return <div>Error!</div>
        }
        else if (!isReady) {
            console.log("Loading data...");
            return <div>Loading...</div>
        }
        else {
            console.log(JSON.stringify(predictions))
            return (
                <div className='direction-collection'>
                    {
                        predictions.map((prediction, index) => (
                            <NewDirectionItem key={index} delay_probability={prediction.delay_probability} average_delay={prediction.average_delay} />
                        ))
                    }
                </div>
            )
        }
    }
}

export default DirectionCollection
