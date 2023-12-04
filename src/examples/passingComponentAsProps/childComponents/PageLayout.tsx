import React, {ReactNode} from 'react';
import NavBar from "./NavBar";

function PageLayout(props: {userLink: ReactNode, testLink: ReactNode}) {
  return (
    <div>
      <NavBar userLink={props.userLink} testLink={props.testLink}/>
    </div>
  );
}

export default PageLayout;