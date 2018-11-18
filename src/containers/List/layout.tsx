import React from 'react';
import styled from 'styled-components';
import _ from "lodash";

import Item from '../../components/ListItem';

interface IListLayoutProps {
  onListScroll: (e: any) => void
}

const List = styled.ul`
  margin: 0;
  padding: 0;
  overflow-y: scroll;
`;

export default ({
  onListScroll
}: IListLayoutProps) =>
  <List onScroll={onListScroll}>
    {
      _.times(100, (index: number) => 
        <Item
          key={index}
          data={index + 1}
        />
      )
    }
    
  </List>;