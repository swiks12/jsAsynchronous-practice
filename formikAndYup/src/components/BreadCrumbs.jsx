import { Link, Outlet, useLocation } from "react-router-dom";

const BreadCrumbs = () => {
  const location = useLocation();
  console.log(location);
  let currentLink = "";

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink += `/${crumb}`;
      console.log(currentLink);
      return (
        <div className="crumb" key={crumb}>
          <Link to={currentLink}>{crumb}</Link>
        </div>
      );
    });
  return (
    <>
      <div className="border w-fit ml-12 p-4">
        <div className="text-purple-800 text-xl flex gap-4">{crumbs}</div>
      </div>

      <Outlet />
    </>
  );
};

export default BreadCrumbs;
