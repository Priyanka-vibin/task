findSecondLargest([5,10,8,25,100,65,2,95,175])

function findSecondLargest(array) {
    let largest = 0;
    let secondLargest = 0;
    
    for (let i = 0; i < array.length; i++) {
      let current = array[i];
      if (current > largest) {
        secondLargest = largest;
        largest = current;
      } else if (current > secondLargest && current != largest) {
        secondLargest = current;
      }
    }
    console.log(secondLargest);

  }