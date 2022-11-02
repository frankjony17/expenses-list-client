import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from "react";
import {getProductsAction} from "./state/productTypeActions";
import Card from "../../components/UI/Card";
import Table from "../../components/UI/Table";
import PageTitle from "../../components/layouts/PageTitle";


const ProductType = () => {
    const dispatch = useDispatch();

    const productTypes = useSelector((state) => state.productType.types);

    useEffect(() =>
        { dispatch(getProductsAction()); },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    );

    return(
        <>
            <PageTitle activeMenu="Products Type" motherMenu="Products" />

            <Card>
                <Table id="product-type" described="product-types">
                    <thead>
                    <tr role="row">
                        <th className="sorting_asc" style={{ width: "177px" }}>
                            Type
                        </th>
                        <th className="sorting" style={{ width: "278px" }}>
                            Description
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {productTypes.map((type) => (
                        <tr className="odd" role="row" key={type.id}>
                            <td className="sorting_1">{type.type}</td>
                            <td>{type.description}</td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </Card>
        </>
    )
}

export default ProductType;