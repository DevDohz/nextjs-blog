import { NextComponentType, NextPageContext } from "next";
import { Show } from "../../../components/topbook/Show";
import { TopBook } from "../../../types/TopBook";
import { fetch } from "../../../utils/dataAccess";

interface Props {
  topbook: TopBook;
}

const Page: NextComponentType<NextPageContext, Props, Props> = ({
  topbook,
}) => {
  return <Show topbook={topbook} />;
};

Page.getInitialProps = async ({ asPath }: NextPageContext) => {
  const topbook = await fetch(asPath);

  return { topbook };
};

export default Page;
