import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useState} from "react";
import {getProductsAction} from "./state/productTypeActions";
import Card from "../../components/UI/Card";
import Table from "../../components/UI/Table";
import PageTitle from "../../components/layouts/PageTitle";
// import {Link} from "react-router-dom";
import PaginationComponent from "../../components/UI/Pagination";




const ProductType = () => {
    const dispatch = useDispatch();

    const productTypes = useSelector((state) => state.productType.types);

    console.log(productTypes);

    useEffect(() =>
        { dispatch(getProductsAction()); },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    );

    const sessionsPerPage = 5;
    const allSessionsCount = productTypes.length;
    const [currentPage, setCurrentPage] = useState(1);

    // let active = 1;
    // let items = [];
    // for (let number = 1; number <= 5; number++) {
    //     items.push(
    //         <Pagination.Item key={number} active={number === active}>
    //             {number}
    //         </Pagination.Item>,
    //     );
    // }

    // const paginationBasic = (
    //     <div>
    //         <Pagination className='mt-4' >
    //             <li className="page-item page-indicator">
    //                 <Link className="page-link" to="#">
    //                     <i className="fa fa-angle-left"></i>
    //                 </Link>
    //             </li>
    //             {items}
    //             <li className="page-item page-indicator">
    //                 <Link className="page-link" to="#">
    //                     <i className="fa fa-angle-right"></i>
    //                 </Link>
    //             </li>
    //         </Pagination>
    //     </div>
    // );

    return(
        <>
            <PageTitle activeMenu="Products Type" motherMenu="Products" />

            <Card>
                {productTypes.results ?
                    <Table id="product-type" described="product-types">
                        <thead>
                        <tr role="row">
                            <th className="sorting_asc" style={{width: "177px"}}>
                                Type
                            </th>
                            <th className="sorting" style={{width: "278px"}}>
                                Description
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                            {productTypes.results.map((type) => (
                                <tr className="odd" role="row" key={type.id}>
                                    <td className="sorting_1">{type.type}</td>
                                    <td>{type.description}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                :
                    <p>Empty...</p>
                }

                <PaginationComponent
                    itemsCount={allSessionsCount}
                    itemsPerPage={sessionsPerPage}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />

            </Card>
        </>
    )
}

export default ProductType;