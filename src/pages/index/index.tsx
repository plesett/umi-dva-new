import React, { useEffect, useState } from 'react';
import { Link } from 'umi';
import styles from './index.less';
import { useRequest } from '@umijs/hooks'
import { Login } from '@/api/index'

interface AppI {

}

export default (props: AppI) => {
  const [state, setstate] = useState<number>(0)

  const { data, error, loading } = useRequest<Promise<object>>(Login)

  if (error) {
    return <div>failed to load</div>
  }
  if (loading) {
    return <div>loading...</div>
  }

  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <h1>{state}</h1>
      <button onClick={() => setstate(state + 1)}>+</button>
      <button onClick={() => setstate(state - 1)}>-</button>
      <p>{JSON.stringify(data)}</p>
      <Link to="/test">
        <button>test</button>
      </Link>
    </div>
  );
}