const content = document.getElementById("wrapper");

let zoomed = false;

content.addEventListener("dblclick", function () {
    if (zoomed) {
        // If already zoomed, reset the zoom by setting the initial scale back to 1
        document.querySelector('meta[name="viewport"]').setAttribute('content', 'width=device-width, initial-scale=1');
        zoomed = false;
    } else {
        // If not zoomed, double tap to zoom
        document.querySelector('meta[name="viewport"]').setAttribute('content', 'width=device-width, initial-scale=2'); // You can adjust the initial scale as needed
        zoomed = true;
    }
});