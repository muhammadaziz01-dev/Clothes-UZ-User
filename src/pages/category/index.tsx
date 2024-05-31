
import { useParams } from "react-router-dom"
import { useEffect , useState } from "react"
function Index() {
  const {name} = useParams()
  return (
    <div>Category product test {name}</div>
  )
}

export default Index