import {useState} from "react";
function PasswordStrength(){
    const [password,setPassword]=useState("");
    const [color,setColor]=useState("");
    const [strength,setStrength]=useState("");
    const handleChange = (e) =>{
        const pwd=e.target.value;
        setPassword(pwd)
    const hasupper=/[A-Z]/.test(pwd)
    const hasnum=/[0-9]/.test(pwd)
    const special=/[^A-Za-z0-9]/.test(pwd)
    const long=pwd.length>=8
    const score=[hasupper,hasnum,special,long].filter(Boolean).length
    if(!pwd){
        setColor("gray")
        setStrength("")
    }else if (score <=2){
        setColor("red")
        setStrength("Weak")
    }else if(score===3){
        setColor("Orange")
        setStrength("Medium")
    }else{
        setColor("green")
        setStrength("Strong")
    }
     
    };
    return(
        <div style={{textAlign:"center",marginTop:"40px"}}>
            <input
            type="password"
            placeholder="enter the password"
            value={password}
            onChange={handleChange}
            style={{
                border:`3px solid ${color}`,
                padding:"8px",
                borderRadius:"5px",
                width:"200px",
                outline:"none"

            }} 
            />
            <p>{strength && `strength:${strength}`}</p>
            
        </div>
    )
}
export default PasswordStrength;