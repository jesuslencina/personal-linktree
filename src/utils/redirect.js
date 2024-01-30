export const redirect = (url, external = false) => {
    if (external) {
        window.open(url)
    } else {
        window.location.href = url
    }
}
