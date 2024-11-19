import DefaultLayout from "../../layouts/DefaultLayout";
import BoardLayout from "../../layouts/BoardLayout";
import Write from "../../components/board/Write";

export default function WritePage(){
    return (
    <DefaultLayout>
        <BoardLayout>
            <Write />
        </BoardLayout>
    </DefaultLayout>
    );
}