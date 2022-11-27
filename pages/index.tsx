import React, { useState } from "react";
import { Button, Htag, P, Rating, Tag } from "../components";
import { withLayout } from "../layout/Layout";

function Home() {
  const [rating, setRating] = useState<number>(4);
  return (
    <>
      <Htag tag="h1">Текст</Htag>
      <Button appearance="primary">Кнопка</Button>
      <Button appearance="ghost" arrow="right">
        Кнопка
      </Button>

      <P size="small">small</P>
      <P>medium</P>
      <P size="large">large</P>
      <Tag size="small">Ghost</Tag>
      <Tag size="medium" color="red">
        Redxs
      </Tag>
      <Tag size="small" color="green">
        Green
      </Tag>
      <Tag color="primary">Green</Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
    </>
  );
}

export default withLayout(Home);
