// Display loading animation until page renders

document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector("#jotform").style.visibility = "hidden";
        document.querySelector("#loader").style.visibility = "visible";
    } else {
        document.querySelector("#loader").style.display = "none";
        document.querySelector("#jotform").style.visibility = "visible";
    }
};
