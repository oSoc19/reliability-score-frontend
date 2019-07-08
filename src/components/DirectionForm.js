import React, { Component } from 'react'
import { AutoComplete, Button, DatePicker, TimePicker, Radio } from 'antd'
import moment from 'moment'
import { Redirect } from 'react-router-dom'

const dataSource = ['Antwerpen', 'Gent-Sint-Pieters']

class DirectionForm extends Component {
    state = {
        loading: false
    }

    handleSubmit = () => {
        console.log('ptn')
        this.setState({
            loading: true
        })

        // Do something

        // Simulate loading
        setTimeout(() => {
            this.setState({
                redirect: true
            })
        }, 2000)
    }

    render() {
        if (this.state.redirect)
            return <Redirect to='/planner/'></Redirect>

        return (
            <form className={`direction-form ${this.props.CSSClassNames}`}>
                <span className='title-form'>FROM</span>
                <AutoComplete
                    dataSource={dataSource}
                    placeholder='Departure'
                    filterOption={(inputValue, option) =>
                        option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                    }
                />

                <span className='title-form'>TO</span>
                <AutoComplete
                    dataSource={dataSource}
                    placeholder='Arrival'
                    filterOption={(inputValue, option) =>
                        option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                    }
                />

                <div className='time-form'>
                    <div className='item'>
                        <span className='title-form'>WHEN</span>
                        <DatePicker defaultValue={moment(new Date(), 'DD/MM/YYYY')} format='DD/MM/YYYY' />
                    </div>

                    <div className='item'>
                        <span className='title-form'>AT</span>
                        <TimePicker defaultValue={moment(new Date(), 'HH:mm')} format='HH:mm' minuteStep={10} />
                    </div>
                </div>

                <div className='radio-line'>
                    <Radio.Group defaultValue="departure" buttonStyle="solid">
                        <Radio.Button value="departure">Departure</Radio.Button>
                        <Radio.Button value="arrival">Arrival</Radio.Button>
                    </Radio.Group>
                </div>

                <Button onClick={this.handleSubmit} type="primary" loading={this.state.loading}>{this.state.loading ? 'Please wait' : 'Let\' plan !'}</Button>
            </form>
        )
    }
}

export default DirectionForm