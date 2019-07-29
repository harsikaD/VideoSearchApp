import React from 'react';

const VideoListItems = (props) =>{
    const imageURL = props.video.snippet.thumbnails.default.url;
    const title = props.video.snippet.title;
    //console.log(props.video.snippet.thumbnails.default.url);
    return (
        <li className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageURL}/>
                </div>
                <div className="media-body">
                    <div className="media-heading">{title}</div>
                </div>
            </div>
        </li>
    );
};
export default VideoListItems;