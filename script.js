function calculateResult() {
    var name = document.getElementById("name").value;
    var rollNumber = document.getElementById("rollNumber").value;
    var subject1 = parseInt(document.getElementById("subject1").value);
    var subject2 = parseInt(document.getElementById("subject2").value);
    var subject3 = parseInt(document.getElementById("subject3").value);
    var subject4 = parseInt(document.getElementById("subject4").value);
    var subject5 = parseInt(document.getElementById("subject5").value);
    
    var totalMarks = subject1 + subject2 + subject3 + subject4 + subject5;
    var averageMarks = totalMarks / 5;
    
    var resultText = "Name: " + name + "<br> <br>" ; 
    resultText += "Roll Number: " + rollNumber + "<br>";
    resultText += "Subjects " + "<br> <br>";
    resultText += "JAVA: " + subject1 + "<br>";
    resultText += "PYTHON: " + subject2 + "<br>";
    resultText += "REACT JS: " + subject3 + "<br>";
    resultText += "DOT NET: " + subject4 + "<br>";
    resultText += "C++: " + subject5 + "<br>";
  // resultText += "Total Marks: " + totalMarks + "<br>";
  //  resultText += "Average Marks: " + averageMarks.toFixed(2) + "<br>";
    
    document.getElementById("result").innerHTML = resultText;
}
