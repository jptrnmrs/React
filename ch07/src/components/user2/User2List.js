import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const fetchUsers = async () => {
    const res = await axios.get('http://localhost:8080/ch09/user2');
    return res.data;
}

const deleteUser = async (user) => {
    const res = await axios.delete(`http://localhost:8080/ch09/user2/${user.uid}`);
    return res.data;
}

export default function User2List(){
    const navigate = useNavigate();

    // react-query 사용자 훅
    const queryClient = useQueryClient();

    // react-query fetch함수 정의
    const {data: users, isLoading, isError} = useQuery({
        queryKey: ["users"],
        queryFn: fetchUsers,
    });

    // react-query 삭제 mutation 함수 정의
    const deleteMutation = useMutation({
        mutationFn: deleteUser,
        onSuccess: ()=> {
            queryClient.invalidateQueries(["users"]);
        },
        onError: (err) => {
            console.error("삭제 실패:", err);
            alert("사용자 삭제 실패");
        },
    });

    const modifyMove = (user) => {
        navigate(`/user2/modify`, { state: { user } });
    }
    const deleteProc = (user) =>{
        deleteMutation.mutate(user);
    }

    return(
        <div className="User2List">
        <span>User2 목록</span>
        <table border={1}>
            <thead>
                <tr>
                    <th>아이디</th>
                    <th>이름</th>
                    <th>주소</th>
                    <th>생년월일</th>
                    <th>나이</th>
                    <th>휴대폰</th>
                    <th>관리</th>
                </tr>
            </thead>
            <tbody>
            {users?.map((user) => (
                <tr className="user" key={user.uid}>
                    <td>{user.uid}</td>
                    <td>{user.name}</td>
                    <td>{user.addr}</td>
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