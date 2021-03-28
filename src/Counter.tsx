import React, { useState } from 'react'

const Counter: React.FC<{}>  = () => {
  // useStateはジェネリクス型で型を決める
  // useStateに型制約を追加するとvalue, setValueにも型制約が効く
  const [value, setValue] = useState<number>(0)
  
  const increment = () => {
    setValue((prevState) => prevState + 1)
  }

  const decrement =() => {
    if (value === 0) return

    setValue((prevState) => prevState - 1)
  }

  return (
    <div>
      <div>value: { value }</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    </div>
  )
}

export default Counter