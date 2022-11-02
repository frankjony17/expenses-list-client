
const Table = (props) => {
    return (
        <div className="table-responsive">
            <div id={props.id} className="dataTables_wrapper">
                <table className="display w-100 dataTable" role="grid" aria-describedby={props.described}>
                    {props.children}
                </table>
            </div>
        </div>
    );
};

export default Table;
