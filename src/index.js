import './index.css';
import reportWebVitals from './reportWebVitals';
import {reRenderEntireTree} from "./render";
import state from "./redux/state";

reRenderEntireTree(state);

reportWebVitals();
