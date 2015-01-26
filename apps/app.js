$(document).ready(function(){
  'use strict'
  /*
  $(function(){
    $.getJSON('http://www.omdbapi.com/?s=Star%20Wars&r=json', function(data){
      console.log(data);
    })
  })
  */
  $.get('http://www.omdbapi.com/?s=Star%20Wars&r=json', function(data){
    console.log(data);
  }, 'json')
});