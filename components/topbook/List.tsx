import { FunctionComponent } from "react";
import Link from "next/link";
import Head from "next/head";
import ReferenceLinks from "../../components/common/ReferenceLinks";
import { TopBook } from "../../types/TopBook";

interface Props {
  top_books: TopBook[];
}

export const List: FunctionComponent<Props> = ({ top_books }) => (
  <div>
    <div>
      <Head>
        <title>TopBook List</title>
        <meta property="og:title" content="TopBook List" key="title" />
      </Head>
    </div>
    <h1>TopBook List</h1>
    <Link href="/top_books/create">
      <a className="btn btn-primary">Create</a>
    </Link>
    <table className="table table-responsive table-striped table-hover">
      <thead>
        <tr>
          <th>id</th>
          <th>id</th>
          <th>title</th>
          <th>author</th>
          <th>part</th>
          <th>place</th>
          <th>borrowCount</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {top_books &&
          top_books.length !== 0 &&
          top_books.map((topbook) => (
            <tr key={topbook["@id"]}>
              <th scope="row">
                <ReferenceLinks items={topbook["@id"]} type="topbook" />
              </th>
              <td>{topbook["id"]}</td>
              <td>{topbook["title"]}</td>
              <td>{topbook["author"]}</td>
              <td>{topbook["part"]}</td>
              <td>{topbook["place"]}</td>
              <td>{topbook["borrowCount"]}</td>
              <td>
                <ReferenceLinks
                  items={topbook["@id"]}
                  type="topbook"
                  useIcon={true}
                />
              </td>
              <td>
                <Link href={`${topbook["@id"]}/edit`}>
                  <a>
                    <i className="bi bi-pen" aria-hidden="true" />
                    <span className="sr-only">Edit</span>
                  </a>
                </Link>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  </div>
);
