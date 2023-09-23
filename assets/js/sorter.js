function sortImagesByName() {
    userWorks[0].workpics.sort(function(a, b) {
        return a.localeCompare(b);
    });
}

// Function to get image dimensions (width x height) in pixels
function getImageDimensions(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = () => {
            resolve({ width: img.width, height: img.height });
        };
        img.onerror = reject;
    });
}

// Function to sort images by size
async function sortImagesBySize() {
    const imageDimensionsPromises = userWorks[0].workpics.map((workpic) => getImageDimensions(workpic));

    // Wait for all image dimensions to be fetched
    const imageDimensions = await Promise.all(imageDimensionsPromises);

    // Sort the images based on the width of the image (you can choose width or height)
    userWorks[0].workpics.sort((a, b) => {
        const dimensionsA = imageDimensions[userWorks[0].workpics.indexOf(a)];
        const dimensionsB = imageDimensions[userWorks[0].workpics.indexOf(b)];
        return dimensionsA.width - dimensionsB.width;
    });

    // Generate HTML content for sorted images
    const sortedUsersWork = userWorks[0].workpics.map((workpic, index) => `
        <div class="col-4 col-6-medium col-12-small image-item">
            <a href="#" class="image fit">
                <img src="${workpic}" alt="Work Image ${index + 1}">
            </a>
        </div>
    `).join('');

    // Update the HTML with the sorted content
    document.getElementById('works').innerHTML = sortedUsersWork;

    isSorted = true; // Update the flag
}

let isSorted = false; 

// Function to toggle between sorted by name and sorted by size
function toggleImagesSort() {
    if (isSorted) {
        document.getElementById('works').innerHTML = usersWork;
    } else {
        sortImagesByName(); // Sort by name
    }
    isSorted = !isSorted; // Toggle the flag
}

// Add event listeners to the "SORT BY NAME" and "SORT BY SIZE" buttons
document.getElementById('sorter').addEventListener('click', toggleImagesSort);
document.getElementById('sorter2').addEventListener('click', sortImagesBySize); // Add listener for sorting by size

