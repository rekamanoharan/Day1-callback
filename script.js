

$( document ).ready(function() {
  document.querySelector("#callback-btn")
.addEventListener("click", function() {
    const greet = (message = "", cb = (d) => {}) => {
  console.log(message);
  $('#printNumber').append(`<h4>${message}</h4>`);
 setTimeout(()=>{
  cb(message);
  },2000);
};

greet(10, () => {
  greet(9, () => {
    greet(8, () => {
      greet(7, () => {
        greet(6, () => {
          greet(5, () => {
            greet(4, () => {
              greet(3, () => {
                greet(2, () => {
                  greet(1, () => {
                    greet("Happy Independence Day");
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});
});
});