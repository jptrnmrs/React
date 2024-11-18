import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function User1Register(){
    const navigate = useNavigate();


    const [user, setUser] = useState({
        uid: "",
        name: "",
        birth:"",
        hp: "",
        age: 0
    })
    
    const changeHandler = (e) => {
        e.preventDefault();
        setUser({...user, [e.target.name]: e.target.value})
    }

    const submitHandler =(e) =>{
        e.preventDefault();
        fetch("http://127.0.0.1:8080/ch09/user1",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user),
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            navigate('/user1/list'); //redirect
        })
        .catch((err) => console.error(err))
    }


    return(
        <div className="User1Register">
        <span>User1 등록</span>

        <form onSubmit={submitHandler}>
            <table border={1}>
                <tr>
                    <td>
                        아이디
                    </td>
                    <td>
                        <input type="text" name="uid" value={user.uid} onChange={changeHandler}/>
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
                    <td colSpan={2} align="left">
                        <input type="submit" value={"등록하기"}/>
                    </td>
                </tr>
            </table>
        </form>
        </div>
    )
}