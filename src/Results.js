/* global chrome */

import React from 'react';
import { Button, List } from 'antd';

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookmarkList: [],
    };
  }

  reset = () => {
    this.setState(
      {
        bookmarkList: [],
      },
      () => {
        this.props.reset(); // return to home tab
      },
    );
  };

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

      this.setState({ bookmarkList: flatBookmarkList });
    });
  }

  render() {
    return (
      <div>
        <Button onClick={this.reset}>Back to start</Button>
        <List
          itemLayout="horizontal"
          dataSource={this.state.bookmarkList || []}
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
      </div>
    );
  }
}

export default Results;
