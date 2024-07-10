// a	 b	  g	    s	   w	 t	result
// 10	10	[100]	[100]	[7]	[10]	50

// a	 b	    g	        s	         w	       t	   result
// 90	500	[70,70,0]	[0,0,500]	[100,100,2] [4,8,1]    499

//새 왕국에 필요한 광물 각각 10, 10
//i번 도시에 가지고 있는 광물 각각 100, 100
//최대 이동 시킬 수 있는 광물의 무게 7
//i번 도시와 새 왕국까지 편도 시간 10
//최소 시간 return

//sum time
//7(g)   10+10 = 20
//7(g)+7(s)   10+10 = 40
//7+3(g) + 7+3(s) 10 = 50

// function solution(a, b, g, s, w, t) {
//   var answer = Infinity;

//   const n = g.length;

//   let left = 1;
//   let right = (Math.max(...w) + 1) * Math.max(...t);

//   while (left < right) {
//     const mid = Math.floor((left + right) / 2);

//     let gold = 0;
//     let silver = 0;
//     let total = 0;
//     for (let i = 0; i < n; i++) {
//       const canOneWay = mid % (t[i] * 2) >= t[i];
//       console.log(canOneWay);
//       let availableWeight = Math.floor(mid / (t[i] * 2)) * w[i];
//       if (canOneWay) availableWeight += w[i];

//       gold += availableWeight > g[i] ? g[i] : availableWeight;
//       silver += availableWeight > s[i] ? s[i] : availableWeight;
//       total += availableWeight > s[i] + g[i] ? s[i] + g[i] : availableWeight;
//     }

//     if (gold >= a && silver >= b && total >= a + b) {
//       right = mid;
//       answer = Math.min(answer, mid);
//     } else {
//       left = mid + 1;
//     }
//   }

//   return answer;
// }

// console.log(
//   solution(90, 500, [70, 70, 0], [0, 0, 500], [100, 100, 2], [4, 8, 1])
// );

// a	 b	  g	    s	   w	 t	result
// 10	10	[100]	[100]	[7]	[10]	50

function solution(a, b, g, s, w, t) {
  let answer = 10**15;

  let start = 0;
  let end = 10**15;

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

      gold += Math.min(currGold, wayCnt * currWeight);
      silver += Math.min(currSilver, wayCnt * currWeight);
      total += Math.min(currGold + currSilver, wayCnt * currWeight);
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

console.log(solution(10, 10, [100], [100], [7], [10]));

console.log(
  solution(90, 500, [70, 70, 0], [0, 0, 500], [100, 100, 2], [4, 8, 1])
);
