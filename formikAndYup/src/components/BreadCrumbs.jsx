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
      {location.pathname == "/login" ? (
        <div className="bg-gray-100">
          <div className=" w-fit ml-12 pt-4 ">
            <div className="text-purple-800 text-xl flex gap-4 w-fit">
              {crumbs}
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white">
          <div className=" w-fit ml-12 pt-4 ">
            <div className="text-purple-800 text-xl flex gap-4 w-fit">
              {crumbs}
            </div>
          </div>
        </div>
      )}

      <Outlet />
    </>
  );
};

export default BreadCrumbs;
