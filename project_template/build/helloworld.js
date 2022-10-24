function helloWorld() {
    return "Hello World";
}
function dispHelloW() {
    if (document != null) {
        document.getElementById("helloworld").textContent = helloWorld().toString();
    }
}
export { helloWorld, dispHelloW };
