import { useReducer } from "react";
import { HhData, Htag, Tag, Advantages, Sort, Product } from "../../components";
import { SortEnum } from "../../components/Sort/Sort.props";
// import { Advantages } from "../../components/Advantages/Advantages";
import { TopLevelCategory } from "../../interfaces/page.interface";
import { sortReducer } from "./sort.reducer";
import styles from "./TopPageComponent.module.css";
import { TopPageComponentProps } from "./TopPageComponent.props";

export const TopPageComponent = ({
  page,
  products,
  firstCategory,
}: TopPageComponentProps): JSX.Element => {
  const [{ products: sortedProducts, sort }, dispathSort] = useReducer(sortReducer, {
    products,
    sort: SortEnum.Rating,
  });

  const setSort = (sort: SortEnum) => {
    dispathSort({ type: sort });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Htag tag="h1">{page.title}</Htag>
        {products && (
          <Tag color="grey" size="medium">
            {products.length}
          </Tag>
        )}
        <Sort sort={sort} setSort={setSort} />
      </div>
      <div>{products && products.map((p) => <Product key={p._id} product={p} />)}</div>

      <div className={styles.hhTitle}>
        <Htag tag="h2">Вакансии - {page.category}</Htag>
        {products && (
          <Tag color="red" size="medium">
            hh.ru
          </Tag>
        )}
      </div>

      {firstCategory == TopLevelCategory.Courses && page.hh && <HhData {...page.hh} />}
      {page.advantages && page.advantages.length > 0 && (
        <>
          <Htag tag="h2">Преимущества</Htag>
          <Advantages advantages={page.advantages} />
        </>
      )}
      {page.seoText && (
        <div className={styles.seo} dangerouslySetInnerHTML={{ __html: page.seoText }} />
      )}
      <Htag tag="h2">Получаемые навыки</Htag>
      {page.tags.map((t) => (
        <Tag key={t} color="primary">
          {t}
        </Tag>
      ))}
    </div>
  );
};
