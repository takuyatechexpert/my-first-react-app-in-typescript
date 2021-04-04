import React, { useEffect, useRef, useState } from 'react'

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

  // useRefはレンダリングの回数を扱う為に使う
  const renderTimes = useRef(0)

  // useEffectはレンダリングされるたびに実行される
  // 第一引数に関数を渡すと実行してくれる
  // 第二引数にはread onlyなarrayを指定できる
  useEffect(() => {
    renderTimes.current += 1
  })
  // useRefにRefObject<T>を型として定義している
  // null! ・・ non null アサーションオペレータ
  const ref = useRef<HTMLInputElement>(null!)
  const focusInput = () => {
    ref.current.focus()
    // オプショナルチェイニング
    // ref.current?.focus()
  }

  return (
    <div>
      <div>value: { value }</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <div>This component was re-rendered { renderTimes.current } times!</div>
      <input ref={ref} type="text" />
      <button onClick={focusInput}>Click Me!</button>
    </div>
  )
}

export default Counter