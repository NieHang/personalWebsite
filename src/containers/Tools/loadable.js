import React from 'react'
import Loadable from 'react-loadable';
import ReactLoading from 'react-loading';


const LoadableComponent = Loadable({
  loader: () => import('./'),
  loading() {
    return (
      <ReactLoading className='loading' type='bars' color="#ffffc2" height={'10vw'} width={'10vw'}/>
    )
  }
});

export default () => <LoadableComponent />;