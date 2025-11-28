import { useEffect } from "react";
const RestaurantMenu = () => {
    useEffect(() => {
        fetchMenu();
    }, []);
    const fetchMenu = async() => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=10576&catalog_qa=undefined&submitAction=ENTER"
        );
        // const json = await data.json();
        // console.log(json);
        console.log(data);
        
    };
  return (
    <div className="menu">
        <h1>Name Of The Restaurant</h1>
        <h2>Menu</h2>
        <ul>
            <li>Biriyani</li>
            <li>Burgers</li>
            <li>Die Coke</li>
        </ul>
    </div>
  )
}

export default RestaurantMenu;