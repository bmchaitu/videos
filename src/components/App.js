import React from 'react';
import SearchBar from './search';
import youtube from '../APIS/youtube';
import VideoList from './Videolist';
import VideoDetail from './VideoDetail';
class App extends React.Component{
     constructor(props)
     {
         super(props);
         this.state={ videos : [] , selectedvideo : null};
         this.onTermSubmit = this.onTermSubmit.bind(this);
         this.onVideoSelect = this.onVideoSelect.bind(this);
     }
     onVideoSelect = (video) => {
            this.setState({selectedvideo : video});
    
     }
    onTermSubmit = async (term) =>
         {
           const response = await youtube.get('/search',{
                 params : {
                     q : term
                    }
             });
             this.setState({videos:response.data.items})
         };
    
    render()
     {
         return(
             <div className="ui container">
                 <SearchBar  onFormSubmit={this.onTermSubmit}/>
                 <VideoDetail Video={this.state.selectedvideo}/>
                 <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
             </div>
         )
     }
}
 
export default App;