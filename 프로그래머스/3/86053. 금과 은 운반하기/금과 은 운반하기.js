function solution(a, b, g, s, w, t) {
  let answer = 10 ** 15;

  let start = 0;
  let end = 10 ** 15;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let gold = 0;
    let silver = 0;
    let total = 0;

    for (let i = 0; i < g.length; i++) {
      let currGold = g[i];
      let currSilver = s[i];
      let currWeight = w[i];
      let currTime = t[i];

      let wayCnt = Math.floor(mid / (currTime * 2));
      if (mid % (currTime * 2) >= t[i]) wayCnt++;

      gold += currGold < wayCnt * currWeight ? currGold : wayCnt * currWeight;
      silver +=
        currSilver < wayCnt * currWeight ? currSilver : wayCnt * currWeight;
      total +=
        currGold + currSilver < wayCnt * currWeight
          ? currGold + currSilver
          : wayCnt * currWeight;
    }

    if (gold >= a && silver >= b && total >= a + b) {
      end = mid - 1;
      answer = Math.min(mid, answer);
    } else {
      start = mid + 1;
    }
  }
  return answer;
}
