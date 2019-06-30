/* global chrome */

import React from 'react';
import { List, Table, Skeleton } from 'antd';
import './App.css';

const tableColumns = [
  {
    title: 'Date Added',
    dataIndex: 'dateAdded',
    key: 'dateAdded',
  },
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Index',
    dataIndex: 'index',
    key: 'index',
  },
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'URL',
    dataIndex: 'url',
    key: 'url',
    render: url => (
      <a href={url} rel="noopener" target="blank">
        {url}
      </a>
    ),
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookmarkTree: [],
    };
  }

  componentDidMount() {
    chrome.bookmarks.getTree((bookmarks) => {
      const flatBookmarkList = [];

      const addToFlatBookmarkList = (node) => {
        if (node.hasOwnProperty('children')) {
          node.children.forEach((node) => {
            addToFlatBookmarkList(node);
          });
        } else {
          flatBookmarkList.push(node);
        }
      };
      bookmarks.forEach((node) => {
        addToFlatBookmarkList(node);
      });

      console.log('Flat bookmark list', flatBookmarkList);
      this.setState({ bookmarkTree: flatBookmarkList });
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h4>Marker</h4>
        </header>
        <List
          itemLayout="horizontal"
          dataSource={this.state.bookmarkTree}
          renderItem={item => (
            <List.Item
              actions={[
                <span>
                  ID:
                  {item.id}
                </span>,
                <span>
                  Parent:
                  {item.parentId}
                </span>,
                <span>
                  Date Added:
                  {item.dateAdded}
                </span>,
                <span>
                  Index:
                  {item.index}
                </span>,
              ]}
            >
              <List.Item.Meta
                title={item.title}
                description={(
                  <a href={item.url} target="blank">
                    {item.url}
                  </a>
)}
              />
            </List.Item>
          )}
        />
        //
        {' '}
        <Table columns={tableColumns} dataSource={this.state.bookmarkTree} />
      </div>
    );
  }
}

export default App;
