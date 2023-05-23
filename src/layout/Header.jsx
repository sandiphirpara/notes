import { useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown, DropdownMenu, DropdownToggle } from "reactstrap";
import styles from "./Header.module.css";

const Header = () => {
    const [menu, setMenu] = useState(false);

    const handleLogout = () => {
        //dispetch logout api
        window.location.replace('/login');
    };

    return (
        <div className={styles.title_flex}>
            <Link to="/dashboard">
                <h1>Notes</h1>
            </Link>
            <div className={styles.title_btns}>                
                <div className="menu-container">
                    <>
                        <Dropdown
                            isOpen={menu}
                            toggle={() => setMenu(!menu)}
                            className="d-inline-block"
                        >
                            <DropdownToggle
                                className="btn header-item d-flex align-items-center"
                                id="page-header-user-dropdown"
                                tag="button"
                            >
                                <img
                                    src="http://i.pravatar.cc/50"
                                    alt="Header Avatar"
                                    className="rounded-circle"
                                />
                                <span className="d-none d-xl-inline-block ms-2 me-1 text-uppercase">
                                    Sandip
                                </span>
                                <i className="mdi mdi-chevron-down d-none d-xl-inline-block" />
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-end">
                                <div
                                    className="dropdown-item external-event"
                                    onClick={handleLogout}
                                >
                                    <i className="bx bx-power-off font-size-16 align-middle me-1 text-danger" />
                                    <span className="text-body">
                                        {"Account Settings"}
                                    </span>
                                </div>
                            </DropdownMenu>
                            <DropdownMenu className="dropdown-menu-end">
                                <div
                                    className="dropdown-item external-event"
                                    onClick={handleLogout}
                                >
                                    <i className="bx bx-power-off font-size-16 align-middle me-1 text-danger" />
                                    <span className="text-body">
                                        {"Profile"}
                                    </span>
                                </div>
                            </DropdownMenu>
                            <DropdownMenu className="dropdown-menu-end">
                                <div
                                    className="dropdown-item external-event"
                                    onClick={handleLogout}
                                >
                                    <i className="bx bx-power-off font-size-16 align-middle me-1 text-danger" />
                                    <span className="text-body">
                                        {"Logout"}
                                    </span>
                                </div>
                            </DropdownMenu>
                        </Dropdown>
                    </>
                </div>
            </div>
        </div>
    );
};

export default Header;
