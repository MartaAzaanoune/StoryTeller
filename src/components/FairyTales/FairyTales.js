import {Link, Route, Switch, useRouteMatch} from "react-router-dom";
import FairyTalesType from "../FairyTalesType/FairyTalesType";

export default function FairyTales(){
    let { path, url } = useRouteMatch();
    return(
        <div className="categories">

            <ul> <h2 className="categories">Kategorie</h2>
                <li>
                    <Link to={`${url}/zwierzeta`}>Bajki o zwierzetach</Link>
                </li>
                <li>
                    <Link to={`${url}/edukacyjne`}>Bajki edukacyjne</Link>
                </li>
                <li>
                    <Link to={`${url}/czarodziejskie`}>Bajki czarodziejskie</Link>
                </li>
                <h3>Wybierz kategorię.</h3>

            </ul>
            <Switch>
                <Route exact path={path}>
                </Route>
                <Route path={`${path}/:type`}>
                    <FairyTalesType />
                </Route>
            </Switch>
        </div>
    )
}