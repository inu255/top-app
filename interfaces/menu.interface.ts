export interface PageItem {
  alias: string;
  title: string;
  id: string;
  category: string;
}

export interface MenuItem {
  _id: {
    secondCategory: string;
  };
  pages: PageItem[];
}
