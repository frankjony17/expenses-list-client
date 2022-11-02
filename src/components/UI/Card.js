
const Card = (props) => {
    return (
        <div className="col-12">
            <div className="card">
                {props.title &&
                    <div className="card-header">
                        <h4 className="card-title">{props.title}</h4>
                    </div>
                }
                <div className="card-body">
                    {props.children}
                </div>
            </div>
        </div>
    );
};

export default Card;
