import { Button } from "../ui/Button";

export function SettingsCard() {
  return (
    <div className=" bg-white/10 h-full rounded-2xl "> 
      <div className="flex w-full justify-between p-4">
       <h1 className="text-lg text-white font-bold ">
        Application Settings
       </h1>
       <Button text="Save Changes" size="sm" onClick={()=>{}} variant="primary" />
      </div>
    </div>
  );
}
