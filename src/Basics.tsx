// type UserProps = {
//   username: string;
//   status: Boolean;
// };
// export default function Basics({ username, status }: UserProps) {
//   {
//     if (status === true) {
//       return <h2>{username} is Online</h2>;
//     } else {
//       return <h2>{username} is Offline</h2>;
//     }
//   }
// }
import { useState } from "react"

export default function Basics(){
    
    const [count, setCount] = useState<String>('');
    

    return(
        <div>
            <input type="text" name="Interprete" id="" onChange={(e)=>setCount(e.target.value)} />
            {count}
        </div>
    )
}