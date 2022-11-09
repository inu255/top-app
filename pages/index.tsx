import React from "react";
import { Button, Htag, P, Rating, Tag } from "../components";

export default function Home() {
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
        Red
      </Tag>
      <Tag size="small" color="green">
        Green
      </Tag>
      <Tag color="primary">Green</Tag>
      <Rating rating={4} />
    </>
  );
}
