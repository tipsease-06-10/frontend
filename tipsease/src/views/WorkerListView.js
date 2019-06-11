import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { WorkerList } from '../components';
import { getWorkers } from '../actions';

class WorkerListView extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.getWorkers();
    }

    render() {
        if(this.props.fetching) {
            <Loader type='Puff' color='#00BFFF' height='90' width='60' />
        }
        return (
            <div>
                <WorkerList workers={this.props.workers} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    workers: state.workerReducer.worker,
    error: state.workerReducer.error,
    fetching: state.workerReducer.fetching
});

export default connect(
    mapStateToProps,
    { getWorkers }
)(WorkerListView);