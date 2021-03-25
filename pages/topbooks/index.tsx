import { NextComponentType, NextPageContext } from "next";
import { List } from "../../components/topbook/List";
import { PagedCollection } from "../../types/Collection";
import { TopBook } from "../../types/TopBook";
import { fetch } from "../../utils/dataAccess";

interface Props {
  collection: PagedCollection<TopBook>;
}

const Page: NextComponentType<NextPageContext, Props, Props> = ({
  collection,
}) => <List top_books={collection["hydra:member"]} />;

Page.getInitialProps = async () => {
  const collection = await fetch("/top_books");

  return { collection };
};

export default Page;
