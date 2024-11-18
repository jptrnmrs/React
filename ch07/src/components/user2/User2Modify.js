import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function User2Modify(){
    const navigate = useNavigate();

    const location = useLocation();
    const data = location.state && location.state.user;
    const [user, setUser] = useState(data||[]);

    const changeHandler = (e) => {
        e.preventDefault();
        setUser(prevUser => ({...prevUser, [e.target.name]: e.target.value}))
    }
    
    const submitHandler =(e) =>{
        e.preventDefault();
        axios.put("http://127.0.0.1:8080/ch09/user2",user)
        .then((res) =>{
            console.log(res.data);
            navigate('/user2/list'); //redirect
        })
        .catch((err) => console.error(err))
    }

    return(
        <div className="User2Modify">
        <span>User2 수정</span>
        <form onSubmit={submitHandler}>
            <table border={1}>
                <tr>
                    <td>아이디</td>
                    <td><input type="text" name="uid" value={user.uid} readOnly/></td>
                </tr>
                <tr>
                    <td>이름</td>
                    <td><input type="text" name="name" value={user.name} onChange={changeHandler}/></td>
                </tr>
                <tr>
                    <td>주소</td>
                    <td><input type="text" name="addr" value={user.addr} onChange={changeHandler}/></td>
                </tr>
                <tr>
                    <td>생년월일</td>
                    <td>
                        <input type="date" name="birth" value={user.birth} onChange={changeHandler}/>
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
                        <input type="submit" value={"등록하기"}/>
                    </td>
                </tr>
            </table>
        </form>
        </div>
    )
}