window.onload = (event) => {
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@10.16.6/dist/sweetalert2.all.min.js"></script>

}
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");//promblem or not understanding 

}
 function showAlert() {
            Swal.fire({
                title: 'Hello!',
                text: 'This is a SweetAlert dialog.',
                icon: 'success',
                confirmButtonText: 'OK'
            });
        }