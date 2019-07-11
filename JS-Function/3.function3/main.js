function alphabetSort(str){   
    console.log(str.split('').sort((a, b) => a.localeCompare(b)).join(''));
  }
  alphabetSort('hello'); 