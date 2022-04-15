function checkValidate() {
    if (
      checkInput("inputIdSV") &&
      checkInput("inputNameSV") &&
      checkInput("inputEmail") &&
      checkGender() &&
      checkFavor() &&
      checkNationality() &&
      checkNote()
    )
      alert("Đăng ký thành công!");
  }
  
  function checkInput(id) {
    var input = document.getElementById(id);
    if (input.value == "") {
      input.style.backgroundColor = "#f8fa91";
      return false;
    } else {
      input.style.backgroundColor = "white";
      return true;
    }
  }
  
  function checkGender() {
    var arr = document.getElementsByName("gender");
    var check = false;
    for (let index = 0; index < arr.length; index++) {
      if (arr[index].checked) {
        check = true;
        document
          .getElementsByClassName("inputGender")
          .item(0).style.backgroundColor = "white";
        break;
      }
    }
    if (!check) {
      document
        .getElementsByClassName("inputGender")
        .item(0).style.backgroundColor = "#f8fa91";
      return false;
    }
    return true;
  }
  
  function checkFavor() {
    var blockFavor = document.getElementsByName("favor");
    var check = false;
    for (let i = 0; i < blockFavor.length; i++) {
      if (blockFavor[i].checked) {
        check = true;
        document
          .getElementsByClassName("inputFavor")
          .item(0).style.backgroundColor = "white";
        break;
      }
    }
    if (!check) {
      alert("Hãy chọn ít nhất 1 sở thích!");
      document
        .getElementsByClassName("inputFavor")
        .item(0).style.backgroundColor = "#f8fa91";
      return false;
    }
    return true;
  }
  
  function checkNationality() {
    var nation = document.getElementById("nationality");
    if (nation.value == "") {
      nation.style.backgroundColor = "#f8fa91";
      return false;
    } else {
      nation.style.backgroundColor = "white";
      return true;
    }
  }
  
  function checkNote() {
    var note = document.getElementById("note");
    if (note.textLength > 200) {
      alert("Ghi chú: Quá 200 ký tự cho phép!");
      note.style.backgroundColor = "#f8fa91";
      return false;
    } else {
      note.style.backgroundColor = "white";
      return true;
    }
  }
  