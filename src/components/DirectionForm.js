import React, { Component } from 'react'
import { AutoComplete, Button, DatePicker, TimePicker, Radio } from 'antd'
import moment from 'moment'
import { Redirect } from 'react-router-dom'
import { getStringDate, getStringTime } from './Util'

class DirectionForm extends Component {
    state = {
        loading: false,
        stations: [],
        displayedStation: [],

        departureStation: this.props.direction && this.props.direction.from ? this.props.direction.from : '',
        departureStationMissing: false,
        arrivalStation: this.props.direction && this.props.direction.to ? this.props.direction.to : '',
        arrivalStationMissing: false,

        date: this.props.direction && this.props.direction.date ? moment(new Date(this.props.direction.date), 'DD/MM/YYYY') : moment(new Date(), 'DD/MM/YYYY'),
        time: this.props.direction && this.props.direction.time ? moment(new Date(this.props.direction.time), 'HH:mm') : moment(new Date(), 'HH:mm')
    }

    handleSubmit = () => {
        // Check if required field is filled
        this.state.departureStation ? this.setState({ departureStationMissing: false }) : this.setState({ departureStationMissing: true })
        this.state.arrivalStation ? this.setState({ arrivalStationMissing: false }) : this.setState({ arrivalStationMissing: true })

        if(this.state.departureStation && this.state.arrivalStation) 
            this.setState({ 
                loading: true, 
                redirect: true 
            })
    }

    componentWillMount = () => {
        if (this.state.stations.length === 0) {
            fetch('http://api.irail.be/stations/?format=json&lang=en')
                .then(response => response.json())
                .then(data => {
                    let stations = data.station.map(s => s.name)
                    this.setState({
                        stations: stations
                    })
                })
        }
    }

    handleSearchStations = (inputValue) => {
        let newStations = inputValue.length >= 3 ? this.state.stations : []

        this.setState({
            displayedStation: newStations
        })
    }

    handleResetDisplayedStation = () => {
        this.setState({
            displayedStation: []
        })
    }

    handleSelectDepartureStation = (value) => {
        this.setState({
            departureStation: value
        })
    }

    handleSelectArrivalStation = (value) => {
        this.setState({
            arrivalStation: value
        })
    }

    handleSelectDate = value => {
        this.setState({
            date: value
        })
    }

    handleSelectTime = value => {
        this.setState({
            time: value
        })
    }

    render() {
        if (this.state.redirect)
            return <Redirect to={`/planner/?from=${this.state.departureStation}&to=${this.state.arrivalStation}&date=${this.state.date ? this.state.date : moment(new Date(), 'DD/MM/YYYY')}&time=${this.state.time ? this.state.time : moment(new Date(), 'HH:mm')}`}></Redirect>

        const { direction } = this.props

        return (
            <form className={`direction-form ${this.props.CSSClassNames}`}>
                <span className='title-form'>FROM</span>
                <AutoComplete
                    onFocus={this.handleResetDisplayedStation}
                    dataSource={this.state.displayedStation}
                    placeholder='Departure'
                    onSearch={this.handleSearchStations}
                    filterOption={(inputValue, option) =>
                        option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                    }
                    onSelect={this.handleSelectDepartureStation}
                    className={`${this.state.departureStationMissing ? 'wrong-field' : ''}`}
                    defaultValue={`${direction && direction.from ? direction.from : ''}`}
                />

                <span className='title-form'>TO</span>
                <AutoComplete
                    onFocus={this.handleResetDisplayedStation}
                    dataSource={this.state.displayedStation}
                    placeholder='Arrival'
                    onSearch={this.handleSearchStations}
                    filterOption={(inputValue, option) =>
                        option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                    }
                    onSelect={this.handleSelectArrivalStation}
                    className={`${this.state.arrivalStationMissing ? 'wrong-field' : ''}`}
                    defaultValue={`${direction && direction.from ? direction.to : ''}`}
                />

                <div className='time-form'>
                    <div className='item'>
                        <span className='title-form'>WHEN</span>
                        <DatePicker defaultValue={moment(new Date(), 'DD/MM/YYYY')} format='DD/MM/YYYY' allowClear={false} onChange={this.handleSelectDate} defaultValue={this.state.date} />
                    </div>

                    <div className='item'>
                        <span className='title-form'>AT</span>
                        <TimePicker defaultValue={moment(new Date(), 'HH:mm')} format='HH:mm' minuteStep={10} allowClear={false} onChange={this.handleSelectTime} defaultValue={this.state.time} />
                    </div>
                </div>

                <div className='radio-line'>
                    <Radio.Group defaultValue="departure" buttonStyle="solid">
                        <Radio.Button value="departure">Departure</Radio.Button>
                        <Radio.Button value="arrival">Arrival</Radio.Button>
                    </Radio.Group>
                </div>

                <Button onClick={this.handleSubmit} loading={this.state.loading} type="primary">{this.state.loading ? 'Please wait' : 'Explore reliability!'}</Button>
            </form>
        )
    }
}

export default DirectionForm