import DefaultLayout from "../../layouts/DefaultLayout";
import BoardLayout from "../../layouts/BoardLayout";
import View from "../../components/board/View";

export default function ViewPage(){
    return (
    <DefaultLayout>
        <BoardLayout>
            <View />
        </BoardLayout>
    </DefaultLayout>
    );
}