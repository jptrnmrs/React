import DefaultLayout from "../../layouts/DefaultLayout";
import BoardLayout from "../../layouts/BoardLayout";
import List from "../../components/board/List";

export default function ListPage(){
    return (
    <DefaultLayout>
        <BoardLayout>
            <List />
        </BoardLayout>
    </DefaultLayout>
    );
}