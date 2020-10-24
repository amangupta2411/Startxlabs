function Upload() {
    var fileUpload = document.getElementById("fileUpload");
            var reader = new FileReader();
            reader.readAsDataURL(fileUpload.files[0]);
            reader.onload = function (e) {
                var image = new Image();
                image.src = e.target.result;
                image.onload = function () {
                    var width = this.width;
                    if (width > 600) {
                        alert("CROP THE IMAGE");
                        return false;
                    }
                    else if (width == 600) {
                        alert("IMAGE IS OF CORRECT WIDTH");
                        return true;
                    }
                    alert("UPLOAD ANOTHER IMAGE");
                    return true;
                };

            }
}
