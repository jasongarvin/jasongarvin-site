// Display loading animation until page renders

// TODO: repurpose this now that I'm not using jotform

document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector("#jotform").style.visibility = "hidden";
        document.querySelector("#loader").style.visibility = "visible";
    } else {
        document.querySelector("#loader").style.display = "none";
        document.querySelector("#jotform").style.visibility = "visible";
    }
};
