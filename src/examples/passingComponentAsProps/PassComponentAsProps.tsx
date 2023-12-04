import React from 'react';
import LinkT from "./childComponents/LinkT";
import PageLayout from "./childComponents/PageLayout";

export function Page(props: { href: string }) {
  const linkRef = props.href;
  const userLink = (
    <LinkT href={linkRef}>
          test link
    </LinkT>
  );
  return <PageLayout userLink={userLink} />;
}


