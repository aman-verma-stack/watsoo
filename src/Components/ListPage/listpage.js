import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { fetchTripAPI } from '../../Api/TripSummaryApi/TripSummaryApi';
import { Row, Col, Button, Form } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faDownload, faTachometerAlt, faTruck, faClock, faWallet, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

import "react-datepicker/dist/react-datepicker.css";
import '../../scss/3-layout/listpage.scss';
import TripHeader from '../ListPage/listHeader';
import TripDetails from '../SingleRowComponent/listPageTableRow';
import { Card, CardHeader, CardBody } from '../Card/Card'

class ListPage extends Component {
    constructor(props) {
        super(props);
        this.props.fetchTrip({
            "clientId": 10,
            "dataRecord": {
                "userRoleId": 4,
                "userRoleName": "COMPANY",
                "userId": 10
            },
            "fromDate": 1577888571659,
            "toDate": 1593613371659,
            "tripId": 36
        });
    }
    state = {
        startDate: new Date(),
        endDate: new Date(),
        tripdData: []
    };


    startDate = date => {
        this.setState({
            startDate: date,
        });
    };

    endDate = date => {
        this.setState({
            endDate: date,
        });
    }


    render() {

        const { TripData } = this.props;

        let all_data = {}
        if (TripData) {
            all_data = TripData.trip
        }

        let trip_list = [];


        if (all_data && all_data.data && all_data.data.tripDetails) {
            trip_list = all_data.data.tripDetails.map(each_data =>
                <Card key={each_data.id}>
                    <CardHeader>
                        <Row>
                            <Col md={6}>
                                <p className='list_box_heading'>Date: {moment(parseInt(each_data.startDay)).format('L')} at {moment(parseInt(each_data.startDay)).format('LT')} - {moment(parseInt(each_data.endDay)).format('L')} at {moment(parseInt(each_data.endDay)).format('LT')} ({moment(parseInt(each_data.endDay)).diff(parseInt(each_data.startDay), 'hours') + ' Hrs'})
                                </p>
                            </Col>
                            <Col md={6}>
                                <p className='list_box_heading'>
                                    <span className='total_km'>Total KM : {each_data.dailyRunningTime / 100000} KM &nbsp;</span>
                                    <span className='total_exp'>Total Expense : 0</span></p>
                            </Col>
                        </Row>
                    </CardHeader>
                    <CardBody>
                        <table border='1' width='100%'>
                            <thead>
                                <TripHeader />
                            </thead>
                            <tbody>
                                {each_data.tripLists.map(each_list => (
                                    <TripDetails key={each_list.tripId} data={each_list} />
                                ))
                                }

                            </tbody>
                        </table>
                    </CardBody>
                </Card>
            );
        }


        return (
            <>
                <Row>
                    <Col md={6}>
                        <p className='first_heading'>Trip Summary</p>
                        <ul className='bredcrums'>
                            <li>Dashboard</li>
                            <li>Trip Summary</li>
                        </ul>
                    </Col>
                    <Col md={6}>
                        <Form>
                            <div className='datepicker_wrapper'>
                                <div className='f_left'>
                                    <span className='date_label'>From </span>
                                    <DatePicker
                                        className='custom_dp'
                                        selected={this.state.startDate}
                                        onChange={this.startDate}
                                    />
                                </div>
                                <div className='f_left'>
                                    <span className='date_label'>To </span>
                                    <DatePicker
                                        className='custom_dp'
                                        selected={this.state.endDate}
                                        onChange={this.endDate}
                                    />
                                </div>
                                <Button className="custom_button search_button"><FontAwesomeIcon icon={faSearch} /></Button>
                                <Button className='custom_button export_button'><FontAwesomeIcon icon={faDownload} /> Export</Button>
                            </div>


                        </Form>
                    </Col>
                </Row>

                <div className='trip_summary'>
                    <Row>
                        <Col md={8}>
                            <div className='trip_details'>
                                <ul>
                                    <li><FontAwesomeIcon icon={faTruck} /> {all_data.data && all_data.data.vehicleNo}</li>
                                    <li><FontAwesomeIcon icon={faTruck} /> Total Trips : {all_data.data && all_data.data.totalTrips}</li>
                                    <li><FontAwesomeIcon icon={faTachometerAlt} /> Total KM : {all_data.data && all_data.data.totalKm} </li>
                                    <li><FontAwesomeIcon icon={faClock} /> Trip Time : {moment(parseInt(all_data.data && all_data.data.totalTripTime)).format('LT')}</li>
                                    <li><FontAwesomeIcon icon={faClock} /> Total Time : &nbsp;
                                     {moment(parseInt(all_data.data && all_data.data.totalTime)).format('LT')}
                                    </li>
                                    <li><FontAwesomeIcon icon={faWallet} /> Total Exp : Rs. {all_data.data && all_data.data.totalExpences}</li>
                                </ul>
                            </div>
                        </Col>
                        <Col md={{ md: 3, offset: 1 }}>
                            <div className='other_exp'>
                                <p><FontAwesomeIcon icon={faWallet} /> Other Exp: RS {all_data.data && all_data.data.otherExpenses} <FontAwesomeIcon icon={faLongArrowAltRight} /></p>
                            </div>
                        </Col>
                    </Row>
                </div>

                {trip_list}
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        TripData: state.data,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchTrip: (searchParams) => dispatch(fetchTripAPI(searchParams)),
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(ListPage);