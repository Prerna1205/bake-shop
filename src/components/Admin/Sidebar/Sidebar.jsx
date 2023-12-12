import { Link, useHistory} from 'react-router-dom';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import InventoryIcon from '@mui/icons-material/Inventory';
import { logout } from "../../../redux/authSlice";
import AddBoxIcon from '@mui/icons-material/AddBox';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import CloseIcon from '@mui/icons-material/Close';
import Avatar from '@mui/material/Avatar';
import { useDispatch, useSelector } from 'react-redux';
import './Sidebar.css';
import { useSnackbar } from 'notistack';


const navMenu = [
    {
        icon: <EqualizerIcon />,
        label: "Dashboard",
        ref: "/admin/dashboard",
    },
    // {
    //     icon: <ShoppingBagIcon />,
    //     label: "Orders",
    //     ref: "/admin/orders",
    // },
    {
        icon: <InventoryIcon />,
        label: "Products",
        ref: "/admin/products",
    },
    {
        icon: <AddBoxIcon />,
        label: "Add Product",
        ref: "/admin/new_product",
    },
   
    
    // {
    //     icon: <AccountBoxIcon />,
    //     label: "My Profile",
    //     ref: "/account",
    // },
    {
        icon: <LogoutIcon />,
        label: "Logout",
    },
];

const Sidebar = ({ activeTab, setToggleSidebar }) => {

    const dispatch = useDispatch();
    const navigate = useHistory();
    const { enqueueSnackbar } = useSnackbar();

    const { user } = useSelector((state) => state.auth);

    const handleLogout = () => {
        dispatch(logout());
        enqueueSnackbar("Logout Successfully", { variant: "success" });
        navigate.push("/login");
    }

    return (
        <aside className="sidebar z-10 sm:z-0 block min-h-screen fixed left-0 pb-14 max-h-screen w-3/4 sm:w-1/5 bg-gray-800 text-white overflow-x-hidden border-r">
            <div className="flex items-center gap-3 bg-gray-700 p-2 rounded-lg shadow-lg my-4 mx-3.5">
             <Avatar
                    alt="Avatar"
                    src={"data:image/jpeg;base64,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"}
                /> 
                <div className="flex flex-col gap-0">
                    <span className="font-medium text-lg">{user.name}</span>
                    <span className="text-gray-300 text-sm">{user.role?"Admin":"User"}</span>
                </div>
                <button onClick={()=>setToggleSidebar(false)} className="sm:hidden bg-gray-800 ml-auto rounded-full w-10 h-10 flex items-center justify-center">
                    <CloseIcon/>
                </button>
            </div>

            <div className="flex flex-col w-full gap-0 my-8">
                {navMenu.map((item, index) => {
                    const { icon, label, ref } = item;
                    return (
                        <>
                            {label === "Logout" ? (
                                <button onClick={handleLogout} className="hover:bg-gray-700 flex gap-3 items-center py-3 px-4 font-medium bg-gray-700">
                                    <span>{icon}</span>
                                    <span>{label}</span>
                                </button>
                            ) : (
                                <Link to={ref} className={`${activeTab === index ? "bg-gray-700" : "hover:bg-gray-700"} bg-gray-700 flex gap-3 items-center py-3 px-4 font-medium`}>
                                    <span>{icon}</span>
                                    <span>{label}</span>
                                </Link>
                            )}
                        </>
                    )
                }
                )}
            </div>

            <div className="flex flex-col gap-1 bg-gray-700 p-3 rounded-lg shadow-lg mb-6 mt-28 mx-3.5 overflow-hidden">
                <h5>Developed with ❤️ by:</h5>
                <div className="flex flex-col gap-0">
                    <a href="www.linkedin.com/in/prerna-jain-91b3455b" target="_blank" rel="noreferrer" className="font-medium text-lg hover:text-blue-500">Prerna Jain</a>
                    <a href="mailto:jianprerna1205@gmail.com" className="text-gray-300 text-sm hover:text-blue-500">jainprerna1205@gmail.com</a>
                </div>
            </div>
        </aside>
    )
};

export default Sidebar;
