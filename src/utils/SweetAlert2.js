
import swal from "sweetalert";

const SweetAlert = (
    text,
    icon="info",
    title="Oops...",
    buttonLabel="Try Again!",
    timer=12000
) => {
    swal({
        title: title,
        text: text,
        icon: icon,
        button: buttonLabel,
        timer: timer}
    ).then();
};

export default SweetAlert