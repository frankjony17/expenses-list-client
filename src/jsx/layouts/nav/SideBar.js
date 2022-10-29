/// Menu
import MetisMenu from "metismenujs";
import React, { Component, useContext, useEffect , useState} from "react";
/// Scroll
import PerfectScrollbar from "react-perfect-scrollbar";
/// Link
import { Link } from "react-router-dom";
import {useScrollPosition} from "@n8tb1t/use-scroll-position";
import { connect, useDispatch } from 'react-redux';

import { ThemeContext } from "../../../context/ThemeContext";
import { changeThemeAction } from '../../../store/actions/AuthActions';


class MM extends Component {
	componentDidMount() {
		this.$el = this.el;
		this.mm = new MetisMenu(this.$el);
	}
    componentWillUnmount() {}

    render() {
        return (
            <div className="mm-wrapper">
                <ul className="metismenu" ref={(el) => (this.el = el)}>
                    {this.props.children}
                </ul>
            </div>
        );
    }
}

const SideBar = () => {
    const { iconHover, sideBarPosition, headerPosition, sideBarLayout, } = useContext(ThemeContext);

    useEffect(() => {
        let btn = document.querySelector(".nav-control");
        let aaa = document.querySelector("#main-wrapper");

        function toggleFunc() {
          return aaa.classList.toggle("menu-toggle");
        }
        btn.addEventListener("click", toggleFunc);

        //sidebar icon Heart blast
        let handleHeartBlast = document.querySelector('.heart');

        function heartBlast() {
            return handleHeartBlast.classList.toggle("heart-blast");
        }
        handleHeartBlast.addEventListener('click', heartBlast);

    }, []);

    // For scroll
    const [hideOnScroll, setHideOnScroll] = useState(true)

    useScrollPosition(({ prevPos, currPos }) => {
          const isShow = currPos.y > prevPos.y
          if (isShow !== hideOnScroll) setHideOnScroll(isShow)
        },
        [hideOnScroll]
    );

    /// Path
    let path = window.location.pathname;
    path = path.split("/");
    path = path[path.length - 1];

    /// Active menu
    let dashBoard = [
        "",
        "messages",
        "latest-activity",
        "task"
    ],
    products = [
        "products-my",
        "products-system",
        "products-type",
        "products-category",
    ],
    shopping = [
        "shopping-lists"
    ],
    themes = [
        "dashboard"
    ];

    const dispatch = useDispatch();

    const changeTheme = (theme) => {
        dispatch(changeThemeAction({ value: theme, label: theme.charAt(0).toUpperCase() + theme.slice(1) }));
    }

    return (
    <div
      className={`dlabnav ${iconHover} ${
        sideBarPosition.value === "fixed" &&
        sideBarLayout.value === "horizontal" &&
        headerPosition.value === "static"
          ? hideOnScroll > 120
            ? "fixed"
            : ""
          : ""
      }`}
    >
      <PerfectScrollbar className="dlabnav-scroll">
        <MM className="metismenu" id="menu">
		  <li className={`${dashBoard.includes(path) ? "mm-active" : ""}`}>
            <Link className="has-arrow" to="#" >
              <i className="fas fa-chart-line"></i>
              <span className="nav-text">Dashboard</span>
            </Link>
            <ul >
              <li><Link className={`${path === "messages" ? "mm-active" : ""}`} to="/messages">Messages</Link></li>
              <li><Link className={`${path === "latest-activity" ? "mm-active" : ""}`} to="/latest-activity">Latest Activity</Link></li>
              <li><Link className={`${path === "task" ? "mm-active" : ""}`} to="/task">Task</Link></li> 
            </ul>
          </li>
			
          <li className={`${products.includes(path) ? "mm-active" : ""}`}>
            <Link className="has-arrow ai-icon" to="#" >
              <i className="fas fa-clipboard-list"></i>
              <span className="nav-text">Products</span>
            </Link>
            <ul>
              <li><Link className={`${path === "products-my" ? "mm-active" : ""}`} to="/products-my">My products</Link></li>
              <li><Link className={`${path === "products-system" ? "mm-active" : ""}`} to="/products-system">System products</Link></li>
              <li><Link className={`${path === "products-type" ? "mm-active" : ""}`} to="/products-type">Product Type</Link></li>
              <li><Link className={`${path === "products-category" ? "mm-active" : ""}`} to="/products-category">Product Category</Link></li>
            </ul>
          </li>
          <li className={`${shopping.includes(path) ? "mm-active" : ""}`}>
            <Link className="has-arrow ai-icon" to="#" >
              <i className="fas fa-shopping-cart"></i>
              <span className="nav-text">Shopping</span>
            </Link>
            <ul >
              <li><Link className={`${path === "shopping-lists" ? "mm-active" : ""}`} to="/shopping-lists">Lists</Link></li>
            </ul>
          </li>
            <li className={`${themes.includes(path) ? "mm-active" : ""}`}>
                <Link className="has-arrow ai-icon" to="#" >
                    <i className="fab fa-affiliatetheme"></i>
                    <span className="nav-text">Themes</span>
                </Link>
                <ul >
                    <li onClick={() => changeTheme("light")}><Link className={`${path === "dashboard" ? "mm-active" : ""}`} to="/dashboard-light"> Light</Link></li>
                    <li onClick={() => changeTheme("dark")}><Link className={`${path === "dashboard" ? "mm-active" : ""}`} to="/dashboard-dark"> Dark</Link></li>
                </ul>
            </li>
        </MM>
		<div className="copyright">
			<p className="fs-12">Made with <span className="heart"></span> by FkSolutions</p>
		</div>
      </PerfectScrollbar>
    </div>
    );
};

const mapStateToProps = (state) => {
    return {
        themeContext: state.auth.themeContext,
    };
};

export default connect(mapStateToProps)(SideBar);
