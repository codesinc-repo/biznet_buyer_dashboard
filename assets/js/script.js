function showSection(section) {
    var sections = document.querySelectorAll('.content-section');
    sections.forEach(function (sec) {
        sec.style.display = 'none';
    });
    document.getElementById(section).style.display = 'block';
}



// Hidden Data 

document.getElementById("show-more-btn").addEventListener("click", function () {

    const hiddenContent = document.querySelectorAll(".hidden-content");
    hiddenContent.forEach(function (element) {
        element.style.display = "block";
    });
    this.style.display = "none";
});


document.getElementById('show-more-apartments').addEventListener('click', function () {
    let hiddenContent = document.querySelectorAll('.hidden-content_1');
    hiddenContent.forEach(function (element) {
        element.style.display = 'block';
    });
    this.style.display = 'none';
});


document.getElementById('show-more-houses').addEventListener('click', function () {
    let hiddenContent = document.querySelectorAll('.hidden-content_2');
    hiddenContent.forEach(function (element) {
        element.style.display = 'block';
    });
    this.style.display = 'none';
});



// Get all tab links and contents
const tabs = document.querySelectorAll('.nav-link');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', function (e) {
        e.preventDefault();

        // Remove active class from all tabs
        tabs.forEach(link => link.classList.remove('active'));

        // Hide all content sections
        contents.forEach(content => content.classList.remove('active'));

        // Add active class to the clicked tab and show the associated content
        tab.classList.add('active');
        const target = document.querySelector(tab.getAttribute('data-target'));
        target.classList.add('active');
    });
});




