import { authStore } from "../store/authStore"
function HomePage() {
  const {isauthUSer}=authStore()
  return (
    <div className="text-white">HomePage
    <button onClick={async ()=>{
      localStorage.removeItem("token") 
      await isauthUSer()
    }}
    className="cursor-pointer "
    > 
      signout</button></div>
  )
}

export default HomePage