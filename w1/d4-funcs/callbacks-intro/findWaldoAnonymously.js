// The second argument/parameter is expected to be a (callback) function
const findWaldo = function(names, found) {
  names.forEach((elem, i) => {
    if (elem === "Waldo") found(i);
  });
};

findWaldo(["Alice", "Bob", "Waldo", "Winston"], function(index) {
  console.log("Found Waldo at index " + index + "!");
});