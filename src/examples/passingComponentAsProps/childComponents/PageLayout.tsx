import React, {ReactNode} from 'react';
import NavBar from "./NavBar";

function PageLayout(props: {userLink: ReactNode}) {
  return (
    <div>
      <NavBar userLink={props.userLink}/>
    </div>
  );
}

export default PageLayout;