import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        deleted: state.deleted
    };
};

export class DeletedTasks extends Component {
    render(){
        console.log('this.props.deleted', this.props.deleted);
        return(
            <div>
                <p> </p>
                You have deleted { this.props.deleted.length } task(s)
            </div>
        );
    }
};

export const DeletedTaskX = connect(mapStateToProps)(DeletedTasks);