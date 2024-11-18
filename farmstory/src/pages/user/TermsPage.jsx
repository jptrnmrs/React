import Terms from "../../components/user/terms";
import DefaultLayout from "../../layouts/DefaultLayout";


export default function TermsPage(){
    return(
        <DefaultLayout>
            <div id="user">
                <Terms />
            </div>
        </DefaultLayout>
    );
}