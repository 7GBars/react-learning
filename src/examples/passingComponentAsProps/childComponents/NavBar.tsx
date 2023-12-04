import React, {ReactNode} from 'react';

function NavBar(props: { userLink: ReactNode }) {
  return (
    <div>
      {props.userLink}
    </div>
  );
}

export default NavBar;