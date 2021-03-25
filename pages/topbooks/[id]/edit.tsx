import { NextComponentType, NextPageContext } from "next";
import { Form } from "../../../components/topbook/Form";
import { TopBook } from "../../../types/TopBook";
import { fetch } from "../../../utils/dataAccess";

interface Props {
  topbook: TopBook;
}

const Page: NextComponentType<NextPageContext, Props, Props> = ({
  topbook,
}) => {
  return <Form topbook={topbook} />;
};

Page.getInitialProps = async ({ asPath }: NextPageContext) => {
  const topbook = await fetch(asPath.replace("/edit", ""));

  return { topbook };
};

export default Page;
