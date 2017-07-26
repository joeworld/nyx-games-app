import React, { Component } from 'react';
import FeaturedFilter from './filters/FeaturedFilter';
import JurisdictionFilter from './filters/JurisdictionFilter';

class FilterForm extends Component {
    render() {
        return (
            <form className="game-filter">
                <FeaturedFilter
                    featured={ this.props.featured }
                    setFilter={ this.props.setFilter }
                />
                <JurisdictionFilter
                    setFilter={ this.props.setFilter }
                />
            </form>
        );
    }
}

export default FilterForm;