import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTsearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDescription from './components/video_description';



const API_KEY ='AIzaSyDdyPdpSItmN2mwvBkOoEQzh1hgYvnQJ6E';


class App extends Component {
    constructor(props){
        super(props);
        this.state = {videos: []};
        YTsearch({key: API_KEY,term: 'games'}, (videos) => {
            this.setState({videos});
            //console.log(videos);
            //this.setState({videos: videos})
        });
    }
    render(){
    return (
        <div>
            <SearchBar/>
            <VideoDescription video={this.state.videos[0]}/>
            <VideoList videos={this.state.videos}/>
            
        </div>
        );
    }
}
ReactDOM.render(<App/>, document.querySelector('.container'));