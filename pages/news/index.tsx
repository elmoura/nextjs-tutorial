import Link from "next/link";
import { Fragment } from "react";

export default function News() {
  return (
    <Fragment>
      <h1>News page</h1>
      <ul>
        <Link href={"/news/oi"}>
          <li>NextJS is a great framework</li>
        </Link>

        <Link href={"/news/oi"}>
          <li>Something else</li>
        </Link>
      </ul>
    </Fragment>
  );
}
