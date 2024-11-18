import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

export default function User1List(){

    const navigate = useNavigate();
    const [users, setUsers] = useState([]);

    // 컴포넌트 생명 주기를 제어하는 훅
    useEffect(()=>{
        axios.get('http://localhost:8080/ch09/user1')
        .then((res)=>{
            console.log(res.data);
            setUsers(res.data);
        })
        .catch()

    },[]);
    // 의존성(반응형) 배열을 빈 배열로 선언하면 컴포넌트가 처음 마운트 될 때 한 번만 실행

    const modifyMove = (user) => {
        navigate(`/user1/modify?uid=${user.uid}`);
    }

    const deleteProc = (user) => {
        axios.delete(`http://localhost:8080/ch09/user1/${user.uid}`)
        .then((res)=>{
            console.log(res.data);
            if(res.data==="success"){
                // 삭제된 사용자를 users 배열에서 제거
                setUsers(users.filter((u) => u.uid !== user.uid));
            }
        })
        .catch((err)=>console.error(err))
    }

    return(
        <div className="User1List">
        <span>User1 목록</span>
        <table border={1}>
            <thead>
                <tr>
                    <th>아이디</th>
                    <th>이름</th>
                    <th>생년월일</th>
                    <th>나이</th>
                    <th>휴대폰</th>
                    <th>관리</th>
                </tr>
            </thead>
            <tbody>
            {users.map((user) => (
                <tr className="user" key={user.uid}>
                    <td>{user.uid}</td>
                    <td>{user.name}</td>
                    <td>{user.birth}</td>
                    <td>{user.age}</td>
                    <td>{user.hp}</td>
                    <td>
                        <button onClick={()=>modifyMove(user)}>수정</button>
                        <button onClick={()=>deleteProc(user)}>삭제</button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    )
}