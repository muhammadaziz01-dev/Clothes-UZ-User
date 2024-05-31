
import { useParams } from "react-router-dom"
import { useEffect ,  } from "react"

import useCategoryStore from "@stor-category";
import {Card} from "@ui"
function Index() {
  const {name} = useParams()
  const {getCategoryList , categoryProduct , isLoader} = useCategoryStore();
  // const [params] = useState({page:1, limit:8 , name:name});

  useEffect(()=>{
    getCategoryList({page:1, limit:8 , name:name})
  }, [ name ])
  return <>
  <div className="orginal-container">
      <h1 className="py-3">Category products name : {name}</h1>

      <div className="grid py-[10px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {
              isLoader ? <div className="loader">Loading ...</div> : 
              
                categoryProduct ? categoryProduct?.map((el , index)=>{
                  return <Card key={index}  data={el}/>
                }) : <h1>{name} bu nom ostida mahsulot topilmadi</h1>
              
            }
      </div>
  </div>
  </>
}

export default Index