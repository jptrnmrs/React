import DefaultLayout from "../../layouts/DefaultLayout";
import BoardLayout from "../../layouts/BoardLayout";
import Modify from "../../components/board/Modify";

export default function ModifyPage(){
    return (
    <DefaultLayout>
        <BoardLayout>
            <Modify />
        </BoardLayout>
    </DefaultLayout>
    );
}