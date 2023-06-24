import { Routes, Route, Link } from "react-router-dom";
import AppLayout from "./common/AppLayout";
import Home from "./pages/home";


export default function Router() {
  return (
    <Routes>
        <Route element={<AppLayout/>}>
            <Route index element={<Home/>}/>
        </Route>
    </Routes>
  )
}
