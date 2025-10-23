import { LoaderCircle } from "lucide-react"

function PageLoader() {
  return (
    <div className="flex items-center justify-center"> 
    <LoaderCircle className="animate-spin size-10 text-orange-500"/>
    </div>
  )
}

export default PageLoader