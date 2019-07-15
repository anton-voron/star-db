import React from 'react';

const withChildFunction = (fn) => (Wrapperd) => {
  return (props) => {

    return(
      <Wrapperd {...props}>
        {fn}
      </Wrapperd>
    )
  }
};

export default withChildFunction;