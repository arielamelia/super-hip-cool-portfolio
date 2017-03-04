console.log('\'Allo \'Allo!');
$(document).ready(function(){
	$('#demosMenu').change(function(){
	  window.location.href = $(this).find('option:selected').attr('id') + '.html';
	});
	   $('#demosMenu').change(function(){
            window.location.href = $(this).find('option:selected').attr('id') + '.html';
          });
          var deleteLog = false;
          $('#fullpage').fullpage({
            anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
            menu: '#menu',
            onLeave: function(index, nextIndex, direction){
              if(deleteLog){
                $('#callbacksDiv').html('');
              }
              $('#callbacksDiv').append('<p>onLeave - index:' + index + ' nextIndex:' + nextIndex + ' direction:' + direction + '</p>')
              console.log('onLeave--' + 'index: ' + index + ' nextIndex: ' + nextIndex + ' direction: ' +  direction);
            },
            onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){
              if(deleteLog){
                $('#callbacksDiv').html('');
              }
              $('#callbacksDiv').append('<p>onSlideLeave - anchorLink:' + anchorLink + ' index:' + index + ' slideIndex:' + slideIndex +' direction:' + direction + ' nextSlideIndex:' + nextSlideIndex + '</p>');
              console.log('onSlideLeave--' + 'anchorLink: ' + anchorLink + ' index: ' + index + ' slideIndex: ' + slideIndex + ' direction: ' + direction);
            },
            afterRender: function(){
              $('#callbacksDiv').append('<p>afterRender</p>');
              console.log('afterRender');
            },
            afterResize: function(){
              $('#callbacksDiv').append('<p>afterResize</p>');
              console.log('afterResize');
            },
            afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){
              $('#callbacksDiv').append('<p>afterSlideLoad - anchorLink:' + anchorLink + ' index:' + index + ' slideAnchor:' + slideAnchor +' slideIndex:' + slideIndex + '</p>');
              deleteLog = true;
              console.log('afterSlideLoad--' + 'anchorLink: ' + anchorLink + ' index: ' + index + ' slideAnchor: ' + slideAnchor + ' slideIndex: ' + slideIndex);
              console.log('----------------');
            },
            afterLoad: function(anchorLink, index){
              $('#callbacksDiv').append('<p>afterLoad - anchorLink:' + anchorLink + ' index:' + index + '</p>');
              deleteLog = true;
              console.log('===============');
              console.log('afterLoad--' + 'anchorLink: ' + anchorLink + ' index: ' + index );
            }
          });
				$(function () {
				    $('.tlt').textillate();
				})
});
