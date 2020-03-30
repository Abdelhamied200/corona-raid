import React, { Component } from "react";

import "./news.scss";
import Axios from "axios";
import Slider from "../components/slider";

class News extends Component {
  state = {
    news: []
  };

  componentDidMount() {
    const press = "https://covidtracking.com/api/press";
    const media =
      "https://koa.pics.ee/api/v1/links/parse?v=false&key=20f07f91f3303b2f66ab6f61698d977d69b83d64";

    // first we get the news source
    Axios.get(press)
      .then(res => {
        let data = res.data;
        // target only last 10 news
        console.clear();
        for (let i = 0; i < 10; i++) {
          let n = data[i];
          let src = n.url;
          Axios({
            method: "post",
            url: media,
            headers: {},
            data: {
              url: src // This is the body part
            }
          }).then(res => {
            let news = res.data.data;
            this.setState({ news: [...this.state.news, news] });
          });
        }
      })
      .catch(err => {
        console.log(err);
      });

    //
  }

  render() {
    console.log(this.state);

    return (
      <section className="free news">
        <div className="title">
          <h2>News</h2>
          <span className="line"></span>
        </div>

        <div className="press">
          <Slider news={this.state.news} />
        </div>
      </section>
    );
  }
}

export default News;
