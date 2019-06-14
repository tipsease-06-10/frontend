import React, { Component } from 'react';
import { connect } from 'react-redux';

import WorkerList from '../components/WorkerComponents/WorkerList';
import { getWorkers } from '../store/actions';

class WorkerListView extends Component {

    componentDidMount() {
        this.props.getWorkers();
    }

    render() {
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