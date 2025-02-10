// import React from "react";
// import "./sidebar.css";
// import logo from "../../images/logo.png";
// import { Link } from "react-router-dom";
// import { TreeView, TreeItem } from "@material-ui/lab";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import PostAddIcon from "@material-ui/icons/PostAdd";
// import AddIcon from "@material-ui/icons/Add";
// import ImportExportIcon from "@material-ui/icons/ImportExport";
// import ListAltIcon from "@material-ui/icons/ListAlt";
// import DashboardIcon from "@material-ui/icons/Dashboard";
// import PeopleIcon from "@material-ui/icons/People";
// import RateReviewIcon from "@material-ui/icons/RateReview";

// const Sidebar = () => {
//   return (
//     <div className="sidebar">
//       <Link to="/">
//         <img src={logo} alt="Ecommerce" />
//       </Link>
//       <Link to="/admin/dashboard">
//         <p>
//           <DashboardIcon /> Dashboard
//         </p>
//       </Link>
//       <Link>
//         <TreeView
//           defaultCollapseIcon={<ExpandMoreIcon />}
//           defaultExpandIcon={<ImportExportIcon />}
//         >
//           <TreeItem nodeId="1" label="Products">
//             <Link to="/admin/products">
//               <TreeItem nodeId="2" label="All" icon={<PostAddIcon />} />
//             </Link>

//             <Link to="/admin/product">
//               <TreeItem nodeId="3" label="Create" icon={<AddIcon />} />
//             </Link>
//           </TreeItem>
//         </TreeView>
//       </Link>
//       <Link>
//         <TreeView
//           defaultCollapseIcon={<ExpandMoreIcon />}
//           defaultExpandIcon={<ImportExportIcon />}
//         >
//           <TreeItem nodeId="4" label="Auctions">
//             <Link to="/admin/auctions">
//               <TreeItem nodeId="5" label="All" icon={<PostAddIcon />} />
//             </Link>

//             <Link to="/admin/auction">
//               <TreeItem nodeId="6" label="Create" icon={<AddIcon />} />
//             </Link>
//           </TreeItem>
//         </TreeView>
//       </Link>
//       <Link to="/admin/orders">
//         <p>
//           <ListAltIcon />
//           Orders
//         </p>
//       </Link>
//       <Link to="/admin/users">
//         <p>
//           <PeopleIcon /> Users
//         </p>
//       </Link>
//       <Link to="/admin/reviews">
//         <p>
//           <RateReviewIcon />
//           Reviews
//         </p>
//       </Link>
//     </div>
//   );
// };

// export default Sidebar;
import React from "react";
import "./sidebar.css";
import logo from "../../images/logo.png";
import { Link, useHistory } from "react-router-dom";
import { TreeView, TreeItem } from "@material-ui/lab";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PostAddIcon from "@material-ui/icons/PostAdd";
import AddIcon from "@material-ui/icons/Add";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import ListAltIcon from "@material-ui/icons/ListAlt";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import RateReviewIcon from "@material-ui/icons/RateReview";

const Sidebar = () => {
  const history = useHistory();

  return (
    <div className="sidebar">
      <Link to="/">
        <img src={logo} alt="Ecommerce" />
      </Link>
      <Link to="/admin/dashboard">
        <p>
          <DashboardIcon /> Dashboard
        </p>
      </Link>
      <TreeView
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ImportExportIcon />}
      >
        <TreeItem nodeId="1" label="Products">
          <TreeItem
            nodeId="2"
            label="All"
            icon={<PostAddIcon />}
            onClick={() => history.push("/admin/products")}
          />
          <TreeItem
            nodeId="3"
            label="Create"
            icon={<AddIcon />}
            onClick={() => history.push("/admin/product")}
          />
        </TreeItem>

        <TreeItem nodeId="4" label="Auctions">
          <TreeItem
            nodeId="5"
            label="All"
            icon={<PostAddIcon />}
            onClick={() => history.push("/admin/auctions")}
          />
          <TreeItem
            nodeId="6"
            label="Create"
            icon={<AddIcon />}
            onClick={() => history.push("/admin/auction")}
          />
        </TreeItem>
      </TreeView>
      <Link to="/admin/orders">
        <p>
          <ListAltIcon />
          Orders
        </p>
      </Link>
      <Link to="/admin/users">
        <p>
          <PeopleIcon /> Users
        </p>
      </Link>
      <Link to="/admin/reviews">
        <p>
          <RateReviewIcon />
          Reviews
        </p>
      </Link>
    </div>
  );
};

export default Sidebar;
