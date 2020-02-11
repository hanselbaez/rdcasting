
  


    $(function() {
        $('input[name="daterange"]').daterangepicker({
          opens: 'left'
        }, function(start, end, label) {
          console.log("A new date selection was made: " + start.format('DD-MM-YYYY') + ' to ' + end.format('DD-MM-YYYY'));
        });
      });
    
    
      $(function()
    {
    $('.slider').on('input change', function(){
              $(this).next($('.slider_label')).html(this.value);
            });
          $('.slider_label').each(function(){
              var value = $(this).prev().attr('value');
              $(this).html(value);
            });  
    })
    
    
    $(function()
    {
        var options = [
            "4’", "4’ 1&#8221;", "4’ 2&#8221;", "4’ 3&#8221;", "4’ 4&#8221;", "4’ 5&#8221;", "4’ 6&#8221;", "4’ 7&#8221;", "4’ 8&#8221;", "4’ 9&#8221;", "4’ 10&#8221;", "4’ 11&#8221;",
            "5’", "5’ 1&#8221;", "5’ 2&#8221;", "5’ 3&#8221;", "5’ 4&#8221;", "5’ 5&#8221;", "5’ 6&#8221;", "5’ 7&#8221;", "5’ 8&#8221;", "5’ 9&#8221;", "5’ 10&#8221;", "5’ 11&#8221;",
            "6’", "6’ 1&#8221;", "6’ 2&#8221;", "6’ 3&#8221;", "6’ 4&#8221;", "6’ 5&#8221;", "6’ 6&#8221;", "6’ 7&#8221;", "6’ 8&#8221;", "6’ 9&#8221;", "6’ 10&#8221;", "6’ 11&#8221;",
            "7’", "7’ 1&#8221;", "7’ 2&#8221;", "7’ 3&#8221;", "7’ 4&#8221;", "7’ 5&#8221;", "7’ 6&#8221;", "7’ 7&#8221;", "7’ 8&#8221;", "7’ 9&#8221;", "7’ 10&#8221;", "7’ 11&#8221;",
            "8’", "8’ 1&#8221;", "8’ 2&#8221;", "8’ 3&#8221;", "8’ 4&#8221;", "8’ 5&#8221;", "8’ 6&#8221;", "8’ 7&#8221;", "8’ 8&#8221;", "8’ 9&#8221;", "8’ 10&#8221;", "8’ 11&#8221;",
            "9’", "9’ 1&#8221;", "9’ 2&#8221;", "9’ 3&#8221;", "9’ 4&#8221;", "9’ 5&#8221;", "9’ 6&#8221;", "9’ 7&#8221;", "9’ 8&#8221;", "9’ 9&#8221;", "9’ 10&#8221;", "9’ 11&#8221;",
        ];
        $('.slider2').on('input change', function(){
            $('.slider_label2').html(options[this.value]);
        });
        $('.slider_label2').each(function(){
            var value = $(this).prev().attr('value');
            $(this).html(options[value]);
        });
    })

//Clone campaign


    $(document).ready(function(){
        var field = $('.campaing-sec').clone().wrap('<div class="campaing-sec">').parent().html();
        var numberOfFields = 1;
        
        $('#add').click(function(){
            $('.campaing-div').append(field);
            numberOfFields++
        });
        
        $('.campaing-div').on('click', '.remove', function(e){
          e.preventDefault();
          if (numberOfFields > 1) {
            $(this).parent('div').remove();
            numberOfFields--
          }
         });
        });



//Clone sirecine


  var sirecine = $('.sirecine-sec').clone().wrap('<div class="sirecine-sec">').parent().html();
  var numberOfFields = 1;
  
  $('#addsire').click(function(){
      $('.sirecine-cont').append(sirecine);
      numberOfFields++
  });
  
  $('.sirecine-cont').on('click', '.remove', function(e){
    e.preventDefault();
    if (numberOfFields > 1) {
      $(this).parent('div').remove();
      numberOfFields--
    }
   });



