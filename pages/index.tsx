import axios from "axios";
import { GetStaticProps } from "next";
import React, { useState } from "react";
import { Button, Htag, P, Rating, Tag, Textarea } from "../components";
import { Input } from "../components/Input/Input";
import { MenuItem } from "../interfaces/menu.interface";
import { withLayout } from "../layout/Layout";

function Home({ menu }: HomeProps) {
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
      <Input placeholder="Введите хоть что-то" />
      <Textarea placeholder="Введите хоть что-то" />
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
    { firstCategory }
  );
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
