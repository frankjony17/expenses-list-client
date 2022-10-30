import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from "react";
import {getProductsAction} from "./state/productTypeActions";


const ProductType = () => {
    const dispatch = useDispatch();

    const productTypes = useSelector((state) => state.productType.types);

    useEffect(() => { dispatch(getProductsAction()); }, []);

    return(
        <div className="col-12">
            <div className="card">
                <div className="card-header">
                    <h4 className="card-title">Product Types</h4>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <div id="job_data" className="dataTables_wrapper">

                            <table className="display w-100 dataTable" role="grid" aria-describedby="example5_info">
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
                                    <tr className="odd" role="row">
                                        <td className="sorting_1">{type.type}</td>
                                        <td>{type.description}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductType;