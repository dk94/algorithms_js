function reverseWords(str) {
    var arrWords = str.split(' ');

    var reversedArr = arrWords.map((word) => {
        var reversedWord = '';
        for (var i = word.length - 1; i >= 0; i--) {
            reversedWord += word[i];
        }
        return reversedWord;
    });

    return reversedArr.join(' ');
}

console.log(reverseWords('cделай свой код и приложения быстрее и'));