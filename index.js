

let tasks = [
  {
    title: "Mobile",
    startDate: "20.04.2024",
    endDate: "22.04.2024",
    staff: "Malika",
    status: "pending",
  },
 
];

function drawList() {
  document.getElementById("pendingList").innerHTML ='';
  document.getElementById("rejectedList").innerHTML ='';
  document.getElementById("doingList").innerHTML ='';
  document.getElementById("doneList").innerHTML ='';
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].status === "pending") {
      document.getElementById("pendingList").innerHTML +=
        "<div class='mt-2'>" +
        "<h6>" +
        "Task Name: " +
        tasks[i].title +
        "</h6>" +
        "<h6>" +
        "Start data: " +
        tasks[i].startDate +
        "</h6>" +
        "<h6>" +
        "End data: " +
        tasks[i].endDate +
        "</h6>" +
        "<h6>" +
        "Staff Name : " +
        tasks[i].staff +
        "</h6>" +
        "<h6>" +
        "Status : " +
        tasks[i].status +
        "</h6>" +
        '<select class="form-control mt-3">' +
        "<option disabled selected >Select status</option>" +
        '<option value="doing">Doing</option>' +
        '<option value="done">Done</option>' +
        "</select>" +
        '<button type="button" class="btn btn-warning mt-3 ">edit</button>' +
        '<button type="button" class="btn btn-danger mt-3 ml-3">delete</button>' +
        '<hr class="bg-dark"/>' +
        "</div>";
    } else if (tasks[i].status === "doing") {
      document.getElementById("doingList").innerHTML +=
        "<div class='mt-2'>" +
        "<h6>" +
        "Task Name: " +
        tasks[i].title +
        "</h6>" +
        "<h6>" +
        "Start data: " +
        tasks[i].startDate +
        "</h6>" +
        "<h6>" +
        "End data: " +
        tasks[i].endDate +
        "</h6>" +
        "<h6>" +
        "Staff Name : " +
        tasks[i].staff +
        "</h6>" +
        "<h6>" +
        "Status : " +
        tasks[i].status +
        "</h6>" +
        '<select class="form-control mt-3">' +
        "<option disabled selected >Select status</option>" +
        '<option value="pending">Pending</option>' +
        '<option value="done">Done</option>' +
        "</select>" +
        '<button type="button" class="btn btn-warning mt-3 ">edit</button>' +
        '<button type="button" class="btn btn-danger mt-3 ml-3">delete</button>' +
        '<hr class="bg-dark"/>' +
        "</div>";
    } else if (tasks[i].status === "done") {
      document.getElementById("doneList").innerHTML +=
        "<div class='mt-2'>" +
        "<h6>" +
        "Task Name: " +
        tasks[i].title +
        "</h6>" +
        "<h6>" +
        "Start data: " +
        tasks[i].startDate +
        "</h6>" +
        "<h6>" +
        "End data: " +
        tasks[i].endDate +
        "</h6>" +
        "<h6>" +
        "Staff Name : " +
        tasks[i].staff +
        "</h6>" +
        "<h6>" +
        "Status : " +
        tasks[i].status +
        "</h6>" +
        '<button type="button" class="btn btn-danger mt-3 btn-block">Rejected</button>' +
        '<hr class="bg-dark"/>' +
        "</div>";
    } else {
      document.getElementById("rejectedList").innerHTML +=
        "<div class='mt-2'>" +
        "<h6>" +
        "Task Name: " +
        tasks[i].title +
        "</h6>" +
        "<h6>" +
        "Start data: " +
        tasks[i].startDate +
        "</h6>" +
        "<h6>" +
        "End data: " +
        tasks[i].endDate +
        "</h6>" +
        "<h6>" +
        "Staff Name : " +
        tasks[i].staff +
        "</h6>" +
        "<h6>" +
        "Status : " +
        tasks[i].status +
        "</h6>" +
        '<select class="form-control mt-3">' +
        "<option disabled selected >Select status</option>" +
        '<option value="pending">Pending</option>' +
        '<option value="doing">doing</option>' +
        "</select>" +
        '<button type="button" class="btn btn-warning mt-3 ">edit</button>' +
        '<hr class="bg-dark"/>' +
        "</div>";
    }
  }
}

function addTask() {
  let title = document.forms["addForm"]["title"].value;
  let startDate = document.forms["addForm"]["startDate"].value;
  let endDate = document.forms["addForm"]["endDate"].value;
  let staff = document.forms["addForm"]["staff"].value;
  let status = document.forms["addForm"]["status"].value;

  if (
    title.trim().length > 0 &&
    startDate.trim().length > 0 &&
    endDate.trim().length > 0 &&
    staff !== "Select staff" &&
    status !== "Select status"
  ) {
    let newTask = {
      title,
      startDate,
      endDate,
      staff,
      status
    }
    tasks.push(newTask);
    drawList();
    document.forms['addForm'].reset();
  } else {
    alert("Formani tuldiring");
  }
}
drawList();
