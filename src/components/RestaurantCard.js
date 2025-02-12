const RestaurantCard = (props) => {
  const { resData } = props;
  // console.log(resData);

  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/cdnvse50x9uaz6ytbm0m"
      />
      <h3>{resData.name}</h3>
      <p>
        📍 {resData.locality}, {resData.areaName}
      </p>
      <p>💰 {resData.costForTwo}</p>
      <p>🍽️ {resData.cuisines.join(", ")}</p>
      <p>⭐ Rating: {resData.avgRatingString}</p>
      <p>⏳ Delivery Time: {resData.sla.slaString}</p>
    </div>
  );
};
export default RestaurantCard;
