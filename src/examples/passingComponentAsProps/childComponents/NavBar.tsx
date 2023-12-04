import React, {ReactNode} from 'react';

function NavBar(props: { userLink: ReactNode, testLink: ReactNode }) {
  return (
    <div>
      {props.userLink}
      <br/>
      {props.testLink}
    </div>
  );
}

export default NavBar;