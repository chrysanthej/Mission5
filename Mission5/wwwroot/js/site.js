$(document).ready(function () {
    // Event listener for the Calculate button
    $("#estimate").on("click", function () {
        // Get the entered hours
        var numHours = parseFloat($("#numHours").val());

        // Validate input to ensure it's a positive number
        if (isNaN(numHours) || numHours <= 0) {
            alert("Please enter a valid positive number for hours.");
            return;
        }

        // Get the hourly rate
        var hourlyRate = parseFloat($("#hourlyRate").val());

        // Calculate the total
        var total = numHours * hourlyRate;

        // Display the total in the output box
        $("#total").text("Estimated Total: $" + total.toFixed(2) + " (+ supplies)");

        // Toggle the visibility of the output box based on content
        if (total > 0) {
            $("#total").show();
        } else {
            $("#total").hide();
        }


    });
    $("#goHome").on("click", function () {
        window.location.href = "Index";
    });
});

