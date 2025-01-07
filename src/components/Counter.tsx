import { useState } from "react"
import classes from "./Counter.module.scss"

export default function Counter() {

    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {

        if(count == 0) {
            setCount(0)
        } else{
            setCount(count - 1)
        }
    }

  return (
    <div>
        <h1>{count}</h1>
        <button className={classes.btn} onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
    </div>
  )
}
