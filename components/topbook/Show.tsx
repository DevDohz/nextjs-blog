import { FunctionComponent, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { fetch } from "../../utils/dataAccess";
import { ReferenceLinks } from "../common/ReferenceLinks";
import { TopBook } from "../../types/TopBook";

interface Props {
  topbook: TopBook;
}

export const Show: FunctionComponent<Props> = ({ topbook }) => {
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this item?")) return;

    try {
      await fetch(topbook["@id"], { method: "DELETE" });
      router.push("/top_books");
    } catch (error) {
      setError("Error when deleting the resource.");
      console.error(error);
    }
  };

  return (
    <div>
      <div>
        <Head>
          <title>{`Show TopBook ${topbook["@id"]}`}</title>
          <meta
            property="og:title"
            content={`Show TopBook ${topbook["@id"]}`}
            key="title"
          />
        </Head>
      </div>
      <h1>{`Show TopBook ${topbook["@id"]}`}</h1>
      <table className="table table-responsive table-striped table-hover">
        <thead>
          <tr>
            <th>Field</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">id</th>
            <td>{topbook["id"]}</td>
          </tr>
          <tr>
            <th scope="row">title</th>
            <td>{topbook["title"]}</td>
          </tr>
          <tr>
            <th scope="row">author</th>
            <td>{topbook["author"]}</td>
          </tr>
          <tr>
            <th scope="row">part</th>
            <td>{topbook["part"]}</td>
          </tr>
          <tr>
            <th scope="row">place</th>
            <td>{topbook["place"]}</td>
          </tr>
          <tr>
            <th scope="row">borrowCount</th>
            <td>{topbook["borrowCount"]}</td>
          </tr>
        </tbody>
      </table>
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      <Link href="/top_books">
        <a className="btn btn-primary">Back to list</a>
      </Link>{" "}
      <Link href={`${topbook["@id"]}/edit`}>
        <a className="btn btn-warning">Edit</a>
      </Link>
      <button className="btn btn-danger" onClick={handleDelete}>
        <a>Delete</a>
      </button>
    </div>
  );
};
