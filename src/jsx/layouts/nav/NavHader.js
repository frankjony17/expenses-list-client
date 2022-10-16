import React, { Fragment, useContext, useState } from "react";
/// React router dom
import { Link } from "react-router-dom";
import { ThemeContext } from "../../../context/ThemeContext";


const NavHader = () => {
  const [toggle, setToggle] = useState(false);
  const { navigationHader, openMenuToggle, background } = useContext(ThemeContext);

  return (
    <div className="nav-header">
      <Link to="/dashboard" className="brand-logo">
        {background.value === "dark" || navigationHader !== "color_1" ? (
			<Fragment>
                <svg className="logo-abbr" width="256" height="256" version="1.1" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <filter id="filter29430" x="-.0008151" y="-.00080734" width="1.0016" height="1.0016">
                            <feGaussianBlur stdDeviation="0.015137247"/>
                        </filter>
                    </defs>
                    <g transform="matrix(5.5133 0 0 5.4046 -289.82 -435.67)" fill="#00a15d">
                        <g>
                            <ellipse cx="75.472" cy="104.38" rx="14.368" ry="14.122" fill="#00a15d" opacity=".885"/>
                            <ellipse cx="70.142" cy="99.639" rx="3.2981" ry="3.2879" fill="#fff" opacity=".885"/>
                            <ellipse cx="80.891" cy="108.83" rx="3.2981" ry="3.2879" fill="#fff" opacity=".885"/>
                            <ellipse cx="70.13" cy="99.666" rx="1.4207" ry="1.4153" fill="#00a15d" opacity=".885"/>
                            <ellipse cx="80.996" cy="108.94" rx="1.4207" ry="1.4153" fill="#00a15d" opacity=".885"/>
                            <path d="m69.098 109.7 11.752-12.935c0.95321-0.14828 1.6988 0.03534 1.6789 1.4425l-12.517 13.769c-1.0181 0.0772-1.8628-0.0681-1.67-1.5433z" fill="#fff"/>
                            <path d="m59.443 88.665 1.9695-1.8076 1.3337-1.0234 1.2204-0.87867 1.5127-0.84774 1.6091-0.66171 1.6106-0.56662 2.0696-0.54209 1.4433-0.25444 2.7591-0.23126 2.9861 0.1494 3.5466 0.62913 2.3008 0.8187 1.7337 0.86523 1.7787 0.94855 1.7932 1.3093 1.6554 1.3819 1.3835 1.4535 0.91792 1.0845 1.0092 1.4337 0.87327 1.3392 0.74644 1.374 0.60173 1.3261 0.51126 1.5062 0.40132 1.3517 0.56004 2.3147 0.20491 2.5026-0.08906 2.9734-0.18243 1.5712-0.51416 2.1885-0.71796 2.0822-0.91022 1.9643-1.3684 2.2644-1.5488 2.074-1.9879 2.0026-2.2786 1.9345-1.7774 1.1475-2.3779 1.2018-2.4606 0.90918-2.5248 0.65356-3.8542 0.24341-3.7943-0.291-3.341-0.82797-2.0289-0.78875-1.9286-1.0851-2.0979-1.3135-1.2029-0.97571-1.4354-1.4516-0.03149 4.2707c-0.75945 0.28677-1.5189 0.34324-2.2784-0.0136l-0.05015-8.3789 8.435-0.035c0.25624 0.84351 0.1903 1.6252 0.0024 2.3836l-4.7723 0.0243 1.0322 0.94352 1.1401 0.97249 1.8854 1.3101 2.4985 1.2536 2.2975 0.82135 2.7837 0.58782 2.7011 0.26135 4.0024-0.36692 2.8104-0.76797 2.9052-1.1708 2.6608-1.6821 2.971-2.8838 1.7419-2.1603 1.6775-3.1708 1.1691-3.3913 0.44284-2.843-0.01278-4.3718-0.48814-2.768-1.2182-3.0005-1.9214-3.3613-2.1855-2.6685-2.0289-1.6488-3.0153-1.9182-3.1224-1.2814-2.9303-0.63476-2.9748-0.35343-3.5728 0.30064-2.5194 0.54782-3.3167 1.3369s-1.7397 1.142-1.8683 1.142-2.7978 2.1137-2.7978 2.1137l-0.81123 0.71879c-1.437-0.07907-1.4593-0.79484-1.3518-1.569z" fill="#00a15d"/>
                            <path transform="scale(.26458)" d="m212.68 349.85-0.0469 0.0723-4.541 8.9082-2.8965 7.6543-2.1367 8.0449-0.90625 5.6621c4.3503 2.5918 5.9492 2.1638 8.9746 0.0629l0.0684-0.82227 3.4824-13.104 5.459-12.41 0.89453-1.2891c-0.91836-4.4098-7.0081-5.5621-8.3516-2.7797zm-1.7988 48.109c-2.894-1.6987-5.7996-2.3694-9.0312 0.1933l0.084 1.9726 1.4551 9.3789 2.7422 8.5723 1.8828 4.9863 0.43359 1.0254c0.0118-3e-3 7e-3 -3e-3 0.0195-6e-3 1.6081 3.8936 9.0259 0.0996 7.5726-2.8694 5e-3 -0.0695 0.0162-0.13748 0.0352-0.20898-1e-5 -1e-3 2e-5 -3e-3 0-4e-3 -9e-5 -8e-3 1.4e-4 -0.0154 0-0.0234l-1.9355-3.9297-2.5957-10.301zm5.1934 23.041c1e-3 -4e-3 -19.931-21.158 6e-3 -0.0137l-2e-3 -4e-3c-1e-3 7e-3 -3e-3 0.0107-4e-3 0.0176z" fill="#00a15d"/>
                        </g>
                    </g>
                </svg>

				<div className="brand-title">
					<h2 className="">Expenses List</h2>
					<span className="brand-sub-title">Shopping List much better</span>
				</div>
			</Fragment>
        ) : (
			<Fragment>
				<svg className="logo-abbr" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
					<rect className="react-logo" width="60" height="60" rx="30" fill="#00A15D"/>
					<mask id="mask0" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="60" height="60">
					<rect className="react-logo" width="60" height="60" rx="30" fill="#00A15D"/>
					</mask>
					<g mask="url(#mask0)">
					<path d="M130 51.3929L126.5 45.2109C123 38.9626 116 26.6981 109 23.1017C102 19.5715 95 24.875 88 29.3002C81 33.6591 74 37.3053 67 39.0124C60 40.7857 53 40.7857 46 36.3606C39 32.0017 32 23.0519 25 17.7981C18 12.4448 11 10.7874 4 16.9197C-3 23.0519 -10 37.3053 -17 40.7857C-24 44.2662 -31 37.3053 -34.5 33.7088L-38 30.1786V62H-34.5C-31 62 -24 62 -17 62C-10 62 -3 62 4 62C11 62 18 62 25 62C32 62 39 62 46 62C53 62 60 62 67 62C74 62 81 62 88 62C95 62 102 62 109 62C116 62 123 62 126.5 62H130V51.3929Z" fill="url(#paint0_linear)"/>
					<path d="M-54 55.7741L-50.5 50.9799C-47 46.1343 -40 36.623 -33 33.8339C-26 31.0962 -19 35.2092 -12 38.641C-5 42.0213 2 44.849 9 46.1728C16 47.5481 23 47.5481 30 44.1164C37 40.736 44 33.7954 51 29.721C58 25.5694 65 24.2841 72 29.0398C79 33.7954 86 44.849 93 47.5481C100 50.2473 107 44.849 110.5 42.0599L114 39.3222V64H110.5C107 64 100 64 93 64C86 64 79 64 72 64C65 64 58 64 51 64C44 64 37 64 30 64C23 64 16 64 9 64C2 64 -5 64 -12 64C-19 64 -26 64 -33 64C-40 64 -47 64 -50.5 64H-54V55.7741Z" fill="url(#paint1_linear)"/>
					</g>
					<defs>
					<linearGradient id="paint0_linear" x1="46" y1="13" x2="46" y2="62" gradientUnits="userSpaceOnUse">
					<stop  offset="0" stopColor="#23D58A"/>
					<stop offset="1" stopColor="#00A15D"/>
					</linearGradient>
					<linearGradient id="paint1_linear" x1="30" y1="26" x2="30" y2="64" gradientUnits="userSpaceOnUse">
					<stop offset="0" stopColor="#FFED4B"/>
					<stop offset="1" stopColor="#FF8C4B"/>
					</linearGradient>
					</defs>
				</svg>
				<div className="brand-title">
					<h2 className="">Workload</h2>
					<span className="brand-sub-title">Project Management Admin</span>
				</div>
			</Fragment>
        )}
      </Link>

      <div
        className="nav-control"
        onClick={() => {
          setToggle(!toggle);
          openMenuToggle();
        }}
      >
        <div className={`hamburger ${toggle ? "is-active" : ""}`}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>
    </div>
  );
};

export default NavHader;
