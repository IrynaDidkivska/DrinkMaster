// import { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";

// import Subtitle from "../../../../shared/components/Title/Subtitle";
// import {
//   PopularContainer,
//   PopularItemContainer,
//   PopularItem,
//   PopularImage,
//   PopularName,
//   PopularDiskr,
//   PopularContainerDiscr,
// } from "./PopularDrinks.styled";
// import { getPopularThunk } from "../../../../redux/Drinks/operations";

// function PopularDrinks() {
//   const dispatch = useDispatch();
//   const populars = useSelector();

//   useEffect(() => {
//     dispatch(getPopularThunk());
//   }, [dispatch]);

//   return (
//     <PopularContainer>
//       <Subtitle>Popular drinks</Subtitle>
//       {populars?.map(({ description, drinkThumb, drink }) => (
//         <PopularItemContainer key={drink}>
//           <PopularItem>
//             <PopularImage src={drinkThumb} alt={drink} />
//             <PopularContainerDiscr>
//               <PopularName>{drink}</PopularName>
//               <PopularDiskr>{description}</PopularDiskr>
//             </PopularContainerDiscr>
//           </PopularItem>
//         </PopularItemContainer>
//       ))}
//     </PopularContainer>
//   );
// }

// export default PopularDrinks;



