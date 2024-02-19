export const redirect = (url, external = false) => {
    if (external) {
        window.open(url, "_blank", "noopener,noreferrer")
    } else {
        window.location.href = url
    }
}
