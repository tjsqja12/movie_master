import React from 'react';
import './Detail.css';
class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push('/');
    }
  }

  render() {
    const { location } = this.props;
    if (location.state) {
      return( 
      <div className="detail">
        <a href="https://www.naver.com"></a>
        <span>
          {location.state.title}
        </span>
        <span>
          {location.state.date_uploaded}
        </span>
        <h3>summary:</h3>
        <span>
          {location.state.summary}
        </span>
        <h3>synopsis: </h3>
        <span>
          {location.state.synopsis}
        </span>
        <span>
          {location.state.genres}
        </span>
      </div>
      )
    } else {
      return null;
    }
  }
}

export default Detail;
