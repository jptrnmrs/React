import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function User1Modify(){
    const navigate = useNavigate();

    const [searchParms] = useSearchParams();
    const uid = searchParms.get("uid");

    const [user, setUser] = useState({
        uid: "",
        name: "",
        birth:"",
        hp: "",
        age: 0
    })

    useEffect(()=>{
        axios.get(`http://localhost:8080/ch09/user1/${uid}`)
        .then((res)=>{
            console.log(res.data);
            setUser(res.data);
        })
        .catch((err) => console.error(err))

    },[uid]);
    
    const changeHandler = (e) => {
        e.preventDefault();
        setUser({...user, [e.target.name]: e.target.value})
    }

    
    const submitHandler =(e) =>{
        e.preventDefault();
        axios.put("http://127.0.0.1:8080/ch09/user1",user)
        .then((res) =>{
            console.log(res.data);
            navigate('/user1/list'); //redirect
        })
        .catch((err) => console.error(err))
    }

    return(
        <div className="User1Modify">
        <span>User1 수정</span>
        <form onSubmit={submitHandler}>
            <table border={1}>
                <tr>
                    <td>
                        아이디
                    </td>
                    <td>
                        <input type="text" name="uid" value={user.uid} readOnly/>
                    </td>
                </tr>
                <tr>
                    <td>
                        이름
                    </td>
                    <td>
                        <input type="text" name="name" value={user.name} onChange={changeHandler}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        생년월일
                    </td>
                    <td>
                        <input type="text" name="birth" value={user.birth} onChange={changeHandler}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        휴대폰
                    </td>
                    <td>
                        <input type="text" name="hp" value={user.hp} onChange={changeHandler}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        나이
                    </td>
                    <td>
                        <input type="text" name="age" value={user.age} onChange={changeHandler}/>
                    </td>
                </tr>
                <tr>
                    <td colSpan={2} align="right">
                        <input type="submit" value={"수정하기"}/>
                    </td>
                </tr>
            </table>
        </form>
        </div>
    )
}