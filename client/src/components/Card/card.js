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
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
        
    );
  }