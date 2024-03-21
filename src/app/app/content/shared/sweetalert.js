import Swal from 'sweetalert2'

export async function Success (title, text) {
    return Swal.fire({
        icon: "success",
        title: title,
        text: text
    })
}

export async function Error (title, text) {
    return Swal.fire({
        icon: "error",
        title: title,
        text: text
    });
}

export async function Loading (title, text) {
    return Swal.fire({
        title: title,
        text: text,
        allowOutsideClick: false,
        allowEscapeKey: false,
        didOpen: () => {
            Swal.showLoading();
        }
    });
}

export async function Close () {
    return Swal.close();
}