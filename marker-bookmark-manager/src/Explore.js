import React from 'react';
import { Table } from 'antd';

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

const Explore = ({ bookmarkTree }) => <Table columns={tableColumns} dataSource={bookmarkTree} />;

export default Explore;
