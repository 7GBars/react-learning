import React, {PropsWithChildren} from 'react';

function LinkT(props: PropsWithChildren<{href: string}>) {
  return (
    <a href={props.href}>
      {props.children}
    </a>
  );
}

export default LinkT;