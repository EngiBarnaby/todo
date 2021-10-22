// let request = new XMLHttpRequest();
// request.open("GET", "http://dev1.itpw.ru:8003/todo/lists/", true);
// request.setRequestHeader("Authorization", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiNjBlZGQ1ZjctMDQ1NC00OTc3LTg5NGEtZGMwNjIwMTM4ZGE1IiwidXNlcm5hbWUiOiJ0ZXN0LXVzZXIiLCJleHAiOjE2MzQ4MTI2NjN9.rpEOG8kHqNZoAhDUvFhfU329FpCZV7DMSAYzRVvprDA");
//
// document.getElementById("test-box").innerText = request.responseText

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if (xhr.readyState == XMLHttpRequest.DONE) {
        // alert(xhr.responseText);
        document.getElementById("test-box").innerText = xhr.responseText
    }
}
xhr.open("GET", "http://dev1.itpw.ru:8003/todo/lists/", true);
xhr.setRequestHeader("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiNjBlZGQ1ZjctMDQ1NC00OTc3LTg5NGEtZGMwNjIwMTM4ZGE1IiwidXNlcm5hbWUiOiJ0ZXN0LXVzZXIiLCJleHAiOjE2MzQ4MzkwOTd9.Tlb9oo0925mPmHYt9Vr_VPMtL3ZmgubRZTA61KXksyE");

xhr.send(null);