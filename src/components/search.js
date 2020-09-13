import React from 'react';
class SearchBar extends  React.Component
{
    constructor(props){
        super(props);
        this.state={term:'buildings'}
        this.handleChange = this.handleChange.bind(this);
        this.onFarmSubmit = this.onFarmSubmit.bind(this);

    }
   
   handleChange = (event) => {
        this.setState({term:event.target.value});
   };

   onFarmSubmit = (event) =>
   {
        event.preventDefault();
        this.props.onFormSubmit(this.state.term)
   }
    render()
    {
        return(
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onFarmSubmit}>
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text" value={this.state.term} onChange={this.handleChange}/>
                    </div>
                </form>
            </div>
            
        );
    }
}

export default SearchBar;