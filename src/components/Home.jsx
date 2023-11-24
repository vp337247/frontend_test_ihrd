import { Component } from 'react';
import Popular from './Popular';
import Search from './Search';

class Home extends Component {
    state = { searchTerm: '' }

    handleInput = (e) => {
        this.setState({
            searchTerm: e.target.value,
        });
    }

    render() {
        return (
            <div className="relative w-full">
                {/* Search input */}
                <div className="search-input bg-white-500 w-full">
                    <input
                        type="text"
                        name="search"
                        className='w-full sm:w-[1100px] p-3 my-2 rounded-lg h-12'
                        onChange={(e) => this.handleInput(e)}
                        placeholder="Start typing to show results..."
                    />
                </div>
                {/* Display popular movies or search results based on the search term */}
                {this.state.searchTerm.length === 0 ? <Popular {...this.props} />
                    :
                    <Search searchTerm={this.state.searchTerm} />}
            </div>
        );
    }
}

export default Home;
