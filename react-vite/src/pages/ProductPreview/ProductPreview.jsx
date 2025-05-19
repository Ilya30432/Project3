import { useParams } from "react-router";

const ProductPrewie = () => {
    const params = useParams();
    return <div>Id {params.productId}</div>
}

export default ProductPrewie