$(document).ready(function(){

  $(function(){
    'use strict'

    $.getJSON('http://www.omdbapi.com/?s=Star%20Wars&r=json', function(data){
      console.log(data);
    });

  })
});