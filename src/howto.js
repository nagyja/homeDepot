import _ from "lodash";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";

import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";
import VideoCategories from "./components/video_categories";

const API_KEY = "AIzaSyAuQCVeNfKhtRk9KlChQPT1nO27DPO_5Ss";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
      vidCategory: ""
    };
    
    this.videoSearch("Appliances");
  }

  videoSearch(category) {
    
    YTSearch({ key: API_KEY, term: "home depot " + category }, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
      this.setState({vidCategory: category});
      console.log(category +" is new term");
      $('#detailCategory').remove();
      $('#goShop').remove();
      var detailCategory = "<p id=detailCategory>" + category + "<p>";
      var goShop = "<div id=goShop><strong>Shop all " + category +"</strong></div>"
      $('#vidCat').append(detailCategory);
      $('#goToStore').append(goShop);
    });
  }

  render() {

    const videoSearch = _.debounce(category => {
     this.videoSearch(category);
    }, 300);

    return (
      <div>
        <row>
          <VideoCategories
            onCategorySelect={category => videoSearch(category)}
          />
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
            onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
            videos={this.state.videos}
          />
        </row>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));
