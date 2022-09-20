import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    //Use arrow function to bind keyword 'this'
    onFormSubmit = (event) => {
        event.preventDefault();
        //when calling props in class based components use this.props
        this.props.appSubmit(this.state.term);
        //this.props.appSubmit(this.state.term) sends info up to the App component
    };

    render() {
        return (
            <div className='ui segment'>
                <form onSubmit={this.onFormSubmit} className='ui form'>
                    <div className='field'>
                        <label>Image search</label>
                        <input
                            type='text'
                            value={this.state.term}
                            onChange={(e) => this.setState({ term: e.target.value })}>
                        </input>
                    </div>
                </form>
            </div>
        );
    };
};

export default SearchBar;