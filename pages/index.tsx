import React, { useState } from "react";
import { Button, Htag, P, Rating, Tag } from "../components";
import { Layout } from "../layout/Layout";

export default function Home() {
  const [rating, setRating] = useState<number>(4);
  return (
    <Layout>
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
        Red
      </Tag>
      <Tag size="small" color="green">
        Green
      </Tag>
      <Tag color="primary">Green</Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
    </Layout>
  );
}
