import { useState } from "react"

const useXState = (value) => {
   const [state, setState] = useState(value)
   return {
      get value() {
         return state
      },
      set value(v) {
         setState(v)
      }
   }
}

export default useXState