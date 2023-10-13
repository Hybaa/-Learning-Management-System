$('.toggle').on('click', function() {
  $('.container').stop().addClass('active');
});

$('.close').on('click', function() {
  $('.container').stop().removeClass('active');
});

$('.moreDetails').on("click",function() {
  $('.container').stop().addClass('active');
})
$('.Overlayy').on('click', function() {
  $('.container').stop().removeClass('active');
});



$("#allStudent").hide()

$('#students').hide()

$('#btn-student').on('click', function() {
  $('#students ').toggle()
});
