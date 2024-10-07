function skillsMember() {
    var member = document.getElementById("member").value;
    var skill = document.getElementById("skill").value;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/skills", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            if (response.success) {
                alert("Skill added successfully");
            } else {
                alert("Skill not added");
            }
        }
    };
    var data = JSON.stringify({ member: member, skill: skill });
    xhr.send(data);
}