import React from "react";
import { Button, Htag, P } from "../components";

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
    </>
  );
}
