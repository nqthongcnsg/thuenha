import React,{Component} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Content from "./../Components/content";
import Footer from "./../Components/footer";
import Detail from "../detail/detail";
 
class DieuHuong extends Component{
    render(){
        return(
            <Router>
                    <Routes>
                        <Route path='/' element={<Content />} />
                        <Route path='/detail' element={<Detail />} />
                        
                    </Routes>
            </Router>

        );
    }
}
export default DieuHuong;