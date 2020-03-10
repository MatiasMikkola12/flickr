import React from 'react';
import './App.css';

interface AppProps {
}

interface AppState {
  data: any
}

interface Item {
  title: string
  media: any
  author: string
  description: string
  link: string
  tags: string;
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: any) {
    super(props);

    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    fetch('data/data.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Response not OK');
        }
        return response.json();
      })
      .then((data) => {
        this.setState({ data: data })
      })
      .catch((error) => {
        console.error('Some issue with the fetch:', error);
      });
  }

  render() {
    const items = this.state.data.items
    return (
      <div className="data-wrapper">
        {items && items.map((item: Item) => (
          <div className="item-wrapper">
            <div className="contents">
              <div className="image-wrapper">
                <img src={item.media.m} />
              </div>
              <div className="title-wrapper">
                <span><a href={item.media.m}>{item.title}</a> by <a href={item.link}>{item.author}</a></span>
              </div>

              <div className="description-wrapper">
                <span>Description: {item.description}</span>
              </div>

              <div className="dropdown-wrapper">
                <select className="dropdown" id="tags">
                  <option value="Tag">Tags</option>

                  {item.tags && item.tags.split(" ").map((tag: string) => (
                    <option value="tag">{tag}</option>
                  )
                  )}
                </select>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default App;
