import React, { Component } from 'react';
import { connect } from 'react-redux';

import { extraActions } from '../actions/extra.action';

const mapDispatchToProps = {
    removeDeleted: extraActions.removeDeleted
};

const mapStateToProps = (state) => {
    return {
        deleted: state.deleted || []
    };
};

export class DeletedTasks extends Component {
    handleClick = (event) => {
        event.preventDefault();
        this.props.removeDeleted();
    }

    render(){
        console.log('this.props.deleted', this.props.deleted);
        return(
            <div>
                <p> </p>
                You have deleted { this.props.deleted.length } task(s)

                > <a href="#" onClick={(e)=>this.handleClick(e)}>Clear all</a>
            </div>
        );
    }
};

export const DeletedTaskX = connect(mapStateToProps, mapDispatchToProps)(DeletedTasks);