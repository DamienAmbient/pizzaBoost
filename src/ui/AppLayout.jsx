import { Outlet } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";

function AppLayout() {
    return (
        <div>
            <Header></Header>

            <main>
                <Outlet></Outlet>
            </main>

            <CartOverview></CartOverview>
        </div>
    );
}

export default AppLayout;
