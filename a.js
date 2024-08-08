
var lotto_batch;
var player_batch;

while (true) {

  lotto_batch = [random(45), random(45), random(45), random(45), random(45), random(45), random(45)];


  if (lotto_batch[0] != lotto_batch[1] != lotto_batch[2] != lotto_batch[3] != lotto_batch[4] != lotto_batch[5] != lotto_batch[6]) {
    break;
  };

};

while (true) {

  player_batch = [random(45), random(45), random(45), random(45), random(45), random(45)];


  if (player_batch[0] != player_batch[1] != player_batch[2] != player_batch[3] != player_batch[4] != player_batch[5]) {
    break;
  };

};

for (var w = 0; w <= 6; w++) {
  if (w == 6) {
    dw("보너스 번호! : " + lotto_batch[w]);
    break;
  };
  dw(lotto_batch[w]);
  br();
};

hr(); //=============================================

for (var e = 0; e <= 5; e++) {
  dw(player_batch[e]);
  br();
};

//====================================================
var count = 0;





for (var p = 0; p <= 5; p++) {

  for (var q = 0; q <= 5; q++) {

    if (player_batch[q] == lotto_batch[p]) {
      count = count + 1;
    };
  };
};

var bonus_count = 0;

for (var l = 0; l <= 5; l++) {
  if (player_batch[l] == lotto_batch[6]) {
    bonus_count = bonus_count + 1;
    break;
  };
};

//===============================================

hr();

dw("맞힌갯수:" + count)

br();
if(bonus_count == 1){
dw( "맞힌 보너스 번호가 당첨됐습니다!");
};
hr();

if (count <= 2) {
  dw("꽝입니다.")
}
if (count == 3) {
  dw("5등입니다.")
}
if (count == 4) {
  dw("4등입니다.")
}
if (count == 5) {
  dw("3등입니다.")
}
if (count == 5 && bonus_count == 1) {
  dw("2등입니다.")
}

if (count == 6) {
  dw("1등입니다.")
}

