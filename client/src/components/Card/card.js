import React from "react";

import { VisibilityContext } from "react-horizontal-scrolling-menu";

export function Card({
    itemId,
    selected,
    onClick,
    title
  }: {
    itemId: string;
    selected: boolean;
    onClick: Function;
    title: string;
  }) {
    const visibility = React.useContext(VisibilityContext);
  
    const visible = visibility.isItemVisible(itemId);
  
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Recipe title</Card.Title>
          <Card.Text>
            Where the recipe will go
          </Card.Text>
          <Button variant="primary">Save button</Button>
        </Card.Body>
      </Card>
        
    );
  }