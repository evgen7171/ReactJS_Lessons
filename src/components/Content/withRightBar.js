import React, {useEffect} from 'react';
import {RightBar} from "../RightBar/RightBar";
import {RIGHT_MENU_COMPONENTS} from "../RightBar/register";
import {store} from "../../index";

export function withRightBar(Component) {
    return function () {
        return <>
            {
                RIGHT_MENU_COMPONENTS.indexOf(Component.name) !== -1 ?
                    <>
                        <main className="col-6 overflow-auto"><Component/></main>
                        <aside className="col-3 border p-0 overflow-auto">
                            <RightBar componentName={Component.name}/>
                        </aside>
                    </>
                    :
                    <main className="col-9 overflow-auto"><Component/></main>
            }
        </>
    }
}


