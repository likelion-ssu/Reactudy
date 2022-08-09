import ListComponent from "./component/ListComponent";
import GlobalStyle from "./globalstyles";
import { MainLayout } from "./styles";
import { RecoilRoot } from "recoil";
function App() {
    return (
        <>
            <RecoilRoot>
                <GlobalStyle />
                <MainLayout>
                    <ListComponent />
                </MainLayout>
            </RecoilRoot>
        </>
    );
}

export default App;
