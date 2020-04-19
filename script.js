// let characters= [
//   {
//     "name" : "Reimu Hakurei",
//     "image" : "Hakurei.Reimu.png"
//   },
//   {
//     "name" : "Marisa Kirisame",
//     "image" : "Kirisame.Marisa.png"
//   },
//   {
//     "name" : "Sakuya Izayoi",
//     "image" : "Izayoi.Sakuya.png"
//   },
// ]


document.addEventListener('DOMContentLoaded', function(event) {
    //all the jquery we are writing will go inside of this function
  //   console.log('this document is loaded and ready')
  //
  // $(".image").fancybox({
  //   openEffect  : "fade",
  //   closeEffect : "fade",
  //   type : "image"
  // });

  const observer = lozad('.lozad', {
    loaded: function(el) {
      el.classList.add('lozad-fully-loaded');
    }
  });
  observer.observe();
});
