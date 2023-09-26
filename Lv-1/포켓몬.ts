function solution(nums) {
    const answer = new Set(nums);
    const length = parseInt(String(nums.length / 2));
    return answer.size > length ? length : answer.size;
}