import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import { fetchProducts } from "@/Services/products.service";
import { useEffect } from "react";
// import { NewProducts } from "../Services/products.service";
const Index = () => {
  //   console.log(NewProducts);
  const dispatch = useAppDispatch();
  const products: any = useAppSelector((state: any) => state.products);
  // console.log(products.products.products.length);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (products.status === "loading") {
    return <div>Loading...</div>;
  }

  if (products.status === "failed") {
    return <div>Error: {products.error}</div>;
  }

  // The products have been fulfilled when the status is "succeeded"
  if (products.status === "succeeded") {
    return (
      <div>
        {products.products.products.length > 0 ? (
          <ul>
            {products.products.products.map((product: any, index: number) => {
              return <li key={index}>{product.title}</li>;
            })}
          </ul>
        ) : (
          <div>No data available</div>
        )}
      </div>
    );
  }

  return null; // Render nothing if the status is "idle" or other unexpected status
};

export default Index;
