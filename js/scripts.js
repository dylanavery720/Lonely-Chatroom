var ideaCount = 100;
var $title = $('#title-input');
var $body = $('#body-input');

function NewIdea() {
  this.id = 'UID' + ideaCount;
  this.title = $title.val();
  this.body = $body.val();
  this.quality = 3;
  /*jshint multistr: true */
  this.html = "<article class='idea-box'>\
      <h2>" + this.title + "</h2>\
      <button type='button' name='button' id='delete-button'></button>\
      <p>" + this.body + "</p>\
      <button type='button' name='button' id='up-button'></button>\
      <button type='button' name='button' id='down-button'></button>\
    </article>";
  ideaCount++;
}

$('#save-button').on('click', function() {
    var newIdeaBox = new NewIdea();
    var storageId = newIdeaBox.id;
    localStorage.setItem(storageId, JSON.stringify(newIdeaBox));
    $('.idea-container').append(newIdeaBox.html);
  });