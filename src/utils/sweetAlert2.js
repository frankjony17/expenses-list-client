
import Swal from "sweetalert2";

const sweetAlert = (
    message,
    params={}
) => {
    let config = {icon: "info", title: "Oops...", confirmButtonText: "Try Again!", timer: 12000}

    if (params) {
        config = Object.assign({}, config, params);
        config = Object.assign({}, config, {text: message});
    }

    Swal.fire(config).then();
};

export default sweetAlert