import react,{useState} from "react";
function PasswordChecklist(){
    const [password,setPassword]=useState("")
    const rules={
        length:password.length>=8,
        uppercase:/[A-Z]/.test(password),
        number:/[0-9]/.test(password),
        special:/[^A-Za-z0-9]/.test(password)

    }

    return(
        <div style={{width:300,margin:"50px auto",fontFamily:"Arial"}}>
            <h3>Password rules</h3>
            <input
            type="password"
            placeholder="Enter the password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            style={{width:"100%",padding:8,marginBottom:10}}
            />
            <ul style={{listStyle:"none",padding:0}}>
                <li style={{color:rules.length?"green":"red"}}>
                    minimum 8 charcters
                </li>
                <li style={{color:rules.uppercase?"green":"red"}}>
                    minimum 1 uppercase
                </li>
                <li style={{color:rules.number?"green":"red"}}>
                    minimum 1 number
                </li>
                <li style={{color:rules.special?"green":"red"}}>
                    minimum 1 special character
                </li>
                
            </ul>

        </div>
    )
    
}
export default PasswordChecklist;