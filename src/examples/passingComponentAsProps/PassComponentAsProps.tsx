import React from 'react';
import LinkT from "./childComponents/LinkT";
import PageLayout from "./childComponents/PageLayout";

const TestLink = (props: {href: string}) => <a href={props.href}>link like component</a>;

export function Page(props: { href: string }) {
  const linkRef = props.href;
  const userLink = (
    <LinkT href={linkRef}>
      test link
    </LinkT>
  );
  return <PageLayout userLink={userLink} testLink={<TestLink href={'https://react.dev/reference/react/createContext'}/>}/>;
}


