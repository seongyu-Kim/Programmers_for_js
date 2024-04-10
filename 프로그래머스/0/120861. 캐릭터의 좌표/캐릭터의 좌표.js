function solution(keyinput, board) {
    var answer = [0, 0];

    for (let el of keyinput) {
        if (el === "left" && Math.abs(answer[0] - 1) <= (board[0] - 1) / 2) answer[0] -= 1;
        else if (el === "right" && Math.abs(answer[0] + 1) <= (board[0] - 1) / 2) answer[0] += 1;
        else if (el === "up" && Math.abs(answer[1] + 1) <= (board[1] - 1) / 2) answer[1] += 1;
        else if (el === "down" && Math.abs(answer[1] - 1) <= (board[1] - 1) / 2) answer[1] -= 1;
        console.log(answer);
    }

    return answer;
}
