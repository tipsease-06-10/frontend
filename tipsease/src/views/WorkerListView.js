import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { WorkerList } from '../components';
import { getWorkers } from '../store/actions';

class WorkerListView extends Component {

    componentDidMount() {
        this.props.getWorkers();
    }

    render() {
        if(this.props.fetching || this.props.workers) {
         return <Loader type='Circles' color='#2CBBAD' height='100' width='100' />
        }
        return (
            <div>
             <WorkerList workers={this.props.workers} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    workers: state.workers,
    error: state.error,
    fetching: state.fetching
});

export default connect(
    mapStateToProps,
    { getWorkers }
)(WorkerListView);