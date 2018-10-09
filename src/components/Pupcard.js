import React, { Component } from 'react';


class Pupcard extends Component {

    render() {
        return (
            <div onClick={() => this.props.thisClick(this.props.id)}>
                <h3>{this.props.name}</h3>
                <img src={this.props.img} alt={this.props.name} />
            </div>


        )
    }

}

export default Pupcard;

