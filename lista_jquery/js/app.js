$(function() {
 $('#add-btn').click(function(){
    $item = $(":input").val()
    $lista = $('ul')
    $btn = '<button id="new-btn">x</button>'
    $new = $lista.append('<li></li>', $item, $btn)
    
      $($lista).each(function(){
        $(this).click(function(){
          $('li').remove()
        })
      })
    })     
  });         
   
      
   
 





    
