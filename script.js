let title = document.querySelector('.title');
let turn = 'x';
let square = [];

const messages = [
  "🎉 Well done! What a fantastic win! 🎉",
   "🔥 Amazing! You dominated the game! 🔥",
    "🏆 Well-deserved victory! Great play! 🏆", 
    "😎 Wow! High-level skill! 😎"
];

function celebrate() {
  // إطلاق المفرقعات لمدة قصيرة
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 }
  });
}

function end(num1, num2, num3) {
  let winner = square[num1]; // الفائز الحقيقي وليس square[9]

  // تغيير عنوان الفائز
  let randomMsg = messages[Math.floor(Math.random() * messages.length)];
  title.innerHTML = `${winner.toUpperCase()} Winner!<br>${randomMsg}`;

  // تلوين المربعات الفائزة
  document.getElementById('item' + num1).style.background = '#000';
  document.getElementById('item' + num2).style.background = '#000';
  document.getElementById('item' + num3).style.background = '#000';

  // المفرقعات
  celebrate();

  // نقاط تظهر لاحقًا
  setInterval(function () {
    title.innerHTML += '.';
  }, 800);

  // إعادة تشغيل
  setTimeout(function () {
    location.reload();
  }, 4500);
}

function winnner() {
  for (let i = 1; i < 10; i++) {
    square[i] = document.getElementById('item' + i).innerHTML;
  }

  if (square[1] == square[2] && square[2] == square[3] && square[1] != '') {
    end(1, 2, 3);
  }
  else if (square[4] == square[5] && square[5] == square[6] && square[5] != '') {
    end(4, 5, 6);
  }
  else if (square[7] == square[8] && square[8] == square[9] && square[8] != '') {
    end(7, 8, 9);
  }
  else if (square[1] == square[4] && square[4] == square[7] && square[1] != '') {
    end(1, 4, 7);
  }
  else if (square[2] == square[5] && square[5] == square[8] && square[5] != '') {
    end(2, 5, 8);
  }
  else if (square[3] == square[6] && square[6] == square[9] && square[6] != '') {
    end(3, 6, 9);
  }
  else if (square[1] == square[5] && square[5] == square[9] && square[5] != '') {
    end(1, 5, 9);
  }
  else if (square[3] == square[5] && square[5] == square[7] && square[5] != '') {
    end(3, 5, 7);
  }
}

function game(id) {
  let element = document.getElementById(id);

  if (turn === 'x' && element.innerHTML == '') {
    element.innerHTML = 'x';
    turn = 'o';
    title.innerHTML = 'O turn';
  }
  else if (turn === 'o' && element.innerHTML == '') {
    element.innerHTML = 'o';
    turn = 'x';
    title.innerHTML = 'X turn';
  }

  winnner();
}
