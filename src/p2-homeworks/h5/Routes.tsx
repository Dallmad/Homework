import React from 'react'
import {Route, Routes, useRoutes} from "react-router-dom";
import PreJunior from "./pages/PreJunior";
import Error404 from "./pages/Error404";
import {Junior} from "./pages/Junior";
import {Junior2} from "./pages/Junior+";

export const PATH = {
    PRE_JUNIOR: '/Pre-Junior',
    JUNIOR: '/Junior',
    JUNIOR2: '/Junior+'
}

function Routes1() {
    return (
        <div>

            {/*Switch выбирает первый подходящий роут*/}
            <Routes>
            {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
            {/*exact нужен чтоб указать полное совподение (что после '/' ничего не будет)*/}
            <Route path={'/'} element={<PreJunior/>}/>
            <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
            <Route path={PATH.JUNIOR} element={<Junior/>}/>
            <Route path={PATH.JUNIOR2} element={<Junior2/>}/>

            {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
            <Route path={'*'} element={<Error404/>}/>

            </Routes>

        </div>
    )
}

export default Routes1
