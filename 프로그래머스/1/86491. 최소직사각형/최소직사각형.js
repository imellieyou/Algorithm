function solution(sizes) {
    const size_arr = sizes.map(size => size.sort((a, b) => a - b));

    // 각 명함의 가로와 세로 중 최대값을 구함
    const maxWidth = Math.max(...size_arr.map(size => size[0]));
    const maxHeight = Math.max(...size_arr.map(size => size[1]));

    // 최소 지갑 크기 반환
    return maxWidth * maxHeight;
}
