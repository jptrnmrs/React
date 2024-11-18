import Register from "../../components/user/Regiseter";
import DefaultLayout from "../../layouts/DefaultLayout";

export default function RegisterPage(){
    return(
        <DefaultLayout>
            <div id="user">
                <Register />
            </div>
        </DefaultLayout>
    )
}